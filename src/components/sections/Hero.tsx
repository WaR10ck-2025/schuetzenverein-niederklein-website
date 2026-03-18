import { motion } from 'framer-motion'
import { SITE } from '../../lib/constants'
import { SportButton } from '../ui/SportButton'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function Hero() {
  const reduced = useReducedMotion()

  const fadeUp = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 32 },
        animate: { opacity: 1, y: 0 },
      }

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'var(--color-dark)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingBottom: '160px',
      }}
    >
      {/* Grüner Diagonal-Block rechts */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '45%',
          height: '100%',
          background: 'linear-gradient(135deg, var(--color-primary) 0%, #0A1A0A 100%)',
          clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0 100%)',
          opacity: 0.22,
          zIndex: 0,
        }}
      />

      {/* Subtiler Gold-Radial-Gradient (Tiefe) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)',
          zIndex: 0,
        }}
      />

      {/* Vereinsmonogram — groß, rechts, dekorativ */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '8%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'clamp(160px, 22vw, 320px)',
          height: 'clamp(160px, 22vw, 320px)',
          borderRadius: '50%',
          border: '2px solid rgba(201,168,76,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: '85%',
            height: '85%',
            borderRadius: '50%',
            border: '1px solid rgba(201,168,76,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              color: 'rgba(201,168,76,0.18)',
              letterSpacing: '0.05em',
            }}
          >
            {SITE.monogram}
          </span>
        </div>
      </div>

      {/* Hauptinhalt */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          padding: '120px 2rem 0',
        }}
      >
        <motion.div
          {...fadeUp}
          transition={reduced ? {} : { duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Pre-Label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.25rem',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '32px',
                height: '3px',
                background: 'var(--color-accent)',
                borderRadius: '2px',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--color-accent-light)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              {SITE.federation} · Seit {SITE.founded}
            </span>
          </div>

          {/* Hauptheadline */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.75rem, 7vw, 6rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.01em',
              marginBottom: '1.25rem',
              maxWidth: '700px',
            }}
          >
            <span style={{ color: 'var(--color-white)', display: 'block' }}>
              Schützenverein
            </span>
            <span style={{ color: 'var(--color-accent)', display: 'block' }}>
              Niederklein
            </span>
          </h1>

          {/* Motto */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: 'var(--color-text-light-dim)',
              maxWidth: '480px',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
            }}
          >
            {SITE.motto}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <SportButton href="#schuetzenhaus" variant="primary">
              Schützenhaus →
            </SportButton>
            <SportButton href="#mitmachen" variant="outline">
              Mitglied werden
            </SportButton>
          </div>
        </motion.div>
      </div>

      {/* Scroll-Indikator */}
      <div
        style={{
          position: 'absolute',
          bottom: '4rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.5,
        }}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.625rem',
            color: 'var(--color-text-light-dim)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          Scrollen
        </span>
        <div
          style={{
            width: '1px',
            height: '32px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
          }}
        />
      </div>
    </section>
  )
}
