import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-2xl font-bold mb-6">账户</h1>
        
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>用户信息</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">游客用户</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardHeader>
            <CardTitle>订阅状态</CardTitle>
            <CardDescription>当前计划</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">免费版</p>
                <p className="text-sm text-gray-500">剩余 10 次对话</p>
              </div>
              <Badge>Free</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>练习历史</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 text-sm">暂无记录</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
