import { useEffect, useRef } from 'react'
import { SectionLabel } from '../ui/SectionLabel'
import { SportCard } from '../ui/SportCard'
import { DISCIPLINES, type DisciplineIconType } from '../../lib/constants'

function DisciplineIcon({ type }: { type: DisciplineIconType }) {
  if (type === 'rifle') {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="4"/>
        <line x1="12" y1="2" x2="12" y2="6"/>
        <line x1="12" y1="18" x2="12" y2="22"/>
        <line x1="2" y1="12" x2="6" y2="12"/>
        <line x1="18" y1="12" x2="22" y2="12"/>
      </svg>
    )
  }
  if (type === 'pistol') {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
        <line x1="12" y1="2" x2="12" y2="6"/>
        <line x1="12" y1="18" x2="12" y2="22"/>
        <line x1="2" y1="12" x2="6" y2="12"/>
        <line x1="18" y1="12" x2="22" y2="12"/>
      </svg>
    )
  }
  // largecaliber
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

export function Disziplinen() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    cardRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="disziplinen"
      style={{ background: 'var(--color-white)', padding: '96px 2rem' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionLabel text="Schießsport" />

        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              color: 'var(--color-text-dark)',
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
            }}
          >
            Unsere Disziplinen
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              color: 'var(--color-text-muted)',
              maxWidth: '380px',
              lineHeight: 1.6,
              textAlign: 'right',
            }}
          >
            Für jeden Erfahrungsstand die passende Disziplin — vom Einstieg bis zum Großkaliber.
          </p>
        </div>

        {/* Disziplinen Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {DISCIPLINES.map((discipline, i) => (
            <div
              key={discipline.id}
              ref={el => { cardRefs.current[i] = el }}
              className="reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <SportCard style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '0' }}>
                {/* Icon */}
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--color-accent-ghost)',
                    border: '1px solid var(--color-accent-dim)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    color: 'var(--color-accent)',
                  }}
                >
                  <DisciplineIcon type={discipline.iconType} />
                </div>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.375rem',
                    color: 'var(--color-text-dark)',
                    letterSpacing: '-0.01em',
                    marginBottom: '0.625rem',
                  }}
                >
                  {discipline.name}
                </h3>

                {/* Beschreibung */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.65,
                    flex: 1,
                    marginBottom: '1.25rem',
                  }}
                >
                  {discipline.description}
                </p>

                {/* Details-Badge */}
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    color: 'var(--color-text-muted)',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '4px',
                    padding: '0.375rem 0.625rem',
                    marginBottom: '1rem',
                    fontStyle: 'italic',
                  }}
                >
                  {discipline.details}
                </div>

                {/* Training-Info */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'var(--color-primary)',
                    fontWeight: 500,
                    paddingTop: '0.875rem',
                    borderTop: '1px solid var(--color-border)',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {discipline.trainingDay} · {discipline.trainingTime}
                </div>
              </SportCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
