import { NextResponse } from 'next/server';
import tasks from '@/data/tasks/index.json';

export async function GET() {
  const scenarios = [
    { id: 'travel', name: '旅游', icon: '✈️', taskCount: 5 },
    { id: 'business', name: '商务', icon: '💼', taskCount: 3 },
  ];
  return NextResponse.json(scenarios);
}
