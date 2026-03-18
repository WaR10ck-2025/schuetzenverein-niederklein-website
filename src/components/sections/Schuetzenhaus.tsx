import { SectionLabel } from '../ui/SectionLabel'
import { SportButton } from '../ui/SportButton'
import { OpeningHoursCard } from '../ui/OpeningHoursCard'
import { OPENING_HOURS, SITE } from '../../lib/constants'

export function Schuetzenhaus() {
  return (
    <section
      id="schuetzenhaus"
      style={{
        position: 'relative',
        background: 'var(--color-dark)',
        padding: '96px 2rem',
        overflow: 'hidden',
      }}
    >
      {/* Subtiler Hintergrundakzent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          background: 'radial-gradient(ellipse at 100% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        {/* Links: Öffnungszeiten */}
        <div>
          <SectionLabel text="Schützenhaus" dark />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              color: 'var(--color-white)',
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
              marginBottom: '0.75rem',
            }}
          >
            Öffnungszeiten
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              color: 'var(--color-text-light-dim)',
              lineHeight: 1.65,
              marginBottom: '2rem',
            }}
          >
            Das Schützenhaus steht an folgenden Tagen offen. Gäste sind herzlich willkommen!
          </p>

          <div>
            {OPENING_HOURS.map(entry => (
              <OpeningHoursCard key={entry.day} entry={entry} />
            ))}
          </div>
        </div>

        {/* Rechts: Adresse & Anfahrt */}
        <div>
          <SectionLabel text="Anfahrt" dark />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              color: 'var(--color-white)',
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
              marginBottom: '0.75rem',
            }}
          >
            Am Sportplatz
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              color: 'var(--color-text-light-dim)',
              lineHeight: 1.65,
              marginBottom: '2rem',
            }}
          >
            Unser Schützenhaus liegt direkt am Sportplatz in Niederklein. Parkplätze sind vorhanden.
          </p>

          {/* Adress-Block */}
          <div
            style={{
              padding: '1.5rem',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--color-border-dark)',
              borderLeft: '3px solid var(--color-accent)',
              borderRadius: '6px',
              marginBottom: '1.75rem',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                marginBottom: '0.625rem',
              }}
            >
              Adresse
            </div>
            <address
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'var(--color-text-light)',
                fontStyle: 'normal',
                lineHeight: 1.7,
              }}
            >
              {SITE.address.street}<br />
              {SITE.address.city}
            </address>
          </div>

          {/* Maps-Link */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <SportButton href={SITE.address.maps} variant="primary">
              In Google Maps öffnen →
            </SportButton>
            <SportButton href="#kontakt" variant="outline">
              Kontakt aufnehmen
            </SportButton>
          </div>

          {/* Telefon-Hinweis */}
          <div
            style={{
              marginTop: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'var(--color-text-light-dim)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <a
              href={`tel:${SITE.contact.phone}`}
              style={{ color: 'var(--color-text-light-dim)', textDecoration: 'none', transition: 'color 150ms ease' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-white)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text-light-dim)' }}
            >
              {SITE.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
