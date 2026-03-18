import { useState, type FormEvent, type ChangeEvent } from 'react'
import { SectionLabel } from '../ui/SectionLabel'
import { SportButton } from '../ui/SportButton'
import { CONTACT, SITE } from '../../lib/constants'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '6px',
  padding: '0.75rem 1rem',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9375rem',
  color: 'var(--color-white)',
  outline: 'none',
  transition: 'border-color 200ms ease',
  boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-body)',
  fontSize: '0.875rem',
  fontWeight: 500,
  color: 'var(--color-text-light-dim)',
  marginBottom: '0.5rem',
}

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

export function Kontakt() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: CONTACT.subjectOptions[0],
    message: '',
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [status, setStatus] = useState<SubmitStatus>('idle')

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!WEB3FORMS_KEY || WEB3FORMS_KEY === 'PLACEHOLDER_HIER_KEY_EINTRAGEN') {
      const subject = encodeURIComponent(`[${form.subject}] Anfrage von ${form.name}`)
      const body = encodeURIComponent(
        `Name: ${form.name}\nE-Mail: ${form.email}\nBetreff: ${form.subject}\n\n${form.message}`
      )
      window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `[${form.subject}] Anfrage von ${form.name} — Schützenverein Niederklein`,
          from_name: form.name,
          replyto: form.email,
          message: `Name: ${form.name}\nE-Mail: ${form.email}\nBetreff: ${form.subject}\n\n${form.message}`,
          botcheck: '',
        }),
      })

      const data = await res.json() as { success: boolean }
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', subject: CONTACT.subjectOptions[0], message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  function getBorderColor(field: string) {
    return focusedField === field ? 'var(--color-accent)' : 'rgba(255,255,255,0.12)'
  }

  return (
    <section
      id="kontakt"
      style={{ background: 'var(--color-dark)', padding: '96px 2rem' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionLabel text="Kontakt" dark />
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
          Schreib uns
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--color-text-light-dim)',
            marginBottom: '3.5rem',
            maxWidth: '540px',
            lineHeight: 1.65,
          }}
        >
          Fragen zur Mitgliedschaft, zu Öffnungszeiten oder zu Veranstaltungen? Wir freuen uns über jede Nachricht.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* ── Kontaktformular ── */}
          <form onSubmit={handleSubmit} noValidate>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              {status === 'success' && (
                <div
                  role="alert"
                  style={{
                    background: 'rgba(21,128,61,0.15)',
                    border: '1px solid rgba(134,239,172,0.3)',
                    borderRadius: '6px',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                  }}
                >
                  <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>✓</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: '#86efac', marginBottom: '0.25rem' }}>
                      Nachricht gesendet!
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(134,239,172,0.75)' }}>
                      Wir melden uns so schnell wie möglich bei dir.
                    </div>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div
                  role="alert"
                  style={{
                    background: 'rgba(185,28,28,0.15)',
                    border: '1px solid rgba(252,165,165,0.3)',
                    borderRadius: '6px',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                  }}
                >
                  <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>✕</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: '#fca5a5', marginBottom: '0.25rem' }}>
                      Fehler beim Senden
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(252,165,165,0.75)' }}>
                      Bitte versuche es erneut oder kontaktiere uns direkt:{' '}
                      <a href={`mailto:${CONTACT.email}`} style={{ color: '#fca5a5' }}>{CONTACT.email}</a>
                    </div>
                  </div>
                </div>
              )}

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                  gap: '1rem',
                }}
              >
                <div>
                  <label htmlFor="name" style={labelStyle}>Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Max Mustermann"
                    disabled={status === 'sending'}
                    style={{ ...inputStyle, borderColor: getBorderColor('name') }}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>E-Mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="max@beispiel.de"
                    disabled={status === 'sending'}
                    style={{ ...inputStyle, borderColor: getBorderColor('email') }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" style={labelStyle}>Betreff</label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  disabled={status === 'sending'}
                  style={{
                    ...inputStyle,
                    borderColor: getBorderColor('subject'),
                    cursor: 'pointer',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    paddingRight: '2.5rem',
                  }}
                >
                  {CONTACT.subjectOptions.map(opt => (
                    <option key={opt} value={opt} style={{ background: 'var(--color-dark-surface)' }}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" style={labelStyle}>Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Deine Nachricht an uns..."
                  disabled={status === 'sending'}
                  style={{
                    ...inputStyle,
                    borderColor: getBorderColor('message'),
                    resize: 'vertical',
                    minHeight: '130px',
                  }}
                />
              </div>

              <SportButton
                type="submit"
                variant="primary"
                fullWidth
                disabled={status === 'sending' || status === 'success'}
              >
                {status === 'sending' ? 'Wird gesendet …' : 'Nachricht senden →'}
              </SportButton>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  color: 'rgba(255,255,255,0.3)',
                  textAlign: 'center',
                  lineHeight: 1.5,
                }}
              >
                Deine Nachricht geht direkt an{' '}
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>{CONTACT.email}</span>
              </p>
            </div>
          </form>

          {/* ── Kontaktinfos ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <ContactInfo icon={<EmailIcon />}    label="E-Mail"   value={CONTACT.email}    href={`mailto:${CONTACT.email}`} />
            <ContactInfo icon={<PhoneIcon />}    label="Telefon"  value={CONTACT.phone}    href={`tel:${CONTACT.phone}`} />
            <ContactInfo icon={<LocationIcon />} label="Adresse"  value={`${SITE.address.street}, ${SITE.address.city}`} href={SITE.address.maps} external />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Hilfskomponenten ─────────────────────────────────────────────────────────

interface ContactInfoProps {
  icon: React.ReactNode
  label: string
  value: string
  href: string
  external?: boolean
}

function ContactInfo({ icon, label, value, href, external }: ContactInfoProps) {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <div
        style={{
          width: '44px', height: '44px', borderRadius: '8px',
          background: 'var(--color-primary-ghost)',
          border: '1px solid var(--color-primary-dim)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--color-primary-light)', flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          {label}
        </div>
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--color-text-light-dim)', textDecoration: 'none', transition: 'color 150ms ease' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-white)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text-light-dim)' }}
        >
          {value}
        </a>
      </div>
    </div>
  )
}

function EmailIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
}
function PhoneIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
}
function LocationIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
}
