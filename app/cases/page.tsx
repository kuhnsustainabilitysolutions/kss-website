import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import CaseRail from '@/components/CaseRail'
import { cases } from '@/content/cases'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Selected engagements across aquaculture, regenerative agriculture, marine technology, and international food systems.',
}

export default function CasesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-beige" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className="container-wide">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Case studies</div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', maxWidth: 920, marginBottom: '1.5rem' }}>
              Work that has moved teams from vision to traction.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="body-l" style={{ maxWidth: 640 }}>
              A selection of recent engagements across aquaculture, agriculture, and marine technology.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Rail */}
      <section className="bg-white">
        <div className="container-wide">
          <Reveal>
            <CaseRail cases={cases} />
          </Reveal>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-beige">
        <div className="container-text" style={{ textAlign: 'center' }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Work with us</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', marginBottom: '1.5rem' }}>
              Ready to be the next case study?
            </h2>
            <p className="body-l" style={{ marginBottom: '2.5rem', maxWidth: 520, margin: '0 auto 2.5rem' }}>
              We take on a small number of engagements at a time. If the work sounds right for you,
              let us talk.
            </p>
            <Link href="/contact" className="cta">Start a conversation</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
