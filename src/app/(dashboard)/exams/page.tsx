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
function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  );
}

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  );
}

function EditIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}

export default function ExamsPage() {
  const [activeTab, setActiveTab] = useState("exams");

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-bengali mb-2">
          পরীক্ষা ও ফলাফল ব্যবস্থাপনা
        </h1>
        <p className="text-gray-600 dark:text-gray-300 font-bengali">
          পরীক্ষা পরিচালনা, নম্বর এন্ট্রি এবং ফলাফল প্রকাশ
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-emerald-600">১৫</div>
            <div className="text-sm text-gray-500 font-bengali">চলমান পরীক্ষা</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">৮৫%</div>
            <div className="text-sm text-gray-500 font-bengali">নম্বর এন্ট্রি সম্পূর্ণ</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-orange-600">৭</div>
            <div className="text-sm text-gray-500 font-bengali">ফলাফল প্রস্তুত</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600">৯২%</div>
            <div className="text-sm text-gray-500 font-bengali">গড় উত্তীর্ণের হার</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="exams" className="font-bengali">পরীক্ষা সূচী</TabsTrigger>
          <TabsTrigger value="marks" className="font-bengali">নম্বর এন্ট্রি</TabsTrigger>
          <TabsTrigger value="results" className="font-bengali">ফলাফল</TabsTrigger>
          <TabsTrigger value="reports" className="font-bengali">রিপোর্ট</TabsTrigger>
        </TabsList>

        {/* Exams Tab */}
        <TabsContent value="exams" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="font-bengali">পরীক্ষা সূচী</CardTitle>
                  <CardDescription className="font-bengali">
                    সকল পরীক্ষার সময়সূচী ও বিবরণ
                  </CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="font-bengali">
                      <PlusIcon className="w-4 h-4 mr-2" />
                      নতুন পরীক্ষা
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle className="font-bengali">নতুন পরীক্ষা তৈরি</DialogTitle>
                      <DialogDescription className="font-bengali">
                        পরীক্ষার বিবরণ প্রবেশ করান
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Input placeholder="পরীক্ষার নাম" className="font-bengali" />
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="পরীক্ষার ধরণ" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="class-test">শ্রেণী পরীক্ষা</SelectItem>
                          <SelectItem value="monthly">মাসিক পরীক্ষা</SelectItem>
                          <SelectItem value="term">টার্ম পরীক্ষা</SelectItem>
                          <SelectItem value="final">বার্ষিক পরীক্ষা</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input type="date" className="font-bengali" />
                      <Button className="w-full font-bengali">পরীক্ষা তৈরি করুন</Button>
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
                      <TableHead className="font-bengali">পরীক্ষার নাম</TableHead>
                      <TableHead className="font-bengali">শ্রেণী</TableHead>
                      <TableHead className="font-bengali">বিষয়</TableHead>
                      <TableHead className="font-bengali">তারিখ</TableHead>
                      <TableHead className="font-bengali">সময়</TableHead>
                      <TableHead className="font-bengali">স্ট্যাটাস</TableHead>
                      <TableHead className="font-bengali">অ্যাকশন</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sampleExams.map((exam) => (
                      <TableRow key={exam.id}>
                        <TableCell className="font-bengali font-medium">{exam.name}</TableCell>
                        <TableCell className="font-bengali">{exam.class}</TableCell>
                        <TableCell className="font-bengali">{exam.subject}</TableCell>
                        <TableCell className="font-bengali">{exam.date}</TableCell>
                        <TableCell className="font-bengali">{exam.time}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              exam.status === "সম্পূর্ণ" ? "default" :
                              exam.status === "চলমান" ? "secondary" : "outline"
                            }
                            className="font-bengali"
                          >
                            {exam.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <EditIcon className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <ClipboardIcon className="h-4 w-4" />
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

        {/* Marks Entry Tab */}
        <TabsContent value="marks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-bengali">নম্বর এন্ট্রি সিস্টেম</CardTitle>
              <CardDescription className="font-bengali">
                Excel-এর মতো সহজ নম্বর এন্ট্রি ইন্টারফেস
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="শ্রেণী নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dakhil-9">দাখিল - ৯ম শ্রেণী</SelectItem>
                      <SelectItem value="alim-11">আলিম - ১১শ শ্রেণী</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="বিষয় নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quran">কোরআন মজীদ</SelectItem>
                      <SelectItem value="hadith">হাদীস শরীফ</SelectItem>
                      <SelectItem value="bangla">বাংলা</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="পরীক্ষা নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">মাসিক পরীক্ষা</SelectItem>
                      <SelectItem value="term">টার্ম পরীক্ষা</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Excel-like Marks Entry Interface */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 border-b">
                    <h3 className="font-bengali font-medium">দাখিল ৯ম শ্রেণী - কোরআন মজীদ - মাসিক পরীক্ষা</h3>
                  </div>
                  <div className="p-4">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-bengali">রোল</TableHead>
                          <TableHead className="font-bengali">ছাত্রের নাম</TableHead>
                          <TableHead className="font-bengali">লিখিত (৫০)</TableHead>
                          <TableHead className="font-bengali">মৌখিক (২৫)</TableHead>
                          <TableHead className="font-bengali">ব্যবহারিক (২৫)</TableHead>
                          <TableHead className="font-bengali">মোট</TableHead>
                          <TableHead className="font-bengali">গ্রেড</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {sampleMarksEntry.map((student) => (
                          <TableRow key={student.roll}>
                            <TableCell className="font-medium">{student.roll}</TableCell>
                            <TableCell className="font-bengali">{student.name}</TableCell>
                            <TableCell>
                              <Input
                                type="number"
                                className="w-20"
                                defaultValue={student.written}
                                max="50"
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                type="number"
                                className="w-20"
                                defaultValue={student.oral}
                                max="25"
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                type="number"
                                className="w-20"
                                defaultValue={student.practical}
                                max="25"
                              />
                            </TableCell>
                            <TableCell className="font-medium">{student.total}</TableCell>
                            <TableCell>
                              <Badge variant="secondary" className="font-bengali">
                                {student.grade}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <div className="mt-4 flex space-x-2">
                      <Button className="font-bengali">
                        নম্বর সংরক্ষণ করুন
                      </Button>
                      <Button variant="outline" className="font-bengali">
                        স্বয়ংক্রিয় গণনা
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Results Tab */}
        <TabsContent value="results" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-bengali">ফলাফল প্রকাশ</CardTitle>
              <CardDescription className="font-bengali">
                প্রস্তুত ফলাফল প্রকাশ ও রিপোর্ট কার্ড জেনারেশন
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {publishedResults.map((result, index) => (
                    <Card key={index} className="border-l-4 border-l-emerald-500">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bengali font-medium">{result.examName}</h3>
                          <Badge variant="default" className="font-bengali text-xs">
                            {result.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 font-bengali mb-2">{result.class}</p>
                        <div className="text-xs text-gray-500 font-bengali mb-3">
                          প্রকাশের তারিখ: {result.publishDate}
                        </div>
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline" className="flex-1 font-bengali text-xs">
                            <DownloadIcon className="w-3 h-3 mr-1" />
                            রিপোর্ট
                          </Button>
                          <Button size="sm" className="flex-1 font-bengali text-xs">
                            দেখুন
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-bengali">পরীক্ষা রিপোর্ট</CardTitle>
              <CardDescription className="font-bengali">
                বিস্তারিত পরীক্ষা ও ফলাফলের রিপোর্ট
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reportTypes.map((report, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center">
                        <report.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bengali font-medium mb-2">{report.name}</h3>
                      <p className="text-sm text-gray-600 font-bengali mb-4">{report.description}</p>
                      <Button size="sm" className="font-bengali">
                        <DownloadIcon className="w-4 h-4 mr-2" />
                        ডাউনলোড
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Sample data
const sampleExams = [
  {
    id: 1,
    name: "মাসিক পরীক্ষা - নভেম্বর",
    class: "দাখিল ৯ম",
    subject: "কোরআন মজীদ",
    date: "১৫ নভেম্বর ২০২৪",
    time: "সকাল ১০:০০",
    status: "সম্পূর্ণ",
  },
  {
    id: 2,
    name: "টার্ম পরীক্ষা",
    class: "আলিম ১১শ",
    subject: "হাদীস শরীফ",
    date: "২০ নভেম্বর ২০২৪",
    time: "সকাল ৯:০০",
    status: "চলমান",
  },
  {
    id: 3,
    name: "শ্রেণী পরীক্ষা",
    class: "নূরানী",
    subject: "আরবী",
    date: "২৫ নভেম্বর ২০২৪",
    time: "সকাল ১১:০০",
    status: "আসন্ন",
  },
];

const sampleMarksEntry = [
  {
    roll: 101,
    name: "মোহাম্মদ আবদুল্লাহ",
    written: 42,
    oral: 20,
    practical: 22,
    total: 84,
    grade: "A+",
  },
  {
    roll: 102,
    name: "ফাতিমা খাতুন",
    written: 38,
    oral: 18,
    practical: 20,
    total: 76,
    grade: "A",
  },
  {
    roll: 103,
    name: "মোহাম্মদ ইউসুফ",
    written: 45,
    oral: 22,
    practical: 23,
    total: 90,
    grade: "A+",
  },
];

const publishedResults = [
  {
    examName: "মাসিক পরীক্ষা - অক্টোবর",
    class: "দাখিল ৯ম শ্রেণী",
    publishDate: "৫ নভেম্বর ২০২৤",
    status: "প্রকাশিত",
  },
  {
    examName: "টার্ম পরীক্ষা",
    class: "আলিম ১১শ শ্রেণী",
    publishDate: "৮ নভেম্বর ২০২৪",
    status: "প্রকাশিত",
  },
  {
    examName: "বার্ষিক পরীক্ষা",
    class: "হিফজ বিভাগ",
    publishDate: "১০ নভেম্বর ২০২৪",
    status: "প্রকাশিত",
  },
];

const reportTypes = [
  {
    name: "পরীক্ষার ফলাফল",
    description: "শ্রেণীভিত্তিক পরীক্ষার ফলাফল",
    icon: ClipboardIcon,
  },
  {
    name: "মেধা তালিকা",
    description: "পরীক্ষাভিত্তিক মেধা তালিকা",
    icon: ClipboardIcon,
  },
  {
    name: "উত্তীর্ণের হার",
    description: "বিষয়ভিত্তিক উত্তীর্ণের হার",
    icon: ClipboardIcon,
  },
];