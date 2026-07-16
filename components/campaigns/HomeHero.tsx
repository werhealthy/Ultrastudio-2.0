import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";
import { RecentCampaignMiniList } from "./RecentCampaignMiniList";
import type { Campaign } from "@/lib/mock-data";
export function HomeHero({ campaigns }: { campaigns: Campaign[] }) {return <div className="grid gap-4 lg:grid-cols-[1fr_420px]"><PageHeader eyebrow="Operations" title="Dashboard campagne" description="Vista operativa per priorità, stati e avanzamento delle campagne UltraDisplay." action={<Button asChild><Link href="/campaigns/new">Nuova campagna</Link></Button>}/><Card><CardHeader className="flex-row items-center justify-between space-y-0 pb-3"><CardTitle className="text-base">Recenti</CardTitle><Button asChild variant="ghost" size="sm"><Link href="/campaigns">Vedi tutte</Link></Button></CardHeader><CardContent><RecentCampaignMiniList campaigns={campaigns.slice(0,3)}/></CardContent></Card></div>}
