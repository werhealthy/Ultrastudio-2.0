"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { GripVertical } from "lucide-react";
import { CampaignStatusBadge } from "./CampaignStatusBadge";
import type { Campaign, CampaignStatus } from "@/lib/mock-data";

const storageKey = "ultradisplay-kanban-v2";
const priorityClass = { low: "bg-slate-100 text-slate-700", medium: "bg-amber-50 text-amber-800", high: "bg-rose-50 text-rose-700" } as const;

export function CampaignKanban({ campaigns, statuses }: { campaigns: Campaign[]; statuses: CampaignStatus[] }) {
  const [items, setItems] = useState(campaigns.filter(c => statuses.includes(c.status)));
  const [over, setOver] = useState<CampaignStatus | null>(null);
  useEffect(() => { const saved = localStorage.getItem(storageKey); if (saved) setItems(JSON.parse(saved)); }, []);
  useEffect(() => { localStorage.setItem(storageKey, JSON.stringify(items)); }, [items]);
  const grouped = useMemo(() => Object.fromEntries(statuses.map(s => [s, items.filter(c => c.status === s)])) as Record<CampaignStatus, Campaign[]>, [items, statuses]);
  const move = (id: string, target: CampaignStatus) => setItems(current => current.map(c => c.id === id ? { ...c, status: target, updated: new Date().toISOString().slice(0,10) } : c));
  return <section className="surface p-4 md:p-5"><div className="mb-4 flex items-center justify-between"><div><h2 className="section-title">Pipeline campagne</h2><p className="text-sm text-muted-foreground">Trascina le card per aggiornare lo stato.</p></div></div><div className="grid gap-4 xl:grid-cols-4">{statuses.map(status => <div key={status} onDragOver={e=>{e.preventDefault();setOver(status)}} onDragLeave={()=>setOver(null)} onDrop={e=>{e.preventDefault();move(e.dataTransfer.getData("text/plain"), status);setOver(null)}} className={`rounded-xl border bg-muted/55 p-3 ${over===status?"ring-2 ring-ring":""}`}><div className="mb-3 flex items-center justify-between"><h3 className="text-sm font-semibold">{status}</h3><span className="rounded-full bg-background px-2 py-0.5 text-xs text-muted-foreground">{grouped[status].length}</span></div><div className="max-h-[560px] space-y-3 overflow-y-auto pr-1">{grouped[status].map(c=><Link key={c.id} href={`/campaigns/${c.slug}`} draggable onDragStart={e=>e.dataTransfer.setData("text/plain",c.id)} className="block rounded-lg border bg-card p-3 text-sm shadow-sm transition hover:border-primary/40 hover:shadow-md active:cursor-grabbing"><div className="flex items-start justify-between gap-3"><h4 className="font-medium leading-5">{c.name}</h4><GripVertical className="h-4 w-4 text-muted-foreground"/></div><p className="mt-1 text-xs text-muted-foreground">{c.category} · aggiornata {c.updated}</p><p className="mt-1 text-xs text-muted-foreground">Owner {c.owner ?? "Team"}</p><div className="mt-3 flex items-center justify-between gap-2"><CampaignStatusBadge status={c.status}/>{c.priority && <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${priorityClass[c.priority]}`}>{c.priority}</span>}</div></Link>)}</div></div>)}</div></section>;
}
