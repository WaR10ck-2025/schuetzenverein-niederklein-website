import { useEffect, useRef, useState } from 'react'
import { SectionLabel } from '../ui/SectionLabel'
import { StatCounter } from '../ui/StatCounter'
import { BOARD, CLUB_HISTORY, STATS, SITE } from '../../lib/constants'

export function UeberUns() {
  const sectionRef = useRef<HTMLElement>(null)
  const [statsActive, setStatsActive] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsActive(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="ueber-uns"
      ref={sectionRef}
      style={{
        position: 'relative',
        background: 'var(--color-dark)',
        padding: '96px 2rem',
        overflow: 'hidden',
      }}
    >
      {/* Subtiler grüner Hintergrundakzent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          background: 'radial-gradient(ellipse at 0% 50%, rgba(27,77,46,0.12) 0%, transparent 60%)',
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
          gap: '5rem',
          alignItems: 'start',
        }}
      >
        {/* Links: Stats + Emblem */}
        <div>
          <SectionLabel text="Zahlen & Fakten" dark />

          <div style={{ marginTop: '1.5rem' }}>
            {STATS.map(s => (
              <StatCounter key={s.label} {...s} active={statsActive} dark />
            ))}
          </div>

          {/* Vereinsemblem-Platzhalter */}
          <div
            style={{
              marginTop: '2.5rem',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '2px solid rgba(201,168,76,0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.125rem',
              color: 'var(--color-accent)',
              letterSpacing: '0.06em',
            }}
          >
            {SITE.monogram}
          </div>
        </div>

        {/* Rechts: Vereinsgeschichte + Vorstand */}
        <div>
          <SectionLabel text="Vereinsgeschichte" dark />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              color: 'var(--color-white)',
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
              marginBottom: '1.75rem',
            }}
          >
            {CLUB_HISTORY.headline}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
            {CLUB_HISTORY.paragraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: 'var(--color-text-light-dim)',
                  lineHeight: 1.75,
                }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Vorstand */}
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-accent-light)',
              marginBottom: '0.875rem',
            }}
          >
            Vorstand
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '0.5rem',
            }}
          >
            {BOARD.map(member => (
              <div
                key={member.role}
                style={{
                  padding: '0.625rem 0.875rem',
                  background: 'rgba(27,77,46,0.15)',
                  border: '1px solid rgba(201,168,76,0.15)',
                  borderRadius: '4px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                    marginBottom: '0.2rem',
                  }}
                >
                  {member.role}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'var(--color-text-light-dim)',
                  }}
                >
                  {member.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
