import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CampaignStatusBadge } from "./CampaignStatusBadge";
import type { Campaign } from "@/lib/mock-data";

export function RecentCampaignMiniList({ campaigns }: { campaigns: Campaign[] }) {
  return <div className="rounded-3xl bg-white/95 p-4 text-slate-950 shadow-xl ring-1 ring-white/40"><div className="mb-3 flex items-center justify-between"><b>Campagne recenti</b><span className="text-xs text-slate-500">ultime 3</span></div><div className="space-y-2">{campaigns.slice(0, 3).map(c => <Link href={`/campaigns/${c.slug}`} key={c.id} className="flex items-center justify-between gap-3 rounded-2xl border border-blue-100 p-3 transition hover:bg-blue-50"><span><span className="block text-sm font-bold">{c.name}</span><span className="text-xs text-slate-500">{c.updated}</span></span><span className="flex items-center gap-2"><CampaignStatusBadge status={c.status}/><ArrowUpRight className="h-4 w-4 text-blue-700"/></span></Link>)}</div></div>;
}
