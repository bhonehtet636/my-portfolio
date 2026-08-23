import { useState } from 'react'
import type { FormEvent } from 'react'
import './Contact.css'

const EMAIL = 'imbhonehtetung@gmail.com'

type Status = 'idle' | 'sending' | 'success' | 'error'

function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          _subject: 'New message from your portfolio website',
        }),
      })
      if (!res.ok) throw new Error('send failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-intro">
          မေးခွန်းမေးလိုပါက / အလုပ်ချုပ်ဆိုလိုပါက ဒီ form ကနေ ပို့နိုင်ပါသည်။
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <textarea name="message" rows={6} placeholder="Your Message" required />
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className="form-note success">
              ✅ Message sent! Thank you — I will reply soon.
            </p>
          )}
          {status === 'error' && (
            <p className="form-note error">
              ❌ Failed to send. Please try again or email me directly at {EMAIL}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
