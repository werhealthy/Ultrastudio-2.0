import Link from "next/link";
import { Home, Images, Megaphone } from "lucide-react";
const nav = [["/", "Home", Home], ["/campaigns", "Campagne", Megaphone], ["/library", "Libreria", Images]] as const;
export function AppSidebar() { return <aside className="hidden w-64 shrink-0 bg-blue-950 p-5 text-white md:block"><div className="mb-8 rounded-3xl bg-blue-700 p-4"><div className="text-2xl font-black">UltraDisplay</div><p className="text-sm text-blue-100">Campaign cockpit</p></div><nav className="space-y-1">{nav.map(([href, label, Icon]) => <Link key={href} href={href} className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-bold text-blue-50 hover:bg-white/10"><Icon className="h-4 w-4"/>{label}</Link>)}</nav></aside>; }
