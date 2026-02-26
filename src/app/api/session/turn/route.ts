import { NextResponse } from 'next/server';

// 模拟 AI 回复
export async function POST(request: Request) {
  const body = await request.json();
  const { sessionId, transcript } = body;
  
  // TODO: 调用 MiniMax API 进行对话
  // TODO: 调用发音评分 API
  
  // 模拟响应
  const aiResponse = {
    text: "好的，我明白了。请问您想要点些什么？",
    audioUrl: null, // TODO: TTS
    score: {
      total: 85,
      tone: "声调总体不错，第三声需要加强",
      highlights: ["第三声"],
    },
    coaching: {
      tips: ["再说一遍", "注意第三声"],
      drillSentence: "我想点一个宫保鸡丁",
    },
  };
  
  return NextResponse.json(aiResponse);
}
