import Link from 'next/link'
import Image from 'next/image'
import { CaseStudy } from '@/content/cases'

interface CaseRailProps {
  cases: CaseStudy[]
  exclude?: string
}

export default function CaseRail({ cases, exclude }: CaseRailProps) {
  const filtered = exclude ? cases.filter(c => c.slug !== exclude) : cases
  return (
    <div className="case-rail-wrap">
      <div className="case-rail">
        {filtered.map(c => (
          <Link key={c.slug} href={`/cases/${c.slug}`} className="case-card">
            <div className="case-img">
              <Image src={c.img} alt={c.name} fill style={{ objectFit: 'cover' }} sizes="420px" />
            </div>
            <div className="body">
              <div className="tags">
                {c.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <h3>{c.name}</h3>
              <p className="teaser">{c.teaser}</p>
              <span className="read-more">Read case study →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
