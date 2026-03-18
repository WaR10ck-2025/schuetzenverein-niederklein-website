interface SectionLabelProps {
  text: string
  dark?: boolean
  className?: string
}

export function SectionLabel({ text, dark = false, className = '' }: SectionLabelProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.625rem',
        marginBottom: '0.875rem',
      }}
    >
      <span
        style={{
          display: 'block',
          width: '28px',
          height: '3px',
          background: dark ? 'var(--color-accent)' : 'var(--color-primary)',
          borderRadius: '2px',
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.75rem',
          fontWeight: 700,
          color: dark ? 'var(--color-accent-light)' : 'var(--color-primary)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        {text}
      </span>
    </div>
  )
}
