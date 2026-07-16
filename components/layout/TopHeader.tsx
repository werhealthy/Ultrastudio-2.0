import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
export function TopHeader() { return <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-blue-100 bg-white/90 px-5 backdrop-blur"><div className="font-black text-blue-800 md:hidden">UltraDisplay</div><div className="relative ml-auto max-w-md flex-1 md:ml-0"><Search className="absolute left-3 top-3 h-4 w-4 text-blue-700"/><Input className="border-blue-100 pl-9" placeholder="Cerca campagne, asset, copy..."/></div><Bell className="h-5 w-5 text-blue-700"/><Avatar className="grid h-9 w-9 place-items-center rounded-full bg-blue-700 text-white"><AvatarFallback>UD</AvatarFallback></Avatar></header>; }
