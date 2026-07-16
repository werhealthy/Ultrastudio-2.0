import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CampaignStatusBadge } from "./CampaignStatusBadge";
import type { Campaign, CampaignStatus } from "@/lib/mock-data";

export function CampaignKanban({ campaigns, statuses }: { campaigns: Campaign[]; statuses: CampaignStatus[] }) {
  return (
    <section className="space-y-5 rounded-[2rem] bg-white/95 p-5 shadow-2xl shadow-blue-950/10 ring-1 ring-blue-100 md:p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">Cuore operativo</p>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Campagne in lavorazione</h2>
          <p className="mt-1 text-sm text-slate-500">Pipeline kanban con priorità su stato, deliverable e prossime azioni.</p>
        </div>
        <Button asChild className="bg-blue-700 hover:bg-blue-800"><Link href="/campaigns">Vedi tutte le campagne<ArrowRight className="h-4 w-4" /></Link></Button>
      </div>
      <div className="grid gap-4 xl:grid-cols-4">
        {statuses.map((status) => (
          <Card key={status} className="min-h-[30rem] border-blue-100 bg-blue-50/60 shadow-none">
            <CardContent className="p-4">
              <div className="mb-4 flex items-center justify-between">
                <b className="text-slate-950">{status}</b>
                <CampaignStatusBadge status={status} />
              </div>
              <div className="space-y-3">
                {campaigns.filter((campaign) => campaign.status === status).map((campaign) => (
                  <Link href={`/campaigns/${campaign.slug}`} key={campaign.id} className="block rounded-2xl border border-blue-100 bg-white p-4 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-lg">
                    <div className="flex items-start justify-between gap-3"><b className="text-base text-slate-950">{campaign.name}</b><CampaignStatusBadge status={campaign.status} /></div>
                    <p className="mt-2 text-slate-600">{campaign.category} · aggiornato {campaign.updated}</p>
                    <p className="mt-3 rounded-xl bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">{campaign.deliverables.join(" · ")}</p>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
