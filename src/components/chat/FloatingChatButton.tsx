import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChatDrawer } from './ChatDrawer';

export function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-shadow z-40"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      
      <ChatDrawer open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
