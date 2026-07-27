import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import GlobalSearch from "@/components/GlobalSearch";
import ActivityPanel from "@/components/ActivityPanel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AXIONYX Alpha 1.0",
  description: "Evidence-Driven Decision Support Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-100 flex h-screen overflow-hidden`}>
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-16 border-b border-slate-800 bg-slate-950 flex items-center px-6 justify-between">
            <GlobalSearch />
            <div className="flex items-center gap-4">
               <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold">OX</div>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
        <ActivityPanel />
      </body>
    </html>
  );
}
