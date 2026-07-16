"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, FileUp, ImagePlus, Plus, Repeat, Send, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { campaigns } from "@/lib/mock-data";

const steps = ["Partenza", "Info base", "Info campagna", "Visual", "Copy", "Review"];
const startOptions = [["zero", "Da zero", Plus], ["brief", "Da un brief esistente", FileUp], ["past", "Da una campagna passata", Repeat]] as const;

export function CreateCampaignDialog({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState(0);
  const [mode, setMode] = useState("zero");
  const [form, setForm] = useState({ nome: "", stato: "Bozza", richiesta: "", deliverables: "", data: "", allegati: "", figma: "", background: "", offerta: "", target: "", benefit: "", headline: "", subheadline: "", cta: "", prezzo: "", disclaimer: "" });
  const router = useRouter();
  const set = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const finish = () => router.push("/campaigns/nuova-campagna");

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Nuova campagna guidata</DialogTitle>
          <DialogDescription>Completa i passaggi principali: i dati restano mock e modificabili nella pagina dettaglio.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-wrap gap-2">
          {steps.map((label, index) => <Badge key={label} variant={index === step ? "default" : "secondary"}>{index + 1}. {label}</Badge>)}
        </div>

        {step === 0 && <div className="space-y-4"><h3 className="text-lg font-semibold">Da dove vuoi iniziare?</h3><div className="grid gap-3 md:grid-cols-3">{startOptions.map(([key, label, Icon]) => <button key={key} onClick={() => setMode(key)} className={`rounded-xl border p-5 text-left transition hover:bg-accent ${mode === key ? "border-primary bg-accent text-primary" : "bg-card"}`}><Icon className="mb-4 h-5 w-5" /><b>{label}</b></button>)}</div>{mode === "past" && <div className="grid gap-2 md:grid-cols-2">{campaigns.slice(0, 4).map(c => <button key={c.id} onClick={() => set("nome", `${c.name} copia`)} className="rounded-lg border p-3 text-left text-sm hover:bg-muted">{c.name}</button>)}</div>}</div>}

        {step === 1 && <div className="grid gap-3 md:grid-cols-2"><Input placeholder="Nome" value={form.nome} onChange={e => set("nome", e.target.value)} /><Input placeholder="Stato" value={form.stato} onChange={e => set("stato", e.target.value)} /><Textarea className="md:col-span-2" placeholder="Richiesta" value={form.richiesta} onChange={e => set("richiesta", e.target.value)} /><Input placeholder="Deliverables" value={form.deliverables} onChange={e => set("deliverables", e.target.value)} /><Input placeholder="Data" value={form.data} onChange={e => set("data", e.target.value)} /><Input placeholder="Allegati" value={form.allegati} onChange={e => set("allegati", e.target.value)} /><Input placeholder="Figma collegato" value={form.figma} onChange={e => set("figma", e.target.value)} /></div>}
        {step === 2 && <div className="grid gap-3 md:grid-cols-2"><Textarea placeholder="Background" value={form.background} onChange={e => set("background", e.target.value)} /><Textarea placeholder="Descrizione offerta" value={form.offerta} onChange={e => set("offerta", e.target.value)} /><Textarea placeholder="Target" value={form.target} onChange={e => set("target", e.target.value)} /><Textarea placeholder="Benefit / Reason Why" value={form.benefit} onChange={e => set("benefit", e.target.value)} /></div>}
        {step === 3 && <div className="space-y-4"><div className="rounded-xl border bg-muted/40 p-4"><b>Selected</b><p className="text-sm text-muted-foreground">Nessun visual definitivo selezionato.</p></div><div className="flex flex-wrap gap-2"><Button variant="outline"><ImagePlus className="h-4 w-4" />Carica asset</Button><Button variant="outline">Scegli da libreria</Button><Button variant="outline"><Wand2 className="h-4 w-4" />Genera con AI</Button><Button variant="outline">Modifica con AI</Button></div><div className="grid gap-3 md:grid-cols-3">{campaigns.slice(0, 3).map(c => <img key={c.id} src={c.thumbnail} alt="" className="h-28 rounded-lg object-cover" />)}</div></div>}
        {step === 4 && <div className="grid gap-3 md:grid-cols-2">{(["headline", "subheadline", "cta", "prezzo", "disclaimer"] as const).map(key => <Input key={key} placeholder={key} value={form[key]} onChange={e => set(key, e.target.value)} />)}</div>}
        {step === 5 && <div className="space-y-4 rounded-xl border bg-muted/30 p-5"><h3 className="font-semibold">Review finale</h3><p className="text-sm text-muted-foreground">{form.nome || "Nuova campagna"} · {form.stato} · {form.data || "data da definire"}</p><p className="text-sm">{form.richiesta || "Richiesta non compilata"}</p><div className="flex flex-wrap gap-2"><Button variant="outline"><Check className="h-4 w-4" />Salva come bozza</Button><Button onClick={finish}>Apri campagna</Button><Button variant="outline"><Send className="h-4 w-4" />Invia a Figma</Button></div></div>}

        <div className="flex justify-between border-t pt-4"><Button variant="ghost" disabled={step === 0} onClick={() => setStep(s => s - 1)}>Indietro</Button>{step < steps.length - 1 && <Button onClick={() => setStep(s => s + 1)}>Continua</Button>}</div>
      </DialogContent>
    </Dialog>
  );
}
