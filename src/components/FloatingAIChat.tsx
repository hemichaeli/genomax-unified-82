import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Message {
  role: 'user' | 'assistant';
  content: string;
  references?: any[];
  evidence?: string;
}

export const FloatingAIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        role: 'assistant',
        content: `Hi! I'm your GenoMAX² AI Advisor, trained on 524,592+ clinical data points.\n\nI can explain:\n• Why we DON'T use DNA testing (based on our research)\n• Which blood biomarkers actually matter\n• Evidence-based supplement protocols\n• Gender-specific optimization\n\nWhat would you like to know?`
      }]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { role: 'user' as const, content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('ai-health-advisor', {
        body: {
          message: inputMessage,
          userContext: {
            gender: 'general',
            age: 'general',
            os_type: 'GenoMAX²',
            goals: [],
            concernCategory: 'general'
          }
        }
      });

      if (error) throw error;

      if (data?.message) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: data.message
        }]);
      }
    } catch (error: any) {
      console.error('Chat error:', error);
      toast.error(error.message || 'Failed to get AI response');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full shadow-2xl hover:shadow-fuchsia-500/50 transition-all duration-300 flex items-center justify-center group"
        aria-label="Open AI Chat"
      >
        {isOpen ? (
          <X className="w-8 h-8 text-white" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-8 h-8 text-white" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed top-4 bottom-24 left-4 right-4 md:top-auto md:bottom-24 md:right-6 md:left-auto z-50 w-auto md:w-96 md:h-[600px] bg-background border border-border rounded-2xl shadow-2xl flex flex-col animate-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-white" />
                <div>
                  <h3 className="text-white font-bold text-lg">AI Advisor</h3>
                  <p className="text-purple-100 text-xs">Trained on 524,592+ data points</p>
                </div>
              </div>
              <div className="w-3 h-3 bg-green-400 rounded-full" />
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white'
                    : 'bg-muted text-foreground'
                } p-3 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'rounded-br-sm' 
                    : 'rounded-bl-sm'
                }`}>
                  <div className="text-sm whitespace-pre-wrap leading-relaxed">{msg.content}</div>
                  
                  {msg.evidence && (
                    <div className="mt-2 pt-2 border-t border-primary/20 text-xs opacity-80">
                      {msg.evidence}
                    </div>
                  )}

                  {msg.references && msg.references.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-primary/20 text-xs opacity-80">
                      <div className="font-bold mb-1">📚 Research:</div>
                      {msg.references.map((ref: any, i: number) => (
                        <div key={i} className="mb-1">
                          • {ref.name} {ref.participants && `(n=${ref.participants.toLocaleString()})`}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted p-3 rounded-2xl rounded-bl-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div className="px-4 py-2 border-t border-border bg-background">
            <div className="flex flex-wrap gap-2">
              {[
                "Why no DNA testing?",
                "Best supplements?",
                "What to test first?",
                "Gender differences?"
              ].map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => setInputMessage(question)}
                  className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full hover:bg-muted/80 transition-all"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-background rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                placeholder="Ask about blood tests, supplements..."
                className="flex-1 px-3 py-2 bg-muted border border-border rounded-lg text-foreground text-sm focus:outline-none focus:border-primary placeholder-muted-foreground"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-lg font-semibold disabled:opacity-50 hover:shadow-lg transition-all text-sm"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
