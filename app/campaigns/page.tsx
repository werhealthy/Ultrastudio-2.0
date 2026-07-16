"use client";
import { useMemo, useState } from "react";
import { Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CampaignCard } from "@/components/campaigns/CampaignCard";
import { CampaignTable } from "@/components/campaigns/CampaignTable";
import { SectionHeader } from "@/components/SectionHeader";
import { campaigns, statuses } from "@/lib/mock-data";

export default function CampaignsPage() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("all");
  const [view, setView] = useState<"table" | "card">("table");
  const filtered = useMemo(() => campaigns.filter(c => (status === "all" || c.status === status) && (c.name.toLowerCase().includes(q.toLowerCase()) || c.category.toLowerCase().includes(q.toLowerCase()))), [q, status]);
  return <div className="space-y-5"><div className="rounded-[2rem] bg-blue-700 p-6 text-white shadow-xl"><SectionHeader title="Campagne" description="Archivio completo separato dalla Home, con ricerca, filtri e azioni operative." action={<Button asChild className="bg-red-600 hover:bg-red-700"><a href="/campaigns/new">Crea nuova</a></Button>}/></div><div className="flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm md:flex-row"><Input value={q} onChange={e => setQ(e.target.value)} placeholder="Cerca per nome o tipologia"/><Select value={status} onValueChange={setStatus}><SelectTrigger><SelectValue placeholder="Stato"/></SelectTrigger><SelectContent><SelectItem value="all">Tutti gli stati</SelectItem>{statuses.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent></Select><Button variant="outline" onClick={() => setView(view === "table" ? "card" : "table")}>{view === "table" ? <Grid className="h-4 w-4"/> : <List className="h-4 w-4"/>}Vista</Button></div>{view === "table" ? <CampaignTable campaigns={filtered}/> : <div className="grid gap-4 md:grid-cols-3">{filtered.map(c => <CampaignCard key={c.id} campaign={c}/>)}</div>}</div>;
}
