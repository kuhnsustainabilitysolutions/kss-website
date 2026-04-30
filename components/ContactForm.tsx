'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div style={{ padding: '3rem 0', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 300, marginBottom: '0.75rem', letterSpacing: '-0.015em' }}>
          Thank you.
        </h3>
        <p className="body-m">We will be in touch within two business days.</p>
      </div>
    )
  }

  return (
    <form
      className="form"
      onSubmit={e => {
        e.preventDefault()
        setSubmitted(true)
        // Wire to Resend, Formspree, or a /api/contact route as needed
      }}
    >
      <label>
        Name
        <input type="text" name="name" placeholder="Jane Doe" required />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="jane@company.com" required />
      </label>
      <label>
        Organization
        <input type="text" name="org" placeholder="Company or institution" />
      </label>
      <label>
        Engagement type
        <select name="type" defaultValue="">
          <option value="" disabled>Select one</option>
          <option>Regulatory navigation</option>
          <option>Capital and grant strategy</option>
          <option>Business strategy</option>
          <option>Technical: AI, product, carbon</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label>
        What&apos;s the situation?
        <textarea
          name="message"
          placeholder="Where you are, where you want to be, and what is getting in the way."
          required
        />
      </label>
      <div style={{ paddingTop: '0.5rem' }}>
        <button type="submit" className="cta" style={{ alignSelf: 'flex-start' }}>
          Send
        </button>
      </div>
    </form>
  )
}
