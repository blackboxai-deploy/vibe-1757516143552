"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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

function UploadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
  );
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
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

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [classFilter, setClassFilter] = useState("");
  const [sectionFilter, setSectionFilter] = useState("");

  const filteredStudents = sampleStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.roll.toString().includes(searchTerm);
    const matchesClass = classFilter === "" || student.class === classFilter;
    const matchesSection = sectionFilter === "" || student.section === sectionFilter;
    
    return matchesSearch && matchesClass && matchesSection;
  });

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-bengali mb-2">
          ছাত্র-ছাত্রী ব্যবস্থাপনা
        </h1>
        <p className="text-gray-600 dark:text-gray-300 font-bengali">
          সকল ছাত্র-ছাত্রীদের তথ্য ও ব্যবস্থাপনা
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-emerald-600">১,২৪৫</div>
            <div className="text-sm text-gray-500 font-bengali">মোট ছাত্র-ছাত্রী</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">৬৮৫</div>
            <div className="text-sm text-gray-500 font-bengali">ছাত্র</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-pink-600">৫৬০</div>
            <div className="text-sm text-gray-500 font-bengali">ছাত্রী</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-orange-600">২৫</div>
            <div className="text-sm text-gray-500 font-bengali">নতুন ভর্তি</div>
          </CardContent>
        </Card>
      </div>

      {/* Action Bar */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <CardTitle className="font-bengali">ছাত্র তালিকা</CardTitle>
              <CardDescription className="font-bengali">
                সকল ছাত্র-ছাত্রীদের বিস্তারিত তথ্য
              </CardDescription>
            </div>
            <div className="flex flex-wrap gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="font-bengali">
                    <PlusIcon className="w-4 h-4 mr-2" />
                    নতুন ভর্তি
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-bengali">নতুন ছাত্র ভর্তি</DialogTitle>
                    <DialogDescription className="font-bengali">
                      নতুন ছাত্র/ছাত্রীর তথ্য প্রবেশ করান
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input placeholder="ছাত্রের নাম" className="font-bengali" />
                    <Input placeholder="পিতার নাম" className="font-bengali" />
                    <Input placeholder="মাতার নাম" className="font-bengali" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="শ্রেণী নির্বাচন করুন" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nurani">নূরানী</SelectItem>
                        <SelectItem value="nazera">নাজেরা</SelectItem>
                        <SelectItem value="hifz">হিফজ</SelectItem>
                        <SelectItem value="dakhil">দাখিল</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="w-full font-bengali">ভর্তি সম্পন্ন করুন</Button>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button variant="outline" className="font-bengali">
                <UploadIcon className="w-4 h-4 mr-2" />
                বাল্ক আপলোড
              </Button>
              <Button variant="outline" className="font-bengali">
                <DownloadIcon className="w-4 h-4 mr-2" />
                এক্সপোর্ট
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="নাম বা রোল নম্বর দিয়ে খুঁজুন..."
                className="pl-10 font-bengali"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={classFilter} onValueChange={setClassFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="শ্রেণী" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">সব শ্রেণী</SelectItem>
                <SelectItem value="নূরানী">নূরানী</SelectItem>
                <SelectItem value="নাজেরা">নাজেরা</SelectItem>
                <SelectItem value="হিফজ">হিফজ</SelectItem>
                <SelectItem value="দাখিল">দাখিল</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sectionFilter} onValueChange={setSectionFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="শাখা" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">সব শাখা</SelectItem>
                <SelectItem value="ক">ক</SelectItem>
                <SelectItem value="খ">খ</SelectItem>
                <SelectItem value="গ">গ</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Students Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bengali">ছবি</TableHead>
                  <TableHead className="font-bengali">রোল</TableHead>
                  <TableHead className="font-bengali">নাম</TableHead>
                  <TableHead className="font-bengali">শ্রেণী</TableHead>
                  <TableHead className="font-bengali">শাখা</TableHead>
                  <TableHead className="font-bengali">পিতার নাম</TableHead>
                  <TableHead className="font-bengali">স্ট্যাটাস</TableHead>
                  <TableHead className="font-bengali">অ্যাকশন</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <span className="text-sm font-medium text-emerald-700">
                          {student.name.charAt(0)}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{student.roll}</TableCell>
                    <TableCell className="font-bengali">{student.name}</TableCell>
                    <TableCell className="font-bengali">{student.class}</TableCell>
                    <TableCell className="font-bengali">{student.section}</TableCell>
                    <TableCell className="font-bengali">{student.fatherName}</TableCell>
                    <TableCell>
                      <Badge
                        variant={student.status === "সক্রিয়" ? "default" : "secondary"}
                        className="font-bengali"
                      >
                        {student.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <EyeIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <EditIcon className="h-4 w-4" />
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
    </div>
  );
}

// Sample data
const sampleStudents = [
  {
    id: 1,
    roll: 101,
    name: "মোহাম্মদ আবদুল্লাহ",
    class: "দাখিল",
    section: "ক",
    fatherName: "মোহাম্মদ আব্দুর রহমান",
    status: "সক্রিয়",
  },
  {
    id: 2,
    roll: 102,
    name: "ফাতিমা খাতুন",
    class: "দাখিল",
    section: "ক",
    fatherName: "মোহাম্মদ আলী হাসান",
    status: "সক্রিয়",
  },
  {
    id: 3,
    roll: 201,
    name: "মোহাম্মদ ইউসুফ",
    class: "আলিম",
    section: "খ",
    fatherName: "মোহাম্মদ ইব্রাহীম",
    status: "সক্রিয়",
  },
  {
    id: 4,
    roll: 15,
    name: "আয়েশা সিদ্দিকা",
    class: "নূরানী",
    section: "গ",
    fatherName: "মোহাম্মদ সালাহউদ্দিন",
    status: "সক্রিয়",
  },
  {
    id: 5,
    roll: 45,
    name: "মোহাম্মদ হাসান",
    class: "হিফজ",
    section: "ক",
    fatherName: "মোহাম্মদ নুরুল ইসলাম",
    status: "সক্রিয়",
  },
];