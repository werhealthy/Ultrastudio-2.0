import type { Metadata } from "next";
import "./globals.css";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { TopHeader } from "@/components/layout/TopHeader";

export const metadata: Metadata = { title: "UltraDisplay", description: "Gestionale operativo campagne pubblicitarie" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="it"><body><div className="min-h-screen bg-background"><div className="flex min-h-screen"><AppSidebar/><main className="min-w-0 flex-1"><TopHeader/><div className="px-4 py-6 md:px-8"><div className="app-container">{children}</div></div></main></div></div></body></html>;
}
