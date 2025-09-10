"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Custom icons
function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );
}

function CurrencyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

export default function DashboardPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-bengali mb-2">
          স্বাগতম, মূল ড্যাশবোর্ডে
        </h1>
        <p className="text-gray-600 dark:text-gray-300 font-bengali">
          দারুল আবরার মডেল কামিল মাদ্রাসা - সম্পূর্ণ তথ্যের এক নজরে
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium font-bengali">মোট ছাত্র-ছাত্রী</CardTitle>
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">১,২৪৫</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground font-bengali">
              <span className="text-green-600">+১২%</span>
              <span>গত মাস থেকে</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium font-bengali">শিক্ষক-কর্মচারী</CardTitle>
            <GraduationCapIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">৮৭</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground font-bengali">
              <span className="text-green-600">+২</span>
              <span>নতুন নিয়োগ</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium font-bengali">মাসিক আয়</CardTitle>
            <CurrencyIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">৳৮,৪৫,০০০</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground font-bengali">
              <span className="text-green-600">+৮%</span>
              <span>গত মাস থেকে</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium font-bengali">আজকের উপস্থিতি</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">৯২%</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground font-bengali">
              <span>১,১৪৫ জন</span>
              <span>উপস্থিত</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Class-wise Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-bengali">শ্রেণীভিত্তিক ছাত্র সংখ্যা</CardTitle>
            <CardDescription className="font-bengali">
              বর্তমান একাডেমিক বছরের পরিসংখ্যান
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {classData.map((cls, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="font-bengali text-sm font-medium">{cls.name}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Progress value={cls.percentage} className="w-20 h-2" />
                    <span className="text-sm font-medium">{cls.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-bengali">সাম্প্রতিক কার্যক্রম</CardTitle>
            <CardDescription className="font-bengali">
              গত ৭ দিনের গুরুত্বপূর্ণ ঘটনা
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium font-bengali">{activity.title}</p>
                    <p className="text-xs text-gray-500 font-bengali">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="font-bengali">দ্রুত অ্যাক্সেস</CardTitle>
          <CardDescription className="font-bengali">
            প্রায়ই ব্যবহৃত কার্যক্রমসমূহ
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActions.map((action, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center mb-2">
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium font-bengali text-center">
                  {action.name}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const classData = [
  { name: "নূরানী", count: 150, percentage: 80 },
  { name: "নাজেরা", count: 200, percentage: 85 },
  { name: "হিফজ", count: 120, percentage: 75 },
  { name: "দাখিল", count: 300, percentage: 90 },
  { name: "আলিম", count: 250, percentage: 88 },
  { name: "ফাযিল", count: 150, percentage: 82 },
  { name: "কামিল", count: 75, percentage: 70 },
];

const recentActivities = [
  {
    title: "নতুন ছাত্র ভর্তি - ২৫ জন",
    time: "২ ঘন্টা আগে",
  },
  {
    title: "মাসিক পরীক্ষার ফলাফল প্রকাশ",
    time: "৬ ঘন্টা আগে",
  },
  {
    title: "শিক্ষক সভা সম্পন্ন",
    time: "১ দিন আগে",
  },
  {
    title: "ফি কালেকশন আপডেট",
    time: "২ দিন আগে",
  },
  {
    title: "নতুন শিক্ষক নিয়োগ",
    time: "৩ দিন আগে",
  },
];

const quickActions = [
  { name: "নতুন ভর্তি", icon: UsersIcon },
  { name: "উপস্থিতি", icon: CalendarIcon },
  { name: "নম্বর এন্ট্রি", icon: GraduationCapIcon },
  { name: "ফি কালেকশন", icon: CurrencyIcon },
  { name: "SMS পাঠান", icon: CalendarIcon },
  { name: "রিপোর্ট", icon: GraduationCapIcon },
];