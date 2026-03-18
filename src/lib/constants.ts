// ─── Stammdaten ───────────────────────────────────────────────────────────────
export const SITE = {
  name: 'Schützenverein Niederklein 1966 e.V.',
  shortName: 'SV Niederklein 1966',
  monogram: 'SVN',
  motto: 'Tradition trifft Präzision. Seit 1966 in Niederklein.',
  founded: 1966,
  federation: 'Sportkreis Marburg-Biedenkopf e.V.',
  address: {
    street: 'Am Sportplatz 19',
    city: '35260 Niederklein (Stadtallendorf)',
    maps: 'https://maps.google.com/?q=Am+Sportplatz+19+35260+Stadtallendorf+Niederklein',
  },
  contact: {
    phone: '06429-1595',
    email: 'mario.ha@t-online.de',
  },
  social: {
    facebook: '',
    instagram: '',
  },
  year: new Date().getFullYear(),
}

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { href: '#aktuelles',     label: 'Aktuelles' },
  { href: '#disziplinen',   label: 'Disziplinen' },
  { href: '#schuetzenhaus', label: 'Schützenhaus' },
  { href: '#ueber-uns',     label: 'Über uns' },
  { href: '#mitmachen',     label: 'Mitmachen' },
  { href: '#kontakt',       label: 'Kontakt' },
]

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS = [
  { value: 259, suffix: '',  label: 'Mitglieder' },
  { value: new Date().getFullYear() - 1966, suffix: '', label: 'Jahre Vereinsgeschichte' },
  { value: 3,   suffix: '',  label: 'Schießdisziplinen' },
]

// ─── Neuigkeiten ──────────────────────────────────────────────────────────────
export interface NewsItem {
  id: string
  date: string
  category: string
  title: string
  excerpt: string
  link: string
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: '1',
    date: '1. März 2026',
    category: 'Veranstaltung',
    title: 'Ostereierschießen am 29. März 2026',
    excerpt: 'Traditionelles Ostereierschießen im Schützenhaus. Alle Mitglieder und Gäste sind herzlich eingeladen. Beginn: 9:30 Uhr.',
    link: '#',
  },
  {
    id: '2',
    date: '20. Februar 2026',
    category: 'Vereinsnews',
    title: 'Jahreshauptversammlung 2026 — Jahresrückblick und Neuwahlen',
    excerpt: 'Die Jahreshauptversammlung fand erfolgreich statt. Der Vorstand blickte auf ein erfülltes Vereinsjahr zurück.',
    link: '#',
  },
  {
    id: '3',
    date: '10. Januar 2026',
    category: 'Jugend',
    title: 'Jugendtraining startet wieder — Neue Mitglieder willkommen',
    excerpt: 'Das Jugendtraining im Schützenhaus geht wieder los — jeden Freitag ab 18:00 Uhr. Interessierte Jugendliche sind herzlich willkommen!',
    link: '#',
  },
]

// ─── Schießdisziplinen ────────────────────────────────────────────────────────
export type DisciplineIconType = 'rifle' | 'pistol' | 'largecaliber'

export interface Discipline {
  id: string
  name: string
  description: string
  details: string
  trainingDay: string
  trainingTime: string
  iconType: DisciplineIconType
}

export const DISCIPLINES: Discipline[] = [
  {
    id: 'luftgewehr',
    name: 'Luftgewehr',
    description: 'Die klassische Einstiegsdisziplin im Schießsport — präzises Schießen auf 10 Meter Distanz. Ideal für Einsteiger und Jugendliche.',
    details: 'Kaliber 4,5 mm · 10 m Distanz · stehend freihändig',
    trainingDay: 'Di & Fr',
    trainingTime: '18:00–22:30 Uhr',
    iconType: 'rifle',
  },
  {
    id: 'luftpistole',
    name: 'Luftpistole',
    description: 'Schießen mit der Luftpistole auf 10 Meter — hohe Konzentration und eine ruhige Hand sind hier gefragt.',
    details: 'Kaliber 4,5 mm · 10 m Distanz · stehend freihändig',
    trainingDay: 'Di & Fr',
    trainingTime: '18:00–22:30 Uhr',
    iconType: 'pistol',
  },
  {
    id: 'grosskaliber',
    name: 'Großkaliber',
    description: 'Sport mit Großkaliberwaffen — für erfahrene Schützen mit entsprechendem Waffenschein.',
    details: 'Diverse Kaliber · eigener Schießstand',
    trainingDay: 'Fr',
    trainingTime: 'ab 20:00 Uhr',
    iconType: 'largecaliber',
  },
]

