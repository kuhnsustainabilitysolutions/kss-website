export interface Service {
  num: string
  title: string
  category: 'Strategic' | 'Technical'
  description: string
  items: string[]
}

export const services: Service[] = [
  {
    num: 'S/01',
    title: 'Regulatory Navigation',
    category: 'Strategic',
    description: 'Translating complex regulatory terrain into actionable roadmaps for climate and agriculture innovators.',
    items: [
      'Translate complex regulations into actionable roadmaps',
      'Align product development with local, state, and federal policy',
      'Map regulatory timelines to avoid approval bottlenecks',
      'Coordinate with legal and scientific partners for compliance',
    ],
  },
  {
    num: 'S/02',
    title: 'Capital Management',
    category: 'Strategic',
    description: 'Securing non-dilutive funding and building the investor materials needed to grow with confidence.',
    items: [
      'Write and submit non-dilutive grant proposals',
      'Prepare investor materials: pitch decks, 1-pagers, data rooms',
      'Build phased capital plans aligned with operational growth',
      'Connect clients with fitting funders and capital partners',
    ],
  },
  {
    num: 'S/03',
    title: 'Business Strategy',
    category: 'Strategic',
    description: 'Go-to-market plans, strategic planning sessions, and decision-support for mission-driven brands.',
    items: [
      'Develop go-to-market plans for mission-driven brands',
      'Facilitate strategic planning sessions with leadership teams',
      'Create financial and impact metrics dashboards',
      'Support long-term decision-making with market research',
    ],
  },
  {
    num: 'T/01',
    title: 'AI Integration',
    category: 'Technical',
    description: 'Identifying and building AI opportunities that improve efficiency without compromising sustainability values.',
    items: [
      'Identify opportunities for AI to improve efficiency and data flow',
      'Build lightweight automation tools and predictive frameworks',
      'Advise on ethical AI adoption aligned with sustainability values',
      'Connect founders with technical partners for custom solutions',
    ],
  },
  {
    num: 'T/02',
    title: 'Product Development',
    category: 'Technical',
    description: 'From validation to pilot: helping sustainable products reach market on their own terms.',
    items: [
      'Conduct user and stakeholder research to validate needs',
      'Design and test MVPs that integrate sustainability goals',
      'Advise on material sourcing and lifecycle impact',
      'Position new products for grants, partnerships, and pilots',
    ],
  },
  {
    num: 'T/03',
    title: 'Carbon Accounting',
    category: 'Technical',
    description: 'Rigorous, defensible emissions measurement aligned with ESG frameworks and investor expectations.',
    items: [
      'Quantify emissions using internationally accepted methodologies',
      'Align reporting with ESG frameworks (GHG Protocol, SFDR)',
      'Support clients in crafting defensible sustainability narratives',
      'Integrate impact reporting into product or grant materials',
    ],
  },
]
