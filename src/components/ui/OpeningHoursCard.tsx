import { type OpeningHoursEntry } from '../../lib/constants'

interface OpeningHoursCardProps {
  entry: OpeningHoursEntry
}

export function OpeningHoursCard({ entry }: OpeningHoursCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
        padding: '1rem 0',
        borderBottom: '1px solid var(--color-border-dark)',
      }}
    >
      {/* Gold-Accent Line */}
      <span
        style={{
          display: 'block',
          width: '3px',
          minHeight: '40px',
          background: 'var(--color-accent)',
          borderRadius: '2px',
          flexShrink: 0,
          marginTop: '2px',
        }}
      />
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.0625rem',
              color: 'var(--color-text-light)',
              letterSpacing: '-0.01em',
            }}
          >
            {entry.day}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              color: 'var(--color-accent-light)',
              fontWeight: 500,
              whiteSpace: 'nowrap',
            }}
          >
            {entry.hours}
          </span>
        </div>
        {entry.note && (
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              color: 'var(--color-text-light-dim)',
              marginTop: '0.25rem',
              fontStyle: 'italic',
            }}
          >
            {entry.note}
          </div>
        )}
      </div>
    </div>
  )
}
