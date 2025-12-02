import { useState, useEffect, useRef } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { Upload, FileText, Send, Trash2, Loader2, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Document {
  id: string;
  name: string;
  file_path: string;
  content: string | null;
  file_type: string;
  file_size: number;
  created_at: string;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ChatDrawer({ open, onOpenChange }: ChatDrawerProps) {
  const { user, isAdmin, signOut } = useAuth();
  const [documents, setDocuments] = useState<Document[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      fetchDocuments();
    }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const fetchDocuments = async () => {
    const { data, error } = await supabase
      .from('documents')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching documents:', error);
      toast({ title: 'Error', description: 'Failed to load documents', variant: 'destructive' });
    } else {
      setDocuments(data || []);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = ['text/plain', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const allowedExtensions = ['.txt', '.pdf', '.docx'];
    const extension = '.' + file.name.split('.').pop()?.toLowerCase();

    if (!allowedTypes.includes(file.type) && !allowedExtensions.includes(extension)) {
      toast({ title: 'Invalid file', description: 'Please upload a TXT, PDF, or DOCX file', variant: 'destructive' });
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast({ title: 'File too large', description: 'Maximum file size is 10MB', variant: 'destructive' });
      return;
    }

    setIsUploading(true);

    try {
      // Read file content for text files
      let content = '';
      if (file.type === 'text/plain' || extension === '.txt') {
        content = await file.text();
      } else {
        content = `[Binary file: ${file.name}] - Content extraction not available for this file type in demo.`;
      }

      const fileName = `${Date.now()}-${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from('documents')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { error: dbError } = await supabase
        .from('documents')
        .insert({
          name: file.name,
          file_path: fileName,
          content: content.slice(0, 50000), // Limit content size
          file_type: extension.replace('.', ''),
          file_size: file.size,
        });

      if (dbError) throw dbError;

      toast({ title: 'Success', description: 'Document uploaded successfully' });
      fetchDocuments();
    } catch (error) {
      console.error('Upload error:', error);
      toast({ title: 'Error', description: 'Failed to upload document', variant: 'destructive' });
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleDeleteDocument = async (doc: Document) => {
    try {
      await supabase.storage.from('documents').remove([doc.file_path]);
      await supabase.from('documents').delete().eq('id', doc.id);
      
      toast({ title: 'Deleted', description: 'Document removed successfully' });
      if (selectedDoc?.id === doc.id) {
        setSelectedDoc(null);
        setMessages([]);
      }
      fetchDocuments();
    } catch (error) {
      console.error('Delete error:', error);
      toast({ title: 'Error', description: 'Failed to delete document', variant: 'destructive' });
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || !selectedDoc?.content) return;

    const userMessage: Message = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('document-chat', {
        body: {
          question: inputValue,
          documentContent: selectedDoc.content,
          documentName: selectedDoc.name,
        },
      });

      if (error) throw error;

      const assistantMessage: Message = { role: 'assistant', content: data.answer };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error('Chat error:', error);
      const errorMessage = error.message || 'Failed to get response';
      toast({ title: 'Error', description: errorMessage, variant: 'destructive' });
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectDocument = (doc: Document) => {
    setSelectedDoc(doc);
    setMessages([{ role: 'assistant', content: `I'm ready to answer questions about "${doc.name}". What would you like to know?` }]);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col p-0">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center justify-between">
            <SheetTitle>Document Q&A</SheetTitle>
            {user ? (
              <Button variant="ghost" size="sm" onClick={() => signOut()}>
                Sign Out
              </Button>
            ) : (
              <Button variant="ghost" size="sm" asChild>
                <Link to="/auth">
                  <LogIn className="h-4 w-4 mr-2" />
                  Admin
                </Link>
              </Button>
            )}
          </div>
        </SheetHeader>

        <Tabs defaultValue="chat" className="flex-1 flex flex-col overflow-hidden">
          <TabsList className="mx-4 mt-2">
            <TabsTrigger value="chat" className="flex-1">Chat</TabsTrigger>
            <TabsTrigger value="documents" className="flex-1">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="chat" className="flex-1 flex flex-col overflow-hidden m-0 p-4">
            {!selectedDoc ? (
              <div className="flex-1 flex items-center justify-center text-muted-foreground text-center p-4">
                <div>
                  <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Select a document from the Documents tab to start chatting</p>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-2 p-2 bg-muted rounded-md text-sm">
                  <span className="font-medium">Chatting about:</span> {selectedDoc.name}
                </div>
                <ScrollArea className="flex-1 pr-4">
                  <div className="space-y-4">
                    {messages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-lg ${
                          msg.role === 'user'
                            ? 'bg-primary text-primary-foreground ml-8'
                            : 'bg-muted mr-8'
                        }`}
                      >
                        {msg.content}
                      </div>
                    ))}
                    {isLoading && (
                      <div className="bg-muted mr-8 p-3 rounded-lg flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Thinking...
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
                <div className="flex gap-2 mt-4">
                  <Input
                    placeholder="Ask a question..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                    disabled={isLoading}
                  />
                  <Button onClick={handleSendMessage} disabled={isLoading || !inputValue.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </>
            )}
          </TabsContent>

          <TabsContent value="documents" className="flex-1 flex flex-col overflow-hidden m-0 p-4">
            {isAdmin && (
              <div className="mb-4">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".txt,.pdf,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  className="w-full"
                >
                  {isUploading ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <Upload className="h-4 w-4 mr-2" />
                  )}
                  {isUploading ? 'Uploading...' : 'Upload Document'}
                </Button>
              </div>
            )}

            <ScrollArea className="flex-1">
              {documents.length === 0 ? (
                <div className="text-center text-muted-foreground py-8">
                  <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No documents uploaded yet</p>
                  {!isAdmin && <p className="text-sm mt-2">Admin can upload documents</p>}
                </div>
              ) : (
                <div className="space-y-2">
                  {documents.map((doc) => (
                    <div
                      key={doc.id}
                      className={`p-3 rounded-lg border cursor-pointer hover:bg-accent transition-colors ${
                        selectedDoc?.id === doc.id ? 'bg-accent border-primary' : ''
                      }`}
                      onClick={() => handleSelectDocument(doc)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 min-w-0">
                          <FileText className="h-4 w-4 flex-shrink-0" />
                          <span className="truncate font-medium">{doc.name}</span>
                        </div>
                        {isAdmin && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 flex-shrink-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteDocument(doc);
                            }}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {doc.file_type.toUpperCase()} • {(doc.file_size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
