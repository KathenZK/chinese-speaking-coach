import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function BillingPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-2xl font-bold mb-6">订阅</h1>
        
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>免费</CardTitle>
              <CardDescription>体验版</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">¥0</p>
              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                <li>✓ 10 次对话</li>
                <li>✓ 旅游场景</li>
                <li>✗ 商务场景</li>
              </ul>
              <Button className="w-full mt-4" variant="outline">当前计划</Button>
            </CardContent>
          </Card>

          <Card className="border-blue-500">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>无限练习</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$9.9<span className="text-sm font-normal">/月</span></p>
              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                <li>✓ 无限对话</li>
                <li>✓ 所有场景</li>
                <li>✓ 发音评分</li>
                <li>✓ 练习报告</li>
              </ul>
              <Button className="w-full mt-4">立即订阅</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
