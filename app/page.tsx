import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CampaignCard } from "@/components/campaigns/CampaignCard";
import { CreateCampaignDialog } from "@/components/campaigns/CreateCampaignDialog";
import { CampaignStatusBadge } from "@/components/campaigns/CampaignStatusBadge";
import { SectionHeader } from "@/components/SectionHeader";
import { campaigns, statuses } from "@/lib/mock-data";

const kanbanStatuses = statuses.slice(0, 4);

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border bg-card p-8 shadow-sm soft-grid">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">UltraDisplay operations</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          Gestionale campagne TIM per brief, visual, copy e invio a Figma.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Coordina lo stato di avanzamento, consolida gli asset approvati e accompagna ogni campagna dalla bozza alla consegna operativa.
        </p>
        <CreateCampaignDialog>
          <Button className="mt-7" size="lg">Crea nuova campagna</Button>
        </CreateCampaignDialog>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <SectionHeader title="Kanban campagne" description="Pipeline operativa per stato di lavorazione" />
          <Button asChild variant="outline"><Link href="/campaigns">Vedi tutte le campagne<ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
        <div className="grid gap-4 xl:grid-cols-4">
          {kanbanStatuses.map((status) => (
            <Card key={status} className="min-h-72 bg-white/90">
              <CardContent className="p-4">
                <div className="mb-4 flex items-center justify-between">
                  <b>{status}</b>
                  <CampaignStatusBadge status={status} />
                </div>
                <div className="space-y-3">
                  {campaigns.filter((campaign) => campaign.status === status).map((campaign) => (
                    <Link href={`/campaigns/${campaign.id}`} key={campaign.id} className="block rounded-xl border bg-background p-3 text-sm shadow-sm transition hover:border-primary/40 hover:bg-blue-50/60">
                      <b className="text-slate-950">{campaign.name}</b>
                      <p className="mt-1 text-muted-foreground">{campaign.type} · aggiornato {campaign.updated}</p>
                      <p className="mt-2 text-xs text-muted-foreground">{campaign.deliverables.join(" · ")}</p>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader title="Campagne recenti" description="Ultimi progetti aggiornati" />
        <div className="grid gap-4 md:grid-cols-3">
          {campaigns.slice(0, 3).map((campaign) => <CampaignCard key={campaign.id} campaign={campaign} compact />)}
        </div>
      </section>
    </div>
  );
}
