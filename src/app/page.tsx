"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Custom icons (no external dependencies)
function BookOpenIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 backdrop-blur-3xl"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          {/* Islamic Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <pattern id="islamic-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
                <circle cx="10" cy="10" r="2" fill="currentColor"/>
                <path d="M10 2 L18 10 L10 18 L2 10 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
              <rect width="100" height="100" fill="url(#islamic-pattern)"/>
            </svg>
          </div>

          <div className="relative z-10">
            {/* Logo and Institution Name */}
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-600 flex items-center justify-center">
                <BookOpenIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2">
                <span className="font-bengali">EduMastari</span>
              </h1>
              <p className="text-xl text-emerald-600 dark:text-emerald-400 font-bengali mb-6">
                মাদ্রাসা ম্যানেজমেন্ট ইকোসিস্টেম
              </p>
            </div>

            {/* Institution Info */}
            <Card className="max-w-2xl mx-auto mb-8 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bengali text-center">
                  দারুল আবরার মডেল কামিল মাদ্রাসা
                </CardTitle>
                <CardDescription className="text-center font-bengali text-lg">
                  বরিশাল, বাংলাদেশ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <UsersIcon className="w-8 h-8 text-emerald-600 mb-2" />
                    <div className="font-bengali">
                      <div className="text-2xl font-bold">১২০০+</div>
                      <div className="text-sm text-gray-600">ছাত্র-ছাত্রী</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <GraduationCapIcon className="w-8 h-8 text-blue-600 mb-2" />
                    <div className="font-bengali">
                      <div className="text-2xl font-bold">৮৫+</div>
                      <div className="text-sm text-gray-600">শিক্ষক-শিক্ষিকা</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <BookOpenIcon className="w-8 h-8 text-purple-600 mb-2" />
                    <div className="font-bengali">
                      <div className="text-2xl font-bold">৫০+</div>
                      <div className="text-sm text-gray-600">বছর অভিজ্ঞতা</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Button 
                onClick={() => router.push("/auth/login")}
                size="lg" 
                className="w-full md:w-auto font-bengali text-lg px-8 py-3 bg-emerald-600 hover:bg-emerald-700"
              >
                প্রশাসনিক লগইন
              </Button>
              <Button 
                onClick={() => router.push("/student-portal")}
                variant="outline" 
                size="lg" 
                className="w-full md:w-auto font-bengali text-lg px-8 py-3 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                ছাত্র পোর্টাল
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-bengali">
            আমাদের বৈশিষ্ট্যসমূহ
          </h2>
          <p className="text-gray-600 dark:text-gray-300 font-bengali max-w-2xl mx-auto">
            আধুনিক প্রযুক্তি ও ইসলামিক মূল্যবোধের সমন্বয়ে তৈরি সম্পূর্ণ ডিজিটাল ব্যবস্থাপনা
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="font-bengali">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-bengali text-gray-600 dark:text-gray-300">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: UsersIcon,
    title: "ছাত্র ব্যবস্থাপনা",
    description: "ভর্তি থেকে সার্টিফিকেট পর্যন্ত সম্পূর্ণ ছাত্র জীবনচক্র ব্যবস্থাপনা"
  },
  {
    icon: GraduationCapIcon,
    title: "একাডেমিক ব্যবস্থাপনা",
    description: "পরীক্ষা, ফলাফল, মার্কস এন্ট্রি এবং রিপোর্ট কার্ড জেনারেশন"
  },
  {
    icon: BookOpenIcon,
    title: "আর্থিক ব্যবস্থাপনা",
    description: "ফি কালেকশন, আয়-ব্যয় হিসাব এবং অনলাইন পেমেন্ট সিস্টেম"
  }
];