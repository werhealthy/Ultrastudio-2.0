import { CampaignKanban } from "@/components/campaigns/CampaignKanban";
import { HomeHero } from "@/components/campaigns/HomeHero";
import { campaigns, statuses } from "@/lib/mock-data";

const kanbanStatuses = statuses.slice(0, 4);

export default function Home() {
  return <div className="space-y-6"><HomeHero campaigns={campaigns} /><CampaignKanban campaigns={campaigns} statuses={kanbanStatuses} /></div>;
}
