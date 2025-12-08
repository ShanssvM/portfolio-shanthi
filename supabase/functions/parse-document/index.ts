import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return new Response(
        JSON.stringify({ error: 'No file provided' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const fileName = file.name.toLowerCase();
    let extractedText = '';

    console.log(`Processing file: ${file.name}, type: ${file.type}, size: ${file.size}`);

    if (fileName.endsWith('.txt')) {
      // Plain text file
      extractedText = await file.text();
      console.log('Extracted text file content, length:', extractedText.length);
    } else if (fileName.endsWith('.pdf')) {
      // For PDF, use Lovable AI to extract text from the document
      const arrayBuffer = await file.arrayBuffer();
      const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
      
      const apiKey = Deno.env.get('LOVABLE_API_KEY');
      if (!apiKey) {
        throw new Error('LOVABLE_API_KEY not configured');
      }

      console.log('Sending PDF to Lovable AI for text extraction...');
      
      const response = await fetch('https://ai.lovable.dev/api/v2/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'google/gemini-2.5-flash',
          messages: [
            {
              role: 'user',
              content: [
                {
                  type: 'text',
                  text: 'Please extract ALL the text content from this PDF document. Return ONLY the extracted text, preserving the structure and formatting as much as possible. Do not add any commentary or explanations.'
                },
                {
                  type: 'file',
                  file: {
                    filename: file.name,
                    file_data: `data:application/pdf;base64,${base64}`
                  }
                }
              ]
            }
          ],
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Lovable AI error:', errorText);
        throw new Error(`AI extraction failed: ${response.status}`);
      }

      const data = await response.json();
      extractedText = data.choices?.[0]?.message?.content || '';
      console.log('Extracted PDF content, length:', extractedText.length);
    } else if (fileName.endsWith('.docx')) {
      // For DOCX, use Lovable AI to extract text
      const arrayBuffer = await file.arrayBuffer();
      const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
      
      const apiKey = Deno.env.get('LOVABLE_API_KEY');
      if (!apiKey) {
        throw new Error('LOVABLE_API_KEY not configured');
      }

      console.log('Sending DOCX to Lovable AI for text extraction...');
      
      const response = await fetch('https://ai.lovable.dev/api/v2/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'google/gemini-2.5-flash',
          messages: [
            {
              role: 'user',
              content: [
                {
                  type: 'text',
                  text: 'Please extract ALL the text content from this Word document. Return ONLY the extracted text, preserving the structure and formatting as much as possible. Do not add any commentary or explanations.'
                },
                {
                  type: 'file',
                  file: {
                    filename: file.name,
                    file_data: `data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,${base64}`
                  }
                }
              ]
            }
          ],
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Lovable AI error:', errorText);
        throw new Error(`AI extraction failed: ${response.status}`);
      }

      const data = await response.json();
      extractedText = data.choices?.[0]?.message?.content || '';
      console.log('Extracted DOCX content, length:', extractedText.length);
    } else {
      return new Response(
        JSON.stringify({ error: 'Unsupported file type. Please upload TXT, PDF, or DOCX files.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ content: extractedText }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error parsing document:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to parse document' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
