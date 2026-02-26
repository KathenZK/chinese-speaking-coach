'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Airplane, Briefcase, Microphone, ChartLine, ArrowRight } from '@phosphor-icons/react';

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-slate-950 text-slate-50">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-slate-800/50 rounded-full blur-[100px]" />
      </div>

      <main className="relative container mx-auto px-6 py-20 max-w-7xl">
        {/* Split Screen Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-sm text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              AI-Powered Language Learning
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Speak Chinese
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                Like a Native
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-[500px] leading-relaxed">
              Master real-world conversations through interactive AI coaching. 
              Get instant pronunciation feedback and complete missions that matter.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/practice">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-8 h-14 text-lg">
                  Start Practice
                  <ArrowRight weight="bold" className="ml-2" />
                </Button>
              </Link>
              <Link href="/billing">
                <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 h-14">
                  View Plans
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2 text-slate-400">
                <Microphone size={20} weight="fill" className="text-emerald-500" />
                <span className="text-sm">Voice Input</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <ChartLine size={20} weight="fill" className="text-emerald-500" />
                <span className="text-sm">Real-time Scoring</span>
              </div>
            </div>
          </div>

          {/* Right: Cards */}
          <div className="grid gap-6">
            <Card className="bg-slate-900/60 border-slate-800 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Airplane size={24} weight="fill" className="text-emerald-400" />
                </div>
                <div>
                  <CardTitle className="text-slate-100">Travel Scenarios</CardTitle>
                  <CardDescription className="text-slate-400">
                    Restaurants, taxis, hotels, directions
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  5 missions - A1 Level
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/60 border-slate-800 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Briefcase size={24} weight="fill" className="text-emerald-400" />
                </div>
                <div>
                  <CardTitle className="text-slate-100">Business Chinese</CardTitle>
                  <CardDescription className="text-slate-400roduction, meetings, negotiations
                  ">
                    Self-int</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  3 missions - A2/B1 Level
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <p className="text-slate-500">
            Free 10 conversations - $9.9/month for unlimited practice
          </p>
        </div>
      </main>
    </div>
  );
}
