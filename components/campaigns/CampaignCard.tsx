import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Campaign } from "@/lib/mock-data";
import { CampaignStatusBadge } from "./CampaignStatusBadge";

export function CampaignCard({ campaign, compact = false }: { campaign: Campaign; compact?: boolean }) {
  return (
    <Card className="overflow-hidden shadow-sm">
      <img src={campaign.thumbnail} alt="" className={compact ? "h-24 w-full object-cover" : "h-36 w-full object-cover"} />
      <CardContent className="space-y-3 p-4">
        <div>
          <h3 className="font-semibold text-slate-950">{campaign.name}</h3>
          <p className="text-sm text-muted-foreground">{campaign.type} · modificata {campaign.updated}</p>
        </div>
        <CampaignStatusBadge status={campaign.status} />
        <Button asChild variant="outline" className="w-full"><Link href={`/campaigns/${campaign.id}`}>Apri</Link></Button>
      </CardContent>
    </Card>
  );
}
