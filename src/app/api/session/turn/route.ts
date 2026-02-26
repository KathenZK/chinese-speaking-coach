import { NextResponse } from 'next/server';

const API_KEY = process.env.MINIMAX_API_KEY;
const BASE_URL = 'https://api.minimaxi.chat/v1';

// 模拟会话存储
const sessions = new Map();

export async function POST(request: Request) {
  const body = await request.json();
  const { sessionId, transcript, taskId } = body;
  
  // 如果没有 transcript（刚开始对话），返回开场白
  if (!transcript) {
    const taskInfo = getTaskIntro(taskId);
    return NextResponse.json({
      text: taskInfo.intro,
      audioUrl: null,
      score: null,
      coaching: null,
    });
  }
  
  // 调用 MiniMax API 进行对话
  const aiReply = await callMiniMax(transcript, taskId);
  
  // 模拟评分（实际应该调用发音评分 API）
  const score = generateScore(transcript);
  
  return NextResponse.json({
    text: aiReply,
    audioUrl: null,
    score,
    coaching: {
      tips: score.tips,
      drillSentence: score.drillSentence,
    },
  });
}

function getTaskIntro(taskId: string) {
  const tasks: Record<string, { intro: string }> = {
    'travel-1': { intro: '你好！欢迎光临，请问几位？需要点些什么？' },
    'travel-2': { intro: '您好，请问您想去哪里？' },
    'travel-3': { intro: '您好，请问有预订吗？' },
    'travel-4': { intro: '需要帮忙吗？' },
    'travel-5': { intro: '您好，请问买几张票？' },
    'business-1': { intro: '大家好，让我们欢迎新同事做自我介绍。' },
    'business-2': { intro: '明天下午有个会议，你想参加吗？' },
    'business-3': { intro: '您好，我是来咨询项目的。' },
  };
  return tasks[taskId] || { intro: '你好，请说中文。' };
}

async function callMiniMax(userMessage: string, taskId: string): Promise<string> {
  if (!API_KEY) {
    return '抱歉，API 未配置。';
  }
  
  try {
    const response = await fetch(`${BASE_URL}/text/chatcompletion_pro`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'abab6.5s-chat',
        messages: [
          {
            role: 'system',
            content: '你是一个中文口语练习助手。请用简短的中文回复（1-2句话），帮助用户练习中文。用户正在完成任务。'
          },
          {
            role: 'user',
            content: userMessage
          }
        ],
        temperature: 0.7,
        max_tokens: 200,
      }),
    });
    
    const data = await response.json();
    return data.choices?.[0]?.message?.content || '好的，我明白了。';
  } catch (error) {
    console.error('MiniMax API error:', error);
    return '抱歉，我暂时无法回复。';
  }
}

function generateScore(transcript: string) {
  // 简单模拟评分
  const hasTones = transcript.includes('1') || transcript.includes('2') || 
                   transcript.includes('3') || transcript.includes('4');
  const length = transcript.length;
  
  const total = Math.min(100, 60 + Math.floor(length / 2) + (hasTones ? 10 : 0));
  
  return {
    total,
    tone: total > 80 ? '声调不错！' : '注意声调，特别是第三声。',
    highlights: ['第三声'],
    tips: total > 80 ? ['保持练习'] : ['多说几遍', '注意声调'],
    drillSentence: '我想点一个宫保鸡丁',
  };
}
