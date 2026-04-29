export interface CaseStudy {
  slug: string
  name: string
  img: string
  tags: string[]
  teaser: string
  sector: string
  engagement: string
  year: string
  geo: string
  lede: string
  challenge: string
  solution: string
  impact: string
  youtubeId?: string
}

export const cases: CaseStudy[] = [
  {
    slug: 'pacific-kelp',
    name: 'Pacific Kelp Co.',
    img: '/images/cases/pacific-kelp.jpg',
    tags: ['Regulatory', 'Capital'],
    teaser: 'Secured a $500K federal grant and built the institutional coalition behind a U.S. seaweed biostimulant.',
    sector: 'Aquaculture',
    engagement: 'Regulatory and capital strategy',
    year: '2024 to present',
    geo: 'United States',
    lede: 'Bringing a novel kelp-based biostimulant to market in a regulatory landscape with no clear precedent.',
    challenge: 'Pacific Kelp Co. had a working biostimulant and a science team to back it, but no commercialization roadmap. The U.S. regulatory environment for seaweed-derived agricultural inputs is fragmented across federal and state agencies, and no peer company had charted the path before them.',
    solution: 'KSS led regulatory navigation and go-to-market strategy, securing a $500K U.S. federal grant in the process. We built and operationalized a coalition of universities, state agencies, and private firms to support regulatory compliance, product validation, and long-term scaling. Each partner had defined deliverables, not just letters of support.',
    impact: 'Pacific Kelp Co. is now positioned to be a U.S. leader in the emerging seaweed biostimulant market, with regulatory momentum, funding, and institutional alignment behind it.',
  },
  {
    slug: 'exotica-fruit',
    name: 'Exotica Fruit Farms',
    img: '/images/cases/exotica.jpg',
    tags: ['Strategy', 'Partnerships'],
    teaser: 'Shaped a regenerative hub combining agriculture, ecotourism, and biodiversity protection in Belize.',
    sector: 'Regenerative agriculture and ecotourism',
    engagement: 'Business strategy and coalition design',
    year: '2023 to present',
    geo: 'Belize',
    lede: 'Designing a regenerative farming hub that integrates agriculture, ecotourism, and biodiversity, without an existing ecosystem of support.',
    challenge: 'Exotica wanted to build something that did not yet exist in the region: a regenerative farming and ecotourism hub anchored in biodiversity protection. There was no playbook, no peer set, and no obvious partners to help them de-risk the model.',
    solution: 'KSS advised on greenhouse planning, ecotourism design, and cross-sector partnerships, connecting Exotica to coastal seaweed cooperatives and U.S. universities. We shaped a development model rooted in biodiversity protection and local collaboration, then helped translate it into a credible operating plan.',
    impact: "The project has grown into a pilot site for inland-coastal partnership, with Exotica positioned as a regenerative, profitable anchor in Belize's emerging climate-smart food and tourism economy.",
  },
  {
    slug: 'bluesonde',
    name: 'Bluesonde Technologies',
    img: '/images/cases/bluesonde.jpg',
    tags: ['Capital', 'Grant Strategy'],
    teaser: 'Four-week sprint: finalized grant submissions, formalized MoUs, and a roadmap to federal funding.',
    sector: 'Marine technology',
    engagement: 'Four-week grant strategy sprint',
    year: '2024',
    geo: 'Maine, USA',
    lede: 'A short, dense engagement to unlock capital and partnerships for marine sensor deployment across Maine.',
    challenge: 'Bluesonde had hardware and a deployment plan, but limited internal grant capacity and no formalized partner coalition. Funding deadlines were close, and federal opportunities required a level of coordination Bluesonde did not yet have.',
    solution: 'KSS developed a near-term grant strategy, coordinated MoUs with local partners, and prepared submission-ready materials for multiple opportunities. We outlined federal funding potential and delivered a roadmap for long-term positioning, all within a four-week window.',
    impact: 'In four weeks, Bluesonde received finalized grant submissions, formalized partner commitments, and a strategy to engage regional and federal funders for scaled deployment.',
  },
  {
    slug: 'expo-2025-osaka',
    name: 'Expo 2025 Osaka',
    img: '/images/cases/expo2025-stage.jpg',
    tags: ['Speaking', 'Food Systems', 'Climate'],
    teaser: 'Invited to represent U.S. regenerative food systems and blue economy innovation on a global stage in Japan.',
    sector: 'International policy and food systems',
    engagement: 'Panel speaker',
    year: '2025',
    geo: 'Osaka, Japan',
    lede: 'Representing U.S. regenerative food systems and blue economy innovation at one of the world\'s largest international exhibitions.',
    challenge: 'Expo 2025 Osaka convened heads of state, researchers, and industry leaders around the theme of designing future society. The opportunity was to make a credible case, on a global stage, that regenerative agriculture and aquaculture are not niche concerns but central to food security and long-term economic resilience.',
    solution: 'Bryce presented KSS\'s work at the intersection of policy, capital, and technical strategy, drawing on active engagements across aquaculture, regenerative agriculture, and marine technology. The panel addressed how early-stage innovators are translating climate ambition into operational reality, and what institutional structures are needed to scale them.',
    impact: 'KSS was positioned before an international audience of policymakers, funders, and food system leaders, establishing credibility at the intersection of U.S. innovation and global sustainability strategy, and opening new conversations with international partners.',
    youtubeId: 't23sp6cibLo',
  },
]
