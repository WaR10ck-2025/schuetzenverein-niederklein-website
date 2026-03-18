---
status: active
last_updated: 2026-03-18
complexity_score: 8
complexity_size: M
complexity_factors:
  stack_depth: 2
  integrations: 1
  architecture: 2
  scope: 2
  unknowns: 1
token_estimate_per_phase: 50000
complexity_last_updated: 2026-03-18
---

# Schützenverein Niederklein 1966 — Website

## Projektziel

Moderne Vereinswebsite für den **Schützenverein Niederklein 1966 e.V.** auf Basis des Referenzprojekts `sv-niederklein-website`. Vollständig statische SPA, alle Daten hardcoded in `constants.ts`.

**Pfad:** `C:\Daten\Projekte\Websiten-programmieren\schuetzenverein-niederklein-website\`
**Referenzprojekt:** `C:\Daten\Projekte\Websiten-programmieren\sv-niederklein-website\`

---

## Vereinsdaten (recherchiert)

| Feld | Wert |
|------|------|
| Name | Schützenverein Niederklein 1966 e.V. |
| Adresse | Am Sportplatz 19, 35260 Niederklein (Stadtallendorf) |
| Telefon | 06429-1595 |
| Email | mario.ha@t-online.de |
| Mitglieder | 259 |
| Verband | Sportkreis Marburg-Biedenkopf e.V. |
| Disziplinen | Luftgewehr, Luftpistole, Großkaliber |
| Öffnungszeiten | So 9:30–12:30 · Di 18:00–22:30 · Fr 18:00–22:30 |

**Quellen:**
- [schuetzenverein-niederklein.de](https://www.schuetzenverein-niederklein.de/)
- [alle-schuetzenvereine.de](https://www.alle-schuetzenvereine.de/vereine/schuetzenverein-niederklein-1966-e-v/)
- [sportkreis-marburg-biedenkopf.de](https://www.sportkreis-marburg-biedenkopf.de/schuetzenverein-1966-niederklein-e-v/)

---

## Tech-Stack

| Technologie | Version |
|-------------|---------|
| React | 19.x |
| TypeScript | 5.9 |
| Vite | 8.x |
| Tailwind CSS | 4.x |
| Framer Motion | 12.x |
| Docker | Multi-Stage (Node 22-Alpine → Nginx-Alpine) |
| Port | **3002** |
| Network | openclaw-net |

---

## Farbschema

| Variable | Wert | Verwendung |
|----------|------|------------|
| `--color-primary` | `#1B4D2E` | Dunkelgrün — Hauptfarbe |
| `--color-accent` | `#C9A84C` | Gold — Akzentfarbe |
| `--color-dark` | `#0A1A0A` | Grün-Schwarz Hero-BG |
| `--font-display` | Playfair Display | Headlines, Labels |
| `--font-body` | Inter | Fließtext |

---

## Sektionsstruktur

| # | Sektion | Komponente | Beschreibung |
|---|---------|-----------|--------------|
| 1 | Hero | `Hero.tsx` | Vollbild-Opener, Grün/Gold, Motto, CTAs |
| 2 | Aktuelles | `Aktuelles.tsx` | News-Grid, Veranstaltungen |
| 3 | Disziplinen | `Disziplinen.tsx` | Luftgewehr, Luftpistole, Großkaliber |
| 4 | Schützenhaus | `Schuetzenhaus.tsx` | Öffnungszeiten + Anfahrt (Dark Section) |
| 5 | Über uns | `UeberUns.tsx` | Geschichte seit 1966, Stats, Vorstand |
| 6 | Mitmachen | `Mitmachen.tsx` | Mitgliedschaft + Downloads/Formulare |
| 7 | Kontakt | `Kontakt.tsx` | Web3Forms + Email/Telefon/Adresse |

**Modals:** Impressum + Datenschutz (hash-basiert: `#impressum`, `#datenschutz`)

---

## Projektstruktur

```
src/
  components/
    layout/
      NavBar.tsx          — Fixed Header, mobile-responsive, Gold Active-Links
      Footer.tsx          — Dark Footer, Öffnungszeiten, Telefon/Email
    sections/
      Hero.tsx            — Hero Section (Grün/Gold)
      Aktuelles.tsx       — News Grid mit Scroll-Reveal
      Disziplinen.tsx     — 3 Schießdisziplinen als Karten (NEU)
      Schuetzenhaus.tsx   — Öffnungszeiten + Anfahrt (NEU)
      UeberUns.tsx        — Geschichte, Stats, Vorstand
      Mitmachen.tsx       — Mitgliedschaft + Downloads
      Kontakt.tsx         — Formular (Web3Forms) + Kontaktinfo mit Telefon
      Impressum.tsx       — Modal-Content
      Datenschutz.tsx     — Modal-Content
    ui/
      SportButton.tsx     — primary / ghost / outline
      SportCard.tsx       — Hover-Animation
      SectionLabel.tsx    — Gold Bar + Label (Dark: Gold, Light: Grün)
      StatCounter.tsx     — CountUp Animation
      Modal.tsx           — Framer Motion Dialog
      OpeningHoursCard.tsx — Öffnungszeiten-Zeile mit Gold-Accent (NEU)
      DownloadCard.tsx    — PDF-Download-Element (NEU)
  hooks/
    useReducedMotion.ts
    useIntersectionObserver.ts
  lib/
    constants.ts          — ALLE Vereinsdaten (SITE, NAV_LINKS, STATS, DISCIPLINES, ...)
  App.tsx                 — Sektionen + hash-basierte Modals
  index.css               — Tailwind @theme (Grün + Gold)
  main.tsx
Dockerfile                — Multi-Stage Build
docker-compose.yml        — Port 3002, openclaw-net, Tailscale-Profile
nginx.conf                — Static Serving, kein API-Proxy
.env.example              — VITE_WEB3FORMS_KEY, TS_AUTHKEY
```

---

## Deployment

```bash
# Entwicklung
npm run dev      # localhost:5173

# Production Build testen
npm run build    # → dist/

# Docker
cp .env.example .env
# .env befüllen (WEB3FORMS_KEY)
docker compose up --build -d
# → http://localhost:3002
```

---

## Open TODOs

- [ ] Vorstand-Namen beim Verein erfragen (aktuell N.N.)
- [ ] Vereinsregisternummer beim Verein erfragen
- [ ] Mitgliedsbeiträge (€/Jahr) klären
- [ ] Schützenfest-Termin 2026 in NEWS_ITEMS nachpflegen
- [ ] Google Maps Embed-URL für Schuetzenhaus-Sektion erstellen
- [ ] Web3Forms-Key registrieren und in .env eintragen

---

## Komplexität & Token-Schätzung

| Faktor | Wert | Score |
|--------|------|-------|
| Stack-Tiefe | React 19 + TS + Tailwind 4 | 2/3 |
| Integrationen | Web3Forms only | 1/3 |
| Architektur | SPA, statisch | 2/3 |
| Scope | 7 Sektionen, 2 Modals | 2/3 |
| Unbekannte | Vorstandsdaten fehlen | 1/3 |
| **Gesamt** | | **8/15 (M)** |
