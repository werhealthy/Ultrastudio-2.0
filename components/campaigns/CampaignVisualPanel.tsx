"use client";
import { useState } from "react";
import { Wand2, Upload } from "lucide-react";
import type { Campaign } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { assets } from "@/lib/mock-data";

export function CampaignVisualPanel({ campaign }: { campaign: Campaign }) {
  const [visuals, setVisuals] = useState(campaign.visual.variants.length ? campaign.visual.variants : campaign.visuals);
  const [selected, setSelected] = useState(0);
  const [prompt, setPrompt] = useState("");
  const add = () => { setVisuals(v => [...v, `https://picsum.photos/seed/${encodeURIComponent(prompt || "ai")}-${v.length}/640/420`]); setPrompt(""); };
  return <div className="space-y-5 rounded-[2rem] bg-white p-5 shadow-sm"><div><h3 className="text-xl font-bold">Visual selezionato</h3><p className="text-sm text-slate-500">Varianti e immagini collegate alla campagna.</p></div><img src={visuals[selected]} className="h-80 w-full rounded-2xl object-cover" alt="Visual selezionato"/><div className="flex flex-wrap gap-2"><Button variant="outline"><Upload className="h-4 w-4"/>Carica asset</Button><Button variant="outline">Scegli da libreria</Button><Button variant="outline" onClick={add}><Wand2 className="h-4 w-4"/>Genera con AI</Button><Input className="max-w-md" value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Modifica con AI: cambia outfit, estendi sfondo..."/><Button onClick={add} disabled={!prompt}>Modifica con AI</Button></div><div className="grid gap-3 md:grid-cols-4">{[...visuals, ...assets.slice(0, 4).map(a => a.src)].map((src, i) => <button key={src + i} onClick={() => setSelected(i % visuals.length)} className="overflow-hidden rounded-2xl border border-blue-100"><img src={src} className="h-28 w-full object-cover" alt="Variante"/></button>)}</div></div>;
}
