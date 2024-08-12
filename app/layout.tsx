import { MobileSidebar } from "@/components/MobileSidebar";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

import { Toaster } from "@/components/ui/toaster"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paste",
  description: "UI Library by @dylan_wlms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
      <div className="h-screen flex flex-col">
          <Navbar />
          <main className="flex flex-1 items-center overflow-hidden">
            <Sidebar />
            <MobileSidebar />
            {children}
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
