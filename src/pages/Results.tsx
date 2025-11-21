import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight, Send, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { generateRecommendations } from "@/lib/researchKnowledgeBase";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState<any>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const assessmentData = location.state?.assessmentData;
    
    if (!assessmentData) {
      navigate('/assessment');
      return;
    }

    const recommendations = generateRecommendations(assessmentData);
    setResults({ recommendations, userData: assessmentData });

    // Initial AI greeting
    setMessages([{
      role: 'assistant',
      content: `Welcome to your personalized ${assessmentData.os_type} protocol! 

I've analyzed your assessment based on 524,592+ clinical data points and gender-specific biology research.

**Your Protocol Summary:**
• ${recommendations.bloodTests.length} critical blood biomarkers to test
• ${recommendations.supplements.length} evidence-based supplements
${recommendations.lifestyle.length > 0 ? `• ${recommendations.lifestyle.length} lifestyle optimization areas` : ''}

Ask me anything about:
- Why these specific blood tests matter
- Supplement recommendations and dosing
- Research behind the recommendations
- Why we focus on blood biomarkers instead of DNA testing`
    }]);
  }, [location, navigate]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = { role: 'user' as const, content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('ai-health-advisor', {
        body: {
          message: inputMessage,
          userContext: results.userData
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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const suggestedQuestions = [
    "Why no DNA testing?",
    "Explain iron testing",
    "Omega-3 benefits?",
    "Optimal vitamin D levels?"
  ];

  if (!results) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading your results...</div>
      </div>
    );
  }

  const { recommendations, userData } = results;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Your {userData.os_type} Protocol
          </h1>
          <p className="text-muted-foreground">
            Evidence-based recommendations powered by 524,592+ clinical data points
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Recommendations */}
          <div className="space-y-6">
            {/* Blood Tests */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">🩸 Blood Biomarkers to Test</h2>
              <div className="space-y-4">
                {recommendations.bloodTests.map((test: any, idx: number) => (
                  <div key={idx} className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">{test.name}</h3>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                        test.priority === 'CRITICAL' 
                          ? 'bg-destructive/20 text-destructive' 
                          : 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400'
                      }`}>
                        {test.priority}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{test.reason}</p>
                    <div className="text-xs text-muted-foreground">
                      <span className="font-semibold">Optimal:</span>{' '}
                      {typeof test.optimalRange === 'string' 
                        ? test.optimalRange 
                        : test.optimalRanges?.[userData.gender] || test.optimalRanges}
                    </div>
                    <div className="text-xs text-primary mt-1">
                      Evidence Level: {test.evidenceLevel}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Supplements */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">💊 Evidence-Based Supplements</h2>
              <div className="space-y-4">
                {recommendations.supplements.map((supp: any, idx: number) => (
                  <div key={idx} className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">{supp.name}</h3>
                      <span className="px-3 py-1 text-xs font-bold rounded-full bg-green-500/20 text-green-600 dark:text-green-400">
                        Level {supp.evidenceLevel}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{supp.reason}</p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                      <div><span className="font-semibold">Dosage:</span> {supp.dosage}</div>
                      <div><span className="font-semibold">Timing:</span> {supp.timing}</div>
                    </div>
                    {supp.bloodTestToVerify && (
                      <div className="text-xs text-primary mt-2">
                        Verify with: {supp.bloodTestToVerify}
                      </div>
                    )}
                    {supp.WARNING && (
                      <div className="mt-2 p-2 bg-destructive/20 border border-destructive/50 rounded text-xs text-destructive">
                        ⚠️ {supp.WARNING}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Lifestyle */}
            {recommendations.lifestyle.length > 0 && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">🎯 Lifestyle Optimization</h2>
                <div className="space-y-4">
                  {recommendations.lifestyle.map((item: any, idx: number) => (
                    <div key={idx} className="p-4 bg-destructive/10 border border-destructive/50 rounded-lg">
                      <h3 className="font-bold text-destructive mb-2">{item.area}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.reason}</p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="text-muted-foreground">Current: {item.current}</div>
                        <div className="text-green-600 dark:text-green-400">Target: {item.target}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>

          {/* Right: AI Chat */}
          <div className="lg:sticky lg:top-4 h-fit">
            <Card className="p-6 flex flex-col h-[800px]">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">AI Health Advisor</h2>
              </div>
              <div className="text-sm text-muted-foreground mb-4">
                Trained on 524,592+ clinical data points
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 pr-4 mb-4">
                <div className="space-y-4">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] p-4 rounded-lg ${
                        msg.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}>
                        <div className="whitespace-pre-wrap text-sm">{msg.content}</div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="flex gap-2">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Suggested Questions */}
              <div className="mb-4 flex flex-wrap gap-2">
                {suggestedQuestions.map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => setInputMessage(question)}
                    className="px-3 py-1 text-xs bg-muted hover:bg-muted/80 rounded-full transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about blood tests, supplements, or research..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  onClick={sendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  size="icon"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Button onClick={() => navigate('/upload')} size="lg">
            Upload Blood Work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
