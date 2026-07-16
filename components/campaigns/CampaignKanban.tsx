"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { GripVertical } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CampaignStatusBadge } from "./CampaignStatusBadge";
import type { Campaign, CampaignStatus } from "@/lib/mock-data";

const storageKey = "ultradisplay-kanban-v1";

export function CampaignKanban({ campaigns, statuses }: { campaigns: Campaign[]; statuses: CampaignStatus[] }) {
  const [items, setItems] = useState(campaigns.filter(c => statuses.includes(c.status)));
  const [over, setOver] = useState<CampaignStatus | null>(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setItems(JSON.parse(saved));
  }, []);
  useEffect(() => { localStorage.setItem(storageKey, JSON.stringify(items)); }, [items]);

  const grouped = useMemo(() => Object.fromEntries(statuses.map(s => [s, items.filter(c => c.status === s)])) as Record<CampaignStatus, Campaign[]>, [items, statuses]);

  const move = (id: string, target: CampaignStatus, beforeId?: string) => {
    setItems(current => {
      const dragged = current.find(c => c.id === id);
      if (!dragged) return current;
      const rest = current.filter(c => c.id !== id);
      const updated = { ...dragged, status: target, updated: new Date().toISOString().slice(0, 10), updatedAt: new Date().toISOString().slice(0, 10) };
      const targetIndex = beforeId ? rest.findIndex(c => c.id === beforeId) : -1;
      if (targetIndex >= 0) return [...rest.slice(0, targetIndex), updated, ...rest.slice(targetIndex)];
      const lastTarget = rest.map((c, i) => c.status === target ? i : -1).filter(i => i >= 0).pop();
      const insertAt = lastTarget === undefined ? rest.length : lastTarget + 1;
      return [...rest.slice(0, insertAt), updated, ...rest.slice(insertAt)];
    });
  };

  return (
    <section className="space-y-4 rounded-[2rem] bg-white/95 p-5 shadow-2xl shadow-blue-950/10 ring-1 ring-blue-100 md:p-6 min-h-[calc(100vh-21rem)]">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-700">Kanban operativo</p>
        <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Pipeline campagne</h2>
      </div>
      <div className="grid gap-4 xl:grid-cols-4">
        {statuses.map((status) => (
          <Card key={status} onDragOver={(e) => { e.preventDefault(); setOver(status); }} onDrop={(e) => { e.preventDefault(); move(e.dataTransfer.getData("text/plain"), status); setOver(null); setDragging(false); }} className={`min-h-[34rem] border-blue-100 bg-blue-50/70 shadow-none transition ${over === status ? "ring-2 ring-blue-600" : ""}`}>
            <CardContent className="p-4">
              <div className="mb-4 flex items-center justify-between"><b className="text-slate-950">{status}</b><span className="rounded-full bg-white px-2 py-1 text-xs font-bold text-blue-700">{grouped[status].length}</span></div>
              <div className="max-h-[55vh] space-y-3 overflow-y-auto pr-1">
                {grouped[status].map((campaign) => (
                  <Link href={`/campaigns/${campaign.slug}`} key={campaign.id} draggable onDragStart={(e) => { setDragging(true); e.dataTransfer.setData("text/plain", campaign.id); }} onDragEnd={() => { setDragging(false); setOver(null); }} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); e.stopPropagation(); move(e.dataTransfer.getData("text/plain"), status, campaign.id); }} onClick={(e) => { if (dragging) e.preventDefault(); }} className="block rounded-2xl border border-blue-100 bg-white p-4 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-lg active:cursor-grabbing">
                    <div className="flex items-start justify-between gap-3"><b className="text-base text-slate-950">{campaign.name}</b><GripVertical className="h-4 w-4 text-blue-300" /></div>
                    <p className="mt-1 text-slate-600">{campaign.category} · {campaign.offerDescription || campaign.offer}</p>
                    <p className="mt-2 text-xs text-slate-500">Aggiornata {campaign.updated} · {campaign.deliverables[0]} · Owner {campaign.owner}</p>
                    <div className="mt-3 flex items-center justify-between gap-2"><CampaignStatusBadge status={campaign.status} /><span className="rounded-full bg-red-50 px-2 py-1 text-xs font-bold text-red-700">{campaign.priority}</span></div>
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
