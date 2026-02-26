'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Message {
  role: 'user' | 'ai';
  text: string;
  score?: {
    total: number;
    tone: string;
    highlights: string[];
  };
}

export default function PracticeSessionPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('sessionId');
  const taskId = searchParams.get('taskId');
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/session/turn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, transcript: input }),
      });
      const data = await res.json();
      
      const aiMessage: Message = {
        role: 'ai',
        text: data.text,
        score: data.score,
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b p-4">
        <div className="container mx-auto max-w-2xl flex justify-between items-center">
          <h1 className="font-semibold">练习中</h1>
          <Badge>剩余 10 次</Badge>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto p-4">
        <div className="container mx-auto max-w-2xl space-y-4">
          {messages.length === 0 && (
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <p className="text-sm text-blue-800">
                  🎯 任务目标：成功点完一顿饭<br/>
                  💡 提示：试试说 "我想点一个宫保鸡丁"
                </p>
              </CardContent>
            </Card>
          )}
          
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-lg p-3 ${
                msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white border'
              }`}>
                <p>{msg.text}</p>
                {msg.score && (
                  <div className={`mt-2 text-xs ${msg.role === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                    <p>得分：{msg.score.total}/100</p>
                    <p>{msg.score.tone}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="bg-white border-t p-4">
        <div className="container mx-auto max-w-2xl flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="输入你的回答..."
            className="flex-1 border rounded-lg px-4 py-2"
            disabled={loading}
          />
          <Button onClick={sendMessage} disabled={loading}>
            {loading ? '...' : '发送'}
          </Button>
        </div>
      </div>
    </div>
  );
}
