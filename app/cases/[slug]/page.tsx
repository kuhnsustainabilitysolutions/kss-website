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
      <section className="bg-beige" style={{ paddingTop: '4rem', paddingBottom: '2.5rem' }}>
        <div className="container-wide">
          <Reveal>
            <Link href="/cases" className="cta-ghost" style={{ borderBottom: 'none', color: 'var(--muted-2)', fontSize: '0.875rem', marginBottom: '2rem', display: 'inline-flex' }}>
              ← Case studies
            </Link>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {c.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', maxWidth: 920, marginBottom: '1.5rem' }}>
              {c.name}
            </h1>
            <p className="body-l" style={{ maxWidth: 720 }}>{c.lede}</p>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-beige" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="container-wide">
          <Reveal>
            <div style={{ position: 'relative', aspectRatio: '16/7', overflow: 'hidden', borderRadius: 16, background: 'var(--ink)' }}>
              <Image
                src={c.img}
                alt={c.name}
                fill
                priority
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white" style={{ paddingTop: '4rem' }}>
        <div className="container-wide">
          <div className="grid-2-3" style={{ gap: '5rem' }}>

            {/* Sidebar meta — sticky */}
            <Reveal>
              <div className="meta-list" style={{ position: 'sticky', top: '6rem' }}>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <Reveal>
                <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>The Challenge</div>
                <p className="body-l">{c.challenge}</p>
              </Reveal>
              <Reveal delay={80}>
                <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>Our Approach</div>
                <p className="body-l">{c.solution}</p>
              </Reveal>
              <Reveal delay={160}>
                <div className="eyebrow" style={{ marginBottom: '0.75rem', color: 'var(--impact)' }}>The Impact</div>
                <p className="body-l" style={{ fontSize: '1.25rem' }}>{c.impact}</p>
              </Reveal>

              {/* YouTube embed */}
              {c.youtubeId && (
                <Reveal delay={240}>
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
            <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>Continue reading</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>Other engagements</h2>
          </Reveal>
          <Reveal delay={100}>
            <CaseRail cases={cases} exclude={c.slug} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
