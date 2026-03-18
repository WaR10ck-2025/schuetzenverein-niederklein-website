import { NAV_LINKS, OPENING_HOURS, SITE } from '../../lib/constants'

export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-dark)',
        borderTop: '3px solid var(--color-accent)',
        padding: '3rem 2rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem',
        }}
      >
        {/* Vereinsinfo */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--color-primary)',
                border: '2px solid var(--color-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '0.75rem',
                color: 'var(--color-white)',
                letterSpacing: '0.04em',
                flexShrink: 0,
              }}
            >
              {SITE.monogram}
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  color: 'var(--color-white)',
                  letterSpacing: '0.02em',
                  lineHeight: 1.2,
                }}
              >
                Schützenverein Niederklein
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  color: 'var(--color-text-light-dim)',
                  letterSpacing: '0.03em',
                }}
              >
                {SITE.founded} e.V.
              </div>
            </div>
          </div>
          <address
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'var(--color-text-light-dim)',
              fontStyle: 'normal',
              lineHeight: 1.7,
              marginBottom: '0.75rem',
            }}
          >
            {SITE.address.street}<br />
            {SITE.address.city}
          </address>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <a
              href={`tel:${SITE.contact.phone}`}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: 'var(--color-text-light-dim)',
                textDecoration: 'none',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-white)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text-light-dim)' }}
            >
              ☎ {SITE.contact.phone}
            </a>
            <a
              href={`mailto:${SITE.contact.email}`}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: 'var(--color-text-light-dim)',
                textDecoration: 'none',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-white)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text-light-dim)' }}
            >
              ✉ {SITE.contact.email}
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--color-accent-light)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Navigation
          </div>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: 'var(--color-text-light-dim)',
                textDecoration: 'none',
                marginBottom: '0.625rem',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-white)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text-light-dim)' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Öffnungszeiten & Rechtliches */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--color-accent-light)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Schützenhaus
          </div>
          {OPENING_HOURS.map(entry => (
            <div
              key={entry.day}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                color: 'var(--color-text-light-dim)',
                marginBottom: '0.375rem',
              }}
            >
              <span style={{ color: 'var(--color-accent-light)', fontWeight: 500 }}>{entry.day}:</span>{' '}
              {entry.hours}
            </div>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1.25rem' }}>
            {['Impressum', 'Datenschutz'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  color: 'var(--color-text-light-dim)',
                  textDecoration: 'none',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-white)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text-light-dim)' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--color-border-dark)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            color: 'var(--color-text-light-dim)',
          }}
        >
          © {SITE.year} {SITE.name}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.75rem',
            color: 'var(--color-accent)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          {SITE.federation}
        </span>
      </div>
    </footer>
  )
}
