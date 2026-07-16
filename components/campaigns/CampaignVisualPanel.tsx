"use client";
import { useMemo, useState } from "react";
import { Wand2, Upload } from "lucide-react";
import type { Campaign } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { assets } from "@/lib/mock-data";

const CAMPAIGN_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='420' viewBox='0 0 640 420'%3E%3Crect width='640' height='420' fill='%23dbeafe'/%3E%3Cpath d='M120 290 240 170l85 85 55-55 140 140H120Z' fill='%231d4ed8' opacity='.35'/%3E%3Ccircle cx='455' cy='135' r='45' fill='%23dc2626' opacity='.55'/%3E%3Ctext x='320' y='360' font-family='Arial,sans-serif' font-size='28' font-weight='700' text-anchor='middle' fill='%231e3a8a'%3EUltraDisplay%3C/text%3E%3C/svg%3E";

const isValidImageSrc = (src: unknown): src is string =>
  typeof src === "string" && src.trim().length > 0;

const getCampaignVisuals = (campaign: Campaign) => {
  const normalizedVisuals = [
    campaign.thumbnail,
    campaign.visual?.selected,
    ...(campaign.visual?.variants ?? []),
    ...(campaign.visuals ?? []),
  ].filter(isValidImageSrc);

  return normalizedVisuals.length ? Array.from(new Set(normalizedVisuals)) : [CAMPAIGN_PLACEHOLDER];
};

export function CampaignVisualPanel({ campaign }: { campaign: Campaign }) {
  const initialVisuals = useMemo(() => getCampaignVisuals(campaign), [campaign]);
  const [visuals, setVisuals] = useState(initialVisuals);
  const [selected, setSelected] = useState(0);
  const [prompt, setPrompt] = useState("");
  const selectedVisual = visuals[selected] ?? CAMPAIGN_PLACEHOLDER;
  const add = () => { setVisuals(v => [...v, `https://picsum.photos/seed/${encodeURIComponent(prompt || "ai")}-${v.length}/640/420`]); setPrompt(""); };
  return <div className="space-y-5 rounded-[2rem] bg-white p-5 shadow-sm"><div><h3 className="text-xl font-bold">Visual selezionato</h3><p className="text-sm text-slate-500">Varianti e immagini collegate alla campagna.</p></div><img src={selectedVisual} className="h-80 w-full rounded-2xl object-cover" alt="Visual selezionato"/><div className="flex flex-wrap gap-2"><Button variant="outline"><Upload className="h-4 w-4"/>Carica asset</Button><Button variant="outline">Scegli da libreria</Button><Button variant="outline" onClick={add}><Wand2 className="h-4 w-4"/>Genera con AI</Button><Input className="max-w-md" value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Modifica con AI: cambia outfit, estendi sfondo..."/><Button onClick={add} disabled={!prompt}>Modifica con AI</Button></div><div className="grid gap-3 md:grid-cols-4">{[...visuals, ...assets.slice(0, 4).map(a => a.src).filter(isValidImageSrc)].map((src, i) => <button key={src + i} onClick={() => setSelected(i % visuals.length)} className="overflow-hidden rounded-2xl border border-blue-100"><img src={src} className="h-28 w-full object-cover" alt="Variante"/></button>)}</div></div>;
}
