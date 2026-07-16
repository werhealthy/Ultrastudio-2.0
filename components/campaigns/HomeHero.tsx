import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreateCampaignDialog } from "./CreateCampaignDialog";
import { RecentCampaignMiniList } from "./RecentCampaignMiniList";
import type { Campaign } from "@/lib/mock-data";

export function HomeHero({ campaigns }: { campaigns: Campaign[] }) {
  return <section className="relative overflow-hidden rounded-[2.25rem] bg-blue-700 p-6 text-white shadow-2xl shadow-blue-950/20 md:p-8"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.28),transparent_34%),linear-gradient(135deg,#0047bb,#075bff_48%,#002f87)]"/><div className="relative grid gap-6 lg:grid-cols-[1.35fr_.85fr] lg:items-center"><div><p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-bold uppercase tracking-[0.2em]"><Sparkles className="h-4 w-4"/>UltraDisplay</p><h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">Campaign cockpit TIM: brief, visual, copy e Figma in un flusso blu.</h1><p className="mt-4 max-w-2xl text-base text-blue-50">Un MVP proprietario e riconoscibile: crea campagne, governa la pipeline e apri ogni dettaglio senza perdere contesto operativo.</p><CreateCampaignDialog><Button size="lg" className="mt-7 bg-red-600 text-white hover:bg-red-700">Crea nuova campagna</Button></CreateCampaignDialog></div><RecentCampaignMiniList campaigns={campaigns}/></div></section>;
}
