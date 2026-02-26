'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Scenario {
  id: string;
  name: string;
  icon: string;
  taskCount: number;
}

interface Task {
  id: string;
  scenario: string;
  title: string;
  description: string;
  level: string;
  goal: string;
}

export default function PracticePage() {
  const router = useRouter();
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/api/scenarios')
      .then(res => res.json())
      .then(data => setScenarios(data));
  }, []);

  const selectScenario = async (scenarioId: string) => {
    setSelectedScenario(scenarioId);
    setLoading(true);
    try {
      const res = await fetch(`/api/tasks?scenario=${scenarioId}`);
      const data = await res.json();
      setTasks(data);
    } finally {
      setLoading(false);
    }
  };

  const startTask = async (taskId: string) => {
    const res = await fetch('/api/session/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ taskId }),
    });
    const data = await res.json();
    router.push(`/practice/${data.sessionId}?taskId=${taskId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-2xl font-bold mb-6">选择场景</h1>
        
        {!selectedScenario ? (
          <div className="grid md:grid-cols-2 gap-4">
            {scenarios.map(scenario => (
              <Card 
                key={scenario.id} 
                className="cursor-pointer hover:shadow-md transition"
                onClick={() => selectScenario(scenario.id)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{scenario.icon}</span>
                    {scenario.name}
                  </CardTitle>
                  <CardDescription>{scenario.taskCount} 个任务</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : (
          <div>
            <Button variant="ghost" onClick={() => setSelectedScenario(null)} className="mb-4">
              ← 返回场景选择
            </Button>
            
            {loading ? (
              <p>加载中...</p>
            ) : (
              <div className="space-y-3">
                {tasks.map(task => (
                  <Card key={task.id} className="cursor-pointer hover:shadow-md"
                    onClick={() => startTask(task.id)}>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>{task.title}</CardTitle>
                        <CardDescription>{task.description}</CardDescription>
                      </div>
                      <Badge variant="secondary">{task.level}</Badge>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
