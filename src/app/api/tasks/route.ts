import { NextResponse } from 'next/server';
import tasks from '@/data/tasks/index.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const scenario = searchParams.get('scenario');
  
  const filtered = scenario 
    ? tasks.filter(t => t.scenario === scenario)
    : tasks;
  
  return NextResponse.json(filtered);
}
