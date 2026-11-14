import { useEffect, useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Contact.css'

// Messages are delivered by Web3Forms (https://web3forms.com) straight to your inbox.
// The access key is public by design; set it in .env as VITE_WEB3FORMS_KEY.
const WEB3FORMS_URL = 'https://api.web3forms.com/submit'
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY
const TIMEOUT_MS = 15000
const FALLBACK_EMAIL = 'adityabagade04@gmail.com'

const details = [
  { icon: <FiMail />, label: 'email', value: 'adityabagade04@gmail.com', href: 'mailto:adityabagade04@gmail.com' },
  { icon: <FiPhone />, label: 'phone', value: '+91 9325253293', href: 'tel:+919325253293' },
  { icon: <FiMapPin />, label: 'location', value: 'Pune, India · open to remote' },
]

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    try {
      if (localStorage.getItem('formSubmitted') === 'true') setIsSubmitted(true)
    } catch {
      // storage unavailable; ignore
    }
  }, [])

  const onSubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))

    // Honeypot: real people never fill this hidden field.
    if (data.botcheck) return

    if (!WEB3FORMS_KEY) {
      console.error('VITE_WEB3FORMS_KEY is not set')
      toast.error(`The form isn't set up yet. Email me at ${FALLBACK_EMAIL}.`)
      return
    }

    setIsSubmitting(true)
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio: ${data.subject || `message from ${data.name}`}`,
          from_name: 'Portfolio contact form',
          name: data.name,
          email: data.email,
          replyto: data.email,
          topic: data.subject || '',
          message: data.message,
        }),
        signal: controller.signal,
      })
      const result = await res.json().catch(() => ({}))
      if (!res.ok || !result.success) throw new Error(result.message || `HTTP ${res.status}`)

      setIsSubmitted(true)
      try { localStorage.setItem('formSubmitted', 'true') } catch { /* ignore */ }
      form.reset()
      toast.success("Message sent. I'll get back to you soon.")
    } catch (err) {
      console.error('Submission failed:', err)
      const reason = err.name === 'AbortError' ? 'The server took too long.' : "Couldn't send your message."
      toast.error(`${reason} Email me at ${FALLBACK_EMAIL}.`)
    } finally {
      clearTimeout(timer)
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="section-head">
        <p className="section-label">04. contact</p>
        <h2>Let’s work together</h2>
        <p>Open to full-time roles and freelance projects. Tell me what you’re building and I’ll reply within a day.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-details">
          {details.map((d) => {
            const inner = (
              <>
                <span className="contact-icon">{d.icon}</span>
                <span>
                  <span className="contact-label mono">{d.label}</span>
                  <span className="contact-value">{d.value}</span>
                </span>
              </>
            )
            return d.href ? (
              <a key={d.label} href={d.href} className="card contact-item">{inner}</a>
            ) : (
              <div key={d.label} className="card contact-item">{inner}</div>
            )
          })}
        </div>

        <form onSubmit={onSubmit} className="card contact-form">
          <input type="checkbox" name="botcheck" className="contact-honeypot" tabIndex="-1" autoComplete="off" aria-hidden="true" />
          <div className="form-row">
            <label>
              <span className="mono">name</span>
              <input name="name" type="text" placeholder="Your full name" required disabled={isSubmitted} />
            </label>
            <label>
              <span className="mono">email</span>
              <input name="email" type="email" placeholder="you@company.com" required disabled={isSubmitted} />
            </label>
          </div>
          <label>
            <span className="mono">subject</span>
            <input name="subject" type="text" placeholder="Backend role, freelance project…" disabled={isSubmitted} />
          </label>
          <label>
            <span className="mono">message</span>
            <textarea name="message" rows="5" placeholder="Tell me about the role or project" required disabled={isSubmitted}></textarea>
          </label>
          <button type="submit" className="btn btn-primary contact-submit" disabled={isSubmitting || isSubmitted}>
            {isSubmitting ? 'sending…' : isSubmitted ? 'message sent ✓' : <>send message <FiSend /></>}
          </button>
        </form>
      </div>

      <ToastContainer position="bottom-right" autoClose={5000} theme="dark" />
    </section>
  )
}

export default Contact