// ─── Schützenhaus & Öffnungszeiten ────────────────────────────────────────────
export interface OpeningHoursEntry {
  day: string
  hours: string
  note?: string
}

export const OPENING_HOURS: OpeningHoursEntry[] = [
  {
    day: 'Sonntag',
    hours: '9:30–12:30 Uhr',
  },
  {
    day: 'Dienstag',
    hours: '18:00–22:30 Uhr',
  },
  {
    day: 'Freitag',
    hours: '18:00–22:30 Uhr',
    note: 'ab 18:00 Jugend · ab 20:00 Großkaliber',
  },
]

// ─── Vereinsgeschichte ────────────────────────────────────────────────────────
export const CLUB_HISTORY = {
  headline: 'Seit 1966 im Dienst der Präzision.',
  paragraphs: [
    'Der Schützenverein Niederklein wurde 1966 gegründet und ist seitdem fester Bestandteil des Gemeindelebens in Niederklein, Stadtallendorf.',
    'Mit 259 Mitgliedern und drei aktiven Schießdisziplinen — Luftgewehr, Luftpistole und Großkaliber — bieten wir Schießsport für alle Altersgruppen und Erfahrungsstufen.',
    'Unser Schützenhaus am Sportplatz ist weit mehr als ein Trainingsort: Es ist ein Treffpunkt für die Gemeinschaft, ein Ort der Tradition und des sportlichen Miteinanders.',
  ],
}

export interface BoardMember {
  role: string
  name: string
}

export const BOARD: BoardMember[] = [
  { role: '1. Vorsitzender', name: 'N.N.' },
  { role: '2. Vorsitzender', name: 'N.N.' },
  { role: 'Kassenwart',      name: 'N.N.' },
  { role: 'Schriftführer',   name: 'N.N.' },
  { role: 'Jugendwart',      name: 'N.N.' },
  { role: 'Sportwart',       name: 'N.N.' },
]

// ─── Mitgliedschaft & Downloads ───────────────────────────────────────────────
export const MEMBERSHIP_FEES = [
  { category: 'Erwachsene',  price: 'Auf Anfrage' },
  { category: 'Jugendliche', price: 'Auf Anfrage' },
  { category: 'Familie',     price: 'Auf Anfrage' },
]

export const MEMBERSHIP_BENEFITS = [
  'Zugang zu allen drei Schießdisziplinen',
  'Regelmäßiges Training Di, Fr & So im Schützenhaus',
  'Teilnahme an Vereinsmeisterschaften und Schützenfest',
  'Gemeinschaft und aktives Vereinsleben seit 1966',
  'Jugendförderung und Betreuung durch erfahrene Schützen',
]

export interface DownloadItem {
  id: string
  name: string
  description: string
  note: string
}

export const DOWNLOADS: DownloadItem[] = [
  {
    id: 'bediuenisantrag',
    name: 'Bedürfnisantrag (Waffenbescheinigung)',
    description: 'Formular für Bedürfnisanträge gemäß Waffengesetz',
    note: 'Ausgefüllt beim Vorstand einreichen · Kontakt: mario.ha@t-online.de',
  },
]

// ─── Kontakt ──────────────────────────────────────────────────────────────────
export const CONTACT = {
  email: 'mario.ha@t-online.de',
  phone: '06429-1595',
  subjectOptions: [
    'Mitgliedschaft',
    'Waffenbescheinigung / Bedürfnisantrag',
    'Training & Öffnungszeiten',
    'Schützenfest / Veranstaltungen',
    'Allgemeine Anfrage',
    'Sonstiges',
  ],
}

// ─── Impressum ────────────────────────────────────────────────────────────────
export const IMPRESSUM = {
  verantwortlich: 'N.N. (1. Vorsitzender)',
  verein: 'Schützenverein Niederklein 1966 e.V.',
  adresse: 'Am Sportplatz 19, 35260 Niederklein (Stadtallendorf)',
  telefon: '06429-1595',
  email: 'mario.ha@t-online.de',
  registernummer: 'N.N. (Amtsgericht Marburg)',
  ustIdNr: 'Nicht vorhanden (gemeinnütziger Verein)',
}

// ─── Datenschutz ──────────────────────────────────────────────────────────────
export const DATENSCHUTZ = {
  verantwortlich: 'Schützenverein Niederklein 1966 e.V.',
  adresse: 'Am Sportplatz 19, 35260 Niederklein (Stadtallendorf)',
  email: 'mario.ha@t-online.de',
}
