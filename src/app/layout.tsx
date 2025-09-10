import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali, Amiri } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansBengali = Noto_Sans_Bengali({ 
  subsets: ["bengali"],
  variable: "--font-bengali",
});

const amiri = Amiri({ 
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "EduMastari - মাদ্রাসা ম্যানেজমেন্ট সিস্টেম",
  description: "দারুল আবরার মডেল কামিল মাদ্রাসা, বরিশাল - সম্পূর্ণ ডিজিটাল ম্যানেজমেন্ট ইকোসিস্টেম",
  keywords: "মাদ্রাসা, ম্যানেজমেন্ট, ERP, শিক্ষা প্রতিষ্ঠান, বাংলাদেশ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSansBengali.variable} ${amiri.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}