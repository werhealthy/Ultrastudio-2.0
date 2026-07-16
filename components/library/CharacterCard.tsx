import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
export function CharacterCard({ character }: any) { return <Link href={`/library/${character.id}`} className="block rounded-lg border bg-card p-4 shadow-sm transition hover:border-primary/40"><img src={character.src} className="mb-3 h-36 w-full rounded-md object-cover" alt=""/><b>{character.name}</b><p className="text-sm text-muted-foreground">{character.campaigns} campagne · {character.variants} varianti</p><Badge className="my-3" variant="secondary">{character.status}</Badge><Button className="w-full" size="sm" variant="outline">Apri</Button></Link> }
