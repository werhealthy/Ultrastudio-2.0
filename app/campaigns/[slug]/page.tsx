import Link from "next/link";
import { Archive, Copy, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CampaignStatusBadge } from "@/components/campaigns/CampaignStatusBadge";
import { CampaignOverview } from "@/components/campaigns/CampaignOverview";
import { CampaignVisualPanel } from "@/components/campaigns/CampaignVisualPanel";
import { CampaignCopyPanel } from "@/components/campaigns/CampaignCopyPanel";
import { CampaignFormatsPanel } from "@/components/campaigns/CampaignFormatsPanel";
import { campaigns, getCampaignBySlug } from "@/lib/mock-data";
import { notFound } from "next/navigation";

export function generateStaticParams() { return campaigns.map((campaign) => ({ slug: campaign.slug })); }

export default function CampaignDetail({ params }: { params: { slug: string } }) {
  const campaign = getCampaignBySlug(params.slug) || (params.slug.startsWith("nuova-") ? { ...campaigns[0], slug: "nuova-campagna", name: "Nuova campagna", status: "Bozza" as const, updated: "2026-07-16" } : undefined);
  if (!campaign) notFound();
  return <div className="space-y-6"><nav className="text-sm text-blue-100"><Link href="/campaigns" className="font-semibold text-white">Campagne</Link> / <span>{campaign.name}</span></nav><div className="overflow-hidden rounded-[2rem] bg-blue-700 p-1 shadow-2xl shadow-blue-950/20"><div className="rounded-[1.75rem] bg-white p-6"><div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div><div className="mb-3 flex flex-wrap items-center gap-2"><CampaignStatusBadge status={campaign.status}/>{campaign.figma && <Badge variant="outline">Figma collegato</Badge>}<Badge className="bg-blue-700">{campaign.category}</Badge></div><h1 className="text-4xl font-black tracking-tight text-slate-950">{campaign.name}</h1><p className="mt-2 text-sm text-slate-500">Ultima modifica {campaign.updated} · consegna {campaign.date}</p></div><div className="flex flex-wrap gap-2"><Button variant="outline"><Copy className="h-4 w-4"/>Duplica</Button><Button variant="outline"><Archive className="h-4 w-4"/>Archivia</Button><Button className="bg-red-600 hover:bg-red-700" disabled={!campaign.figma}><Send className="h-4 w-4"/>Invia a Figma</Button></div></div></div></div><Tabs defaultValue="overview"><TabsList className="h-auto flex-wrap rounded-2xl bg-blue-950 p-1 text-white"><TabsTrigger value="overview">Overview</TabsTrigger><TabsTrigger value="visual">Visual</TabsTrigger><TabsTrigger value="copy">Copy</TabsTrigger><TabsTrigger value="formats">Formati</TabsTrigger></TabsList><TabsContent value="overview"><CampaignOverview campaign={campaign}/></TabsContent><TabsContent value="visual"><CampaignVisualPanel campaign={campaign}/></TabsContent><TabsContent value="copy"><CampaignCopyPanel campaign={campaign}/></TabsContent><TabsContent value="formats"><CampaignFormatsPanel campaign={campaign}/></TabsContent></Tabs></div>;
}
