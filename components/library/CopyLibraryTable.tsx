import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Table,TBody,TD,TH,THead,TR } from "@/components/ui/table";
export function CopyLibraryTable({items}:any){return <Table><THead><TR><TH>Testo</TH><TH>Tipologia</TH><TH>Campagna</TH><TH>Data</TH><TH>Lunghezza</TH><TH></TH></TR></THead><TBody>{items.map((c:any)=><TR key={c.id}><TD className="font-medium"><Link href={`/library/${c.id}`} className="hover:text-primary">{c.text}</Link></TD><TD>{c.type}</TD><TD>{c.campaign}</TD><TD>{c.date}</TD><TD>{c.length}</TD><TD><Button asChild size="sm" variant="outline"><Link href={`/library/${c.id}`}>Riutilizza</Link></Button></TD></TR>)}</TBody></Table>}
