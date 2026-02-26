import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Chinese Speaking Coach
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Talk Chinese out loud, get corrected like a coach, and finish a real-life mission each time.
          </p>
          <Link href="/practice">
            <Button size="lg" className="text-lg px-8">
              开始练习 Start Now
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">✈️</span> 旅游场景
              </CardTitle>
              <CardDescription>
                点餐、打车、酒店、问路
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                5 个任务 · A1 难度
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">💼</span> 商务场景
              </CardTitle>
              <CardDescription>
                自我介绍、约会议、确认需求
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                3 个任务 · A2-B1 难度
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>免费 10 次对话 · $9.9/月无限练习</p>
        </div>
      </main>
    </div>
  );
}
