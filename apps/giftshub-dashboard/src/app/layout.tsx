import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import GlobalSearch from "@/components/GlobalSearch";
import ActivityPanel from "@/components/ActivityPanel";

export const metadata: Metadata = {
  title: "AXIONYX Operational Dashboard",
  description: "Evidence-driven industrial intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 flex h-screen overflow-hidden">
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
