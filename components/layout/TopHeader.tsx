import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
export function TopHeader() { return <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b bg-card px-4 md:px-6"><div className="font-semibold text-primary md:hidden">UltraDisplay</div><div className="relative max-w-md flex-1"><Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/><Input className="h-10 bg-background pl-9" placeholder="Cerca campagne, asset, copy..." aria-label="Cerca"/></div><Button variant="ghost" size="sm" aria-label="Notifiche" className="h-10 w-10 p-0"><Bell className="h-4 w-4"/></Button><Avatar className="h-9 w-9"><AvatarFallback className="bg-accent text-xs font-semibold text-accent-foreground">UD</AvatarFallback></Avatar></header>; }
