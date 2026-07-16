"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Images, Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [["/", "Dashboard", Home], ["/campaigns", "Campagne", Megaphone], ["/library", "Libreria", Images]] as const;
export function AppSidebar() {
  const pathname = usePathname();
  return <aside className="hidden w-60 shrink-0 border-r bg-card px-3 py-4 md:block"><Link href="/" className="mb-6 flex items-center gap-3 rounded-lg px-2 py-2"><span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">UD</span><span><span className="block text-sm font-semibold">UltraDisplay</span><span className="block text-xs text-muted-foreground">Operations</span></span></Link><nav className="space-y-1" aria-label="Navigazione principale">{nav.map(([href, label, Icon]) => { const active = href === "/" ? pathname === "/" : pathname.startsWith(href); return <Link key={href} href={href} className={cn("flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground", active && "bg-accent text-accent-foreground")}><Icon className="h-4 w-4" aria-hidden="true"/>{label}</Link>; })}</nav></aside>;
}
