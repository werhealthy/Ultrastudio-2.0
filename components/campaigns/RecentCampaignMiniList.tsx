import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CampaignStatusBadge } from "./CampaignStatusBadge";
import type { Campaign } from "@/lib/mock-data";

export function RecentCampaignMiniList({ campaigns }: { campaigns: Campaign[] }) {
  return <div className="space-y-2">{campaigns.slice(0, 3).map(c => <Link href={`/campaigns/${c.slug}`} key={c.id} className="flex items-center justify-between gap-3 rounded-2xl border border-white/40 bg-white p-3 text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-50"><span><span className="block text-sm font-bold">{c.name}</span><span className="text-xs text-slate-500">modificata {c.updated}</span></span><span className="flex items-center gap-2"><CampaignStatusBadge status={c.status}/><ArrowUpRight className="h-4 w-4 text-blue-700"/></span></Link>)}</div>;
}
