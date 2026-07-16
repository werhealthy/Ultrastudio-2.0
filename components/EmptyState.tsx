import { Inbox } from "lucide-react";
export function EmptyState({ title, description, action }: { title: string; description: string; action?: React.ReactNode }) {
  return <div className="rounded-[2rem] border border-dashed border-blue-200 bg-white p-10 text-center shadow-sm"><Inbox className="mx-auto mb-3 h-8 w-8 text-blue-700"/><h3 className="text-lg font-bold text-slate-950">{title}</h3><p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">{description}</p>{action && <div className="mt-5">{action}</div>}</div>;
}
