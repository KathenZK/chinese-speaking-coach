import { NextResponse } from 'next/server';

// 模拟会话存储
const sessions = new Map();

export async function POST(request: Request) {
  const body = await request.json();
  const { taskId } = body;
  
  const sessionId = `session_${Date.now()}`;
  const session = {
    id: sessionId,
    taskId,
    turns: [],
    startedAt: new Date().toISOString(),
  };
  
  sessions.set(sessionId, session);
  
  return NextResponse.json({ 
    sessionId, 
    message: "会话已开始" 
  });
}
