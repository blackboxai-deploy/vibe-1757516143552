"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Custom icons
function CurrencyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  );
}

function ReceiptIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5l-5-5 4-4-4-4 5-5M7 12H3l4-4-4-4h4" />
    </svg>
  );
}

function CreditCardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  );
}

function TrendingUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m22 7-8.5 8.5-5-5L2 17" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m16 7 6 0 0 6" />
    </svg>
  );
}

function TrendingDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m22 17-8.5-8.5-5 5L2 7" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m16 17 6 0 0-6" />
    </svg>
  );
}

export default function FinancePage() {
  const [activeTab, setActiveTab] = useState("fees");

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-bengali mb-2">
          আর্থিক ব্যবস্থাপনা
        </h1>
        <p className="text-gray-600 dark:text-gray-300 font-bengali">
          ফি কালেকশন, আয়-ব্যয় এবং আর্থিক রিপোর্ট
        </p>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 font-bengali">
                  মাসিক আয়
                </p>
                <div className="text-2xl font-bold text-green-600">৳৮,৪৫,০০০</div>
                <div className="flex items-center text-xs text-green-600 mt-1">
                  <TrendingUpIcon className="w-3 h-3 mr-1" />
                  <span className="font-bengali">+১২% গত মাস থেকে</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <TrendingUpIcon className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 font-bengali">
                  মাসিক ব্যয়
                </p>
                <div className="text-2xl font-bold text-red-600">৳৬,২৫,০০০</div>
                <div className="flex items-center text-xs text-red-600 mt-1">
                  <TrendingUpIcon className="w-3 h-3 mr-1" />
                  <span className="font-bengali">+৮% গত মাস থেকে</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                <TrendingDownIcon className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 font-bengali">
                  বকেয়া ফি
                </p>
                <div className="text-2xl font-bold text-orange-600">৳২,১৫,০০০</div>
                <div className="text-xs text-gray-500 mt-1 font-bengali">
                  ২৮৫ জন ছাত্র-ছাত্রী
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                <CurrencyIcon className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 font-bengali">
                  মুনাফা
                </p>
                <div className="text-2xl font-bold text-blue-600">৳২,২০,০০০</div>
                <div className="flex items-center text-xs text-blue-600 mt-1">
                  <TrendingUpIcon className="w-3 h-3 mr-1" />
                  <span className="font-bengali">+১৫% গত মাস থেকে</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <TrendingUpIcon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="fees" className="font-bengali">ফি ব্যবস্থাপনা</TabsTrigger>
          <TabsTrigger value="collection" className="font-bengali">কালেকশন</TabsTrigger>
          <TabsTrigger value="expenses" className="font-bengali">আয়-ব্যয়</TabsTrigger>
          <TabsTrigger value="payments" className="font-bengali">পেমেন্ট</TabsTrigger>
          <TabsTrigger value="reports" className="font-bengali">রিপোর্ট</TabsTrigger>
        </TabsList>

        {/* Fee Management Tab */}
        <TabsContent value="fees" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="font-bengali">ফি কাঠামো</CardTitle>
                  <CardDescription className="font-bengali">
                    শ্রেণীভিত্তিক ফি নির্ধারণ ও ব্যবস্থাপনা
                  </CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="font-bengali">
                      <PlusIcon className="w-4 h-4 mr-2" />
                      নতুন ফি হেড
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="font-bengali">নতুন ফি হেড তৈরি</DialogTitle>
                      <DialogDescription className="font-bengali">
                        ফি হেডের বিবরণ প্রবেশ করান
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Input placeholder="ফি হেডের নাম (যেমন: মাসিক বেতন)" className="font-bengali" />
                      <Input placeholder="পরিমাণ (টাকা)" type="number" className="font-bengali" />
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="ফি এর ধরণ" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monthly">মাসিক</SelectItem>
                          <SelectItem value="term">টার্ম</SelectItem>
                          <SelectItem value="yearly">বার্ষিক</SelectItem>
                          <SelectItem value="one-time">একবারমাত্র</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button className="w-full font-bengali">ফি হেড তৈরি করুন</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bengali">ফি হেডের নাম</TableHead>
                      <TableHead className="font-bengali">শ্রেণী</TableHead>
                      <TableHead className="font-bengali">পরিমাণ</TableHead>
                      <TableHead className="font-bengali">ধরণ</TableHead>
                      <TableHead className="font-bengali">স্ট্যাটাস</TableHead>
                      <TableHead className="font-bengali">অ্যাকশন</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {feeStructure.map((fee) => (
                      <TableRow key={fee.id}>
                        <TableCell className="font-bengali font-medium">{fee.name}</TableCell>
                        <TableCell className="font-bengali">{fee.class}</TableCell>
                        <TableCell className="font-medium">৳{fee.amount.toLocaleString()}</TableCell>
                        <TableCell className="font-bengali">{fee.type}</TableCell>
                        <TableCell>
                          <Badge
                            variant={fee.status === "সক্রিয়" ? "default" : "secondary"}
                            className="font-bengali"
                          >
                            {fee.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm" className="font-bengali">
                              সম্পাদনা
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Fee Collection Tab */}
        <TabsContent value="collection" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">আজকের কালেকশন</CardTitle>
                <CardDescription className="font-bengali">
                  দৈনিক ফি আদায়ের পরিসংখ্যান
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dailyCollection.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <div className="font-medium font-bengali">{item.feeHead}</div>
                        <div className="text-sm text-gray-500 font-bengali">{item.students} জন ছাত্র-ছাত্রী</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">৳{item.amount.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">{item.time}</div>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-bengali font-medium">মোট আদায়:</span>
                      <span className="text-xl font-bold text-green-600">
                        ৳{dailyCollection.reduce((sum, item) => sum + item.amount, 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">দ্রুত কালেকশন</CardTitle>
                <CardDescription className="font-bengali">
                  ছাত্রের রোল নম্বর দিয়ে দ্রুত ফি আদায়
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-bengali">ছাত্রের রোল নম্বর</label>
                    <Input placeholder="রোল নম্বর লিখুন" className="font-bengali" />
                  </div>
                  
                  {/* Sample student info */}
                  <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="font-bengali font-medium mb-2">মোহাম্মদ আবদুল্লাহ - রোল: ১০১</div>
                    <div className="text-sm text-gray-600 font-bengali mb-3">দাখিল ৯ম শ্রেণী</div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-bengali">মাসিক বেতন (নভেম্বর)</span>
                        <span>৳৮০০</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-bengali">পরীক্ষার ফি</span>
                        <span>৳৩০০</span>
                      </div>
                      <div className="flex justify-between font-medium pt-2 border-t">
                        <span className="font-bengali">মোট:</span>
                        <span>৳১,১০০</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full font-bengali">
                    <CreditCardIcon className="w-4 h-4 mr-2" />
                    ফি আদায় করুন
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Income-Expense Tab */}
        <TabsContent value="expenses" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="font-bengali">আয়-ব্যয় এন্ট্রি</CardTitle>
                    <CardDescription className="font-bengali">
                      দৈনিক আয় ও ব্যয়ের হিসাব রাখুন
                    </CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="font-bengali">
                        <PlusIcon className="w-4 h-4 mr-2" />
                        নতুন এন্ট্রি
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="font-bengali">নতুন আয়/ব্যয় এন্ট্রি</DialogTitle>
                        <DialogDescription className="font-bengali">
                          আয় অথবা ব্যয়ের বিবরণ দিন
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="এন্ট্রির ধরণ" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="income">আয়</SelectItem>
                            <SelectItem value="expense">ব্যয়</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input placeholder="বিবরণ" className="font-bengali" />
                        <Input placeholder="পরিমাণ (টাকা)" type="number" />
                        <Input type="date" />
                        <Button className="w-full font-bengali">এন্ট্রি সংরক্ষণ করুন</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentTransactions.map((transaction, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center p-3 rounded-lg ${
                        transaction.type === "income" 
                          ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800" 
                          : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                      }`}
                    >
                      <div>
                        <div className="font-medium font-bengali">{transaction.description}</div>
                        <div className="text-sm text-gray-500">{transaction.date}</div>
                      </div>
                      <div className={`font-bold ${
                        transaction.type === "income" ? "text-green-600" : "text-red-600"
                      }`}>
                        {transaction.type === "income" ? "+" : "-"}৳{transaction.amount.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">মাসিক সারসংক্ষেপ</CardTitle>
                <CardDescription className="font-bengali">
                  নভেম্বর ২০২৪ এর আর্থিক অবস্থা
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-bengali">মোট আয়:</span>
                      <span className="text-lg font-bold text-green-600">৳৮,৪৫,০০০</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bengali">মোট ব্যয়:</span>
                      <span className="text-lg font-bold text-red-600">৳৬,২৫,০০০</span>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center">
                      <span className="font-bengali font-medium">নিট মুনাফা:</span>
                      <span className="text-xl font-bold text-blue-600">৳২,২০,০০০</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bengali font-medium">আয়ের উৎসসমূহ:</h4>
                    {incomeBreakdown.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="font-bengali text-sm">{item.source}</span>
                        <span className="text-sm">৳{item.amount.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full" variant="outline">
                    <ReceiptIcon className="w-4 h-4 mr-2" />
                    <span className="font-bengali">বিস্তারিত রিপোর্ট</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Online Payments Tab */}
        <TabsContent value="payments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-bengali">অনলাইন পেমেন্ট</CardTitle>
              <CardDescription className="font-bengali">
                SSLCommerz এবং অন্যান্য পেমেন্ট গেটওয়ে ইন্টিগ্রেশন
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <CreditCardIcon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium font-bengali mb-2">
                  অনলাইন পেমেন্ট সিস্টেম
                </h3>
                <p className="text-gray-600 font-bengali mb-6">
                  SSLCommerz এর সাথে ইন্টিগ্রেশনের কাজ চলমান
                </p>
                <Button className="font-bengali">
                  পেমেন্ট গেটওয়ে সেটআপ করুন
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Financial Reports Tab */}
        <TabsContent value="reports" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {financialReports.map((report, index) => (
              <Card key={index} className="hover-lift cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center">
                    <report.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bengali font-medium mb-2">{report.name}</h3>
                  <p className="text-sm text-gray-600 font-bengali mb-4">{report.description}</p>
                  <Button size="sm" className="font-bengali">
                    রিপোর্ট দেখুন
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Sample data
const feeStructure = [
  {
    id: 1,
    name: "মাসিক বেতন",
    class: "দাখিল ৯ম",
    amount: 800,
    type: "মাসিক",
    status: "সক্রিয়",
  },
  {
    id: 2,
    name: "পরীক্ষার ফি",
    class: "সকল শ্রেণী",
    amount: 300,
    type: "টার্ম",
    status: "সক্রিয়",
  },
  {
    id: 3,
    name: "ভর্তি ফি",
    class: "নতুন ভর্তি",
    amount: 2000,
    type: "একবারমাত্র",
    status: "সক্রিয়",
  },
  {
    id: 4,
    name: "বার্ষিক ফি",
    class: "আলিম",
    amount: 1500,
    type: "বার্ষিক",
    status: "সক্রিয়",
  },
];

const dailyCollection = [
  {
    feeHead: "মাসিক বেতন",
    students: 45,
    amount: 36000,
    time: "সকাল ১০:৩০",
  },
  {
    feeHead: "পরীক্ষার ফি",
    students: 25,
    amount: 7500,
    time: "দুপুর ১২:১৫",
  },
  {
    feeHead: "ভর্তি ফি",
    students: 8,
    amount: 16000,
    time: "বিকেল ২:৪৫",
  },
];

const recentTransactions = [
  {
    type: "income",
    description: "মাসিক বেতন কালেকশন",
    amount: 45000,
    date: "১৫ নভেম্বর ২০২৪",
  },
  {
    type: "expense",
    description: "শিক্ষকদের বেতন",
    amount: 85000,
    date: "১৪ নভেম্বর ২০২ৄ",
  },
  {
    type: "income",
    description: "পরীক্ষার ফি",
    amount: 12000,
    date: "১৩ নভেম্বর ২০২ৄ",
  },
  {
    type: "expense",
    description: "বিদ্যুৎ বিল",
    amount: 8500,
    date: "১২ নভেম্বর ২০২ৄ",
  },
];

const incomeBreakdown = [
  { source: "মাসিক বেতন", amount: 650000 },
  { source: "পরীক্ষার ফি", amount: 120000 },
  { source: "ভর্তি ফি", amount: 45000 },
  { source: "অন্যান্য", amount: 30000 },
];

const financialReports = [
  {
    name: "মাসিক আর্থিক রিপোর্ট",
    description: "মাসভিত্তিক আয়-ব্যয়ের বিস্তারিত",
    icon: ReceiptIcon,
  },
  {
    name: "বকেয়া তালিকা",
    description: "ছাত্রভিত্তিক বকেয়া ফি এর তালিকা",
    icon: CurrencyIcon,
  },
  {
    name: "দৈনিক কালেকশন",
    description: "দিনভিত্তিক ফি আদায়ের রিপোর্ট",
    icon: ReceiptIcon,
  },
];