import { type DownloadItem } from '../../lib/constants'

interface DownloadCardProps {
  item: DownloadItem
  contactEmail: string
}

export function DownloadCard({ item, contactEmail }: DownloadCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
        padding: '1.25rem',
        background: 'var(--color-primary-ghost)',
        border: '1px solid var(--color-border)',
        borderRadius: '6px',
      }}
    >
      {/* File Icon */}
      <div
        style={{
          width: '44px',
          height: '44px',
          background: 'var(--color-primary)',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      </div>

      <div style={{ flex: 1 }}>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1rem',
            color: 'var(--color-text-dark)',
            marginBottom: '0.25rem',
          }}
        >
          {item.name}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            color: 'var(--color-text-muted)',
            marginBottom: '0.5rem',
          }}
        >
          {item.description}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            color: 'var(--color-text-muted)',
            fontStyle: 'italic',
          }}
        >
          {item.note}
        </div>
        <a
          href={`mailto:${contactEmail}?subject=Bedürfnisantrag Anfrage`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.375rem',
            marginTop: '0.75rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'var(--color-primary)',
            textDecoration: 'none',
            letterSpacing: '0.01em',
          }}
        >
          Per E-Mail anfragen →
        </a>
      </div>
    </div>
  )
}
