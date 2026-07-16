# UltraDisplay

UltraDisplay è un MVP Next.js per la gestione operativa di campagne pubblicitarie: dashboard, archivio campagne, dettaglio con tab editoriali/visual/formati e libreria asset.

## Definizione UX rapida

### Sitemap
- `/` Home: campagne recenti, Kanban lavorazione e shortcut.
- `/campaigns` Archivio campagne: ricerca, filtri, vista tabella/card, azioni simulate.
- `/campaigns/[id]` Dettaglio campagna: overview, visual, copy, formati.
- `/library` Libreria: immagini generate, personaggi, copy approvati.

### User flow principali
1. Home → Crea nuova campagna → scelta origine → dettaglio campagna.
2. Campagne → cerca/filtra → apri, duplica o archivia campagna.
3. Dettaglio → modifica info base → crea varianti visual/copy → controlla formati → invio Figma simulato.
4. Libreria → consulta asset/personaggi/copy → riutilizzo simulato.

### Struttura pagine
- Layout globale con sidebar desktop e topbar.
- Home dashboard con una sola CTA primaria.
- Archivio campagne orientato a lista e filtri.
- Dettaglio con tab per evitare wizard lineari.
- Libreria con tab per separare asset, personaggi e copy.

### Componenti riutilizzabili
`AppSidebar`, `TopHeader`, `CampaignCard`, `CampaignTable`, `CampaignStatusBadge`, `CreateCampaignDialog`, `CampaignOverview`, `CampaignVisualPanel`, `CampaignCopyPanel`, `CampaignFormatsPanel`, `AssetCard`, `CharacterCard`, `CopyLibraryTable`, `EmptyState`, `SectionHeader`, `EditableField`.

## Avvio

```bash
npm install
npm run dev
```

Apri `http://localhost:3000`.

## Note tecniche
- Next.js App Router, TypeScript e Tailwind CSS.
- Componenti stile shadcn/ui basati su Radix UI e classi Tailwind.
- Mock data locali in `lib/mock-data.ts`.
- Nessun database, backend, API AI o integrazione Figma reale.
