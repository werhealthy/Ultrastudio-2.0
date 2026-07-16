import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RecentCampaignMiniList } from "./RecentCampaignMiniList";
import type { Campaign } from "@/lib/mock-data";

export function HomeHero({ campaigns }: { campaigns: Campaign[] }) {
  return (
    <section className="relative overflow-hidden rounded-[2.25rem] bg-blue-700 p-5 text-white shadow-2xl shadow-blue-950/20 md:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.26),transparent_34%),linear-gradient(135deg,#003da6,#075bff_48%,#002f87)]" />
      <div className="relative grid gap-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-black uppercase tracking-[0.22em]"><Sparkles className="h-4 w-4" />UltraDisplay Operations</p>
          <h1 className="mt-4 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">Cockpit campagne, dal brief a Figma.</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-50 md:text-base">Governa priorità, visual, copy e formati in un gestionale operativo blu, compatto e pronto per il lavoro quotidiano.</p>
          <Button asChild size="lg" className="mt-5 bg-red-600 text-white hover:bg-red-700"><Link href="/campaigns/new">Crea nuova campagna</Link></Button>
        </div>
        <div className="rounded-[1.75rem] border border-white/20 bg-white/12 p-4 backdrop-blur">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 className="text-lg font-black">Campagne recenti</h2>
            <Button asChild size="sm" variant="secondary" className="bg-white text-blue-800 hover:bg-blue-50"><Link href="/campaigns">Vedi tutte <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
          <RecentCampaignMiniList campaigns={campaigns.slice(0, 3)} />
        </div>
      </div>
    </section>
  );
}
