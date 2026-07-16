import { Inbox } from "lucide-react";
export function EmptyState({ title, description, action }: { title: string; description: string; action?: React.ReactNode }) {
  return <div className="rounded-xl border border-dashed bg-card p-10 text-center shadow-sm"><Inbox className="mx-auto mb-3 h-8 w-8 text-primary" aria-hidden="true"/><h3 className="text-lg font-semibold text-foreground">{title}</h3><p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">{description}</p>{action && <div className="mt-5">{action}</div>}</div>;
}
