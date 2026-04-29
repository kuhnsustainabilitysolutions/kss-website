import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import ScrollProgress from '@/components/ScrollProgress'
import CaseRail from '@/components/CaseRail'
import { cases } from '@/content/cases'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return cases.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = cases.find(c => c.slug === params.slug)
  if (!c) return {}
  return {
    title: c.name,
    description: c.teaser,
  }
}

export default function CaseDetailPage({ params }: Props) {
  const c = cases.find(c => c.slug === params.slug)
  if (!c) notFound()

  return (
    <>
      <ScrollProgress />

      {/* Header */}
      <section className="bg-beige" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
        <div className="container-wide">
          <Reveal>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {c.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', maxWidth: 900, marginBottom: '1.5rem' }}>
              {c.lede}
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="body-l" style={{ maxWidth: 640 }}>{c.teaser}</p>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <div style={{ position: 'relative', aspectRatio: '21/8', overflow: 'hidden', background: 'var(--bg-beige)' }}>
        <Image
          src={c.img}
          alt={c.name}
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="100vw"
        />
      </div>

      {/* Body */}
      <section className="bg-white">
        <div className="container-wide">
          <div className="grid-2" style={{ gridTemplateColumns: '280px 1fr', gap: '5rem', alignItems: 'start' }}>

            {/* Sidebar meta */}
            <Reveal>
              <div className="meta-list">
                <div className="item">
                  <div className="label">Client</div>
                  <div className="value">{c.name}</div>
                </div>
                <div className="item">
                  <div className="label">Sector</div>
                  <div className="value">{c.sector}</div>
                </div>
                <div className="item">
                  <div className="label">Engagement</div>
                  <div className="value">{c.engagement}</div>
                </div>
                <div className="item">
                  <div className="label">Year</div>
                  <div className="value">{c.year}</div>
                </div>
                <div className="item">
                  <div className="label">Geography</div>
                  <div className="value">{c.geo}</div>
                </div>
              </div>
              <div style={{ marginTop: '2.5rem' }}>
                <Link href="/contact" className="cta-ghost">Work with KSS</Link>
              </div>
            </Reveal>

            {/* Main content */}
            <div>
              {[
                { label: 'The Challenge', body: c.challenge },
                { label: 'Our Approach', body: c.solution },
                { label: 'The Impact', body: c.impact },
              ].map(({ label, body }, i) => (
                <Reveal key={label} delay={i * 100} style={{ marginBottom: '2.5rem' }}>
                  <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>{label}</div>
                  <p className="body-l">{body}</p>
                </Reveal>
              ))}

              {/* YouTube embed */}
              {c.youtubeId && (
                <Reveal delay={300}>
                  <div className="eyebrow" style={{ marginBottom: '1rem' }}>Watch the panel</div>
                  <div style={{ position: 'relative', paddingBottom: '56.25%', borderRadius: 16, overflow: 'hidden', background: '#000' }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${c.youtubeId}`}
                      title={`${c.name} — panel recording`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                    />
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related cases */}
      <section className="bg-beige">
        <div className="container-wide">
          <Reveal style={{ marginBottom: '2.5rem' }}>
            <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>Other engagements</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>More selected work.</h2>
          </Reveal>
          <Reveal delay={100}>
            <CaseRail cases={cases} exclude={c.slug} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
