'use client'

export default function ContactForm() {
  return (
    <form
      className="form"
      onSubmit={e => {
        e.preventDefault()
        // Wire to Resend, Formspree, or a /api/contact route as needed
      }}
    >
      <label>
        Name
        <input type="text" name="name" placeholder="Your name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="you@company.com" required />
      </label>
      <label>
        Organization
        <input type="text" name="org" placeholder="Company or organization" />
      </label>
      <label>
        What are you working on?
        <textarea
          name="message"
          placeholder="Brief description of your project, goals, and any specific challenges you are facing."
          required
        />
      </label>
      <div style={{ paddingTop: '0.5rem' }}>
        <button type="submit" className="cta" style={{ width: '100%', justifyContent: 'center' }}>
          Send message
        </button>
      </div>
    </form>
  )
}
