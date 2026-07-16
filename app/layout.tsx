import type { Metadata } from "next";
import "./globals.css";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { TopHeader } from "@/components/layout/TopHeader";
export const metadata: Metadata = { title: "UltraDisplay", description: "Gestionale operativo campagne pubblicitarie" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="it"><body><div className="min-h-screen bg-[#0047bb]"><div className="flex min-h-screen bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.22),transparent_30%),linear-gradient(180deg,#075bff,#003da6)]"><AppSidebar/><main className="min-w-0 flex-1"><TopHeader/><div className="p-4 md:p-8">{children}</div></main></div></div></body></html>;
}
