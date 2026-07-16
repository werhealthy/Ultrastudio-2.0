import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return <main className="grid min-h-[70vh] place-items-center"><section className="max-w-xl rounded-[2rem] border border-blue-100 bg-white p-8 text-center shadow-2xl"><p className="font-black uppercase tracking-[0.25em] text-blue-700">UltraDisplay</p><h1 className="mt-4 text-4xl font-black text-slate-950">Pagina non trovata</h1><p className="mt-3 text-slate-600">La campagna o risorsa richiesta non esiste nei dati mock locali. Torna al cockpit e apri una campagna disponibile.</p><Button asChild className="mt-6 bg-red-600 hover:bg-red-700"><Link href="/campaigns">Vai a tutte le campagne</Link></Button></section></main>;
}
