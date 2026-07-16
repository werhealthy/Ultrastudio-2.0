import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
export function SearchToolbar({ children, value, onChange, placeholder = "Cerca" }: { children?: React.ReactNode; value?: string; onChange?: (value: string) => void; placeholder?: string }) {
  return <div className="surface flex flex-col gap-3 p-3 md:flex-row md:items-center"><div className="relative min-w-0 flex-1"><Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/><Input className="h-10 pl-9" value={value} onChange={e => onChange?.(e.target.value)} placeholder={placeholder}/></div><div className="flex flex-wrap gap-2">{children}</div></div>;
}
