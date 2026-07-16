import Link from "next/link";
import { notFound } from "next/navigation";
import { Sparkles, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { assets, characters, copyItems } from "@/lib/mock-data";

export default function AssetDetail({ params }: { params: { id: string } }) {
  const visual = assets.find(a => a.id === params.id);
  const character = characters.find(c => c.id === params.id);
  const copy = copyItems.find(c => c.id === params.id);
  if (!visual && !character && !copy) notFound();
  const title = visual?.title || character?.name || copy?.text;

  return <div className="space-y-6"><nav className="text-sm text-muted-foreground"><Link href="/library">Libreria</Link> / <span className="text-foreground">{title}</span></nav>
    {visual && <div className="grid gap-6 lg:grid-cols-[1.4fr_.8fr]"><img src={visual.src} alt="" className="h-[460px] w-full rounded-2xl object-cover shadow-sm"/><Card><CardContent className="space-y-4 p-6"><Badge>{visual.status}</Badge><h1 className="text-3xl font-bold">{visual.title}</h1><p className="text-muted-foreground">Campagna collegata: {visual.campaign}</p><p>Data: {visual.date}</p><div className="flex flex-wrap gap-2">{visual.tags.map(t => <Badge key={t} variant="outline">{t}</Badge>)}</div><div className="flex gap-2"><Button>Usa in campagna</Button><Button variant="outline"><Wand2 className="h-4 w-4"/>Modifica con AI</Button></div></CardContent></Card><section className="lg:col-span-2"><h2 className="mb-3 font-semibold">Varianti</h2><div className="grid gap-3 md:grid-cols-4">{assets.slice(0,4).map(a => <img key={a.id} src={a.src} alt="" className="h-32 rounded-xl object-cover" />)}</div></section></div>}
    {character && <div className="grid gap-6 lg:grid-cols-[.9fr_1fr]"><img src={character.src} alt="" className="h-[420px] w-full rounded-2xl object-cover"/><Card><CardContent className="space-y-4 p-6"><Badge>{character.status}</Badge><h1 className="text-3xl font-bold">{character.name}</h1><p>{character.campaigns} campagne collegate</p><p>{character.variants} varianti disponibili</p><Button>Usa in campagna</Button></CardContent></Card></div>}
    {copy && <Card><CardContent className="space-y-5 p-6"><Badge>{copy.status}</Badge><h1 className="text-3xl font-bold">Copy approvato</h1><blockquote className="rounded-xl border bg-muted/50 p-5 text-xl">{copy.text}</blockquote><div className="grid gap-3 md:grid-cols-3"><p>Tipologia: {copy.type}</p><p>Lunghezza: {copy.length} caratteri</p><p>Campagna: {copy.campaign}</p></div><div className="flex gap-2"><Button><Sparkles className="h-4 w-4"/>Riutilizza</Button><Button variant="outline">Crea variante</Button></div></CardContent></Card>}
  </div>;
}
