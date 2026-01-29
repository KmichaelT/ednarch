import Link from 'next/link';

export const metadata = {
  title: 'My Services | EdenArch',
  description: 'From early concept through construction documentation, I ensure that every project feels cohesive, intentional, and built to last.',
};

const services = [
  {
    number: '01',
    title: 'Architectural design',
    description: 'Full design services from concept through construction documentation. I develop clear, coordinated drawings that contractors can build from — minimizing surprises and change orders. Every project begins with a deep understanding of its site, its users, and its intended purpose.',
    features: [
      'Concept development and schematic design',
      'Design development and documentation',
      'Construction drawings and specifications',
      'Permit coordination',
    ],
  },
  {
    number: '02',
    title: 'Interior architecture',
    description: 'Integrated interior design that extends the architectural concept into finishes, fixtures, and furniture layouts. I believe the interior of a space should feel as intentional as its exterior. Not decoration; spatial design.',
    features: [
      'Space planning and layout',
      'Material and finish selection',
      'Custom millwork and furniture design',
      'Lighting design integration',
    ],
  },
  {
    number: '03',
    title: 'Urban and landscape design',
    description: 'Site planning, landscape integration, and urban-scale studies. I consider the building\'s relationship to its context from day one — not as an afterthought. My work supports community and long-term sustainability.',
    features: [
      'Master planning',
      'Site analysis and planning',
      'Landscape architecture coordination',
      'Public space design',
    ],
  },
  {
    number: '04',
    title: 'Project delivery and consultancy',
    description: 'Design review, permit coordination, and construction oversight. For clients who have a design but need help getting it built. I ensure every project is delivered to the highest standards.',
    features: [
      'Design review and advisory',
      'Permit and regulatory coordination',
      'Contractor coordination',
      'Construction administration',
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container-site">
        {/* Header */}
        <div className="two-col mb-16 lg:mb-24">
          <div>
            <h1 className="font-serif text-4xl lg:text-5xl">My Services</h1>
            <p className="text-muted-foreground leading-relaxed mt-6 max-w-md">
              From early concept through construction documentation, I ensure that every project 
              feels cohesive, intentional, and built to last.
            </p>
          </div>
          <div className="flex justify-end items-start">
            <span className="section-label">(01) — SERVICES</span>
          </div>
        </div>

        {/* Services List */}
        {services.map((service, index) => (
          <div 
            key={service.number}
            className={`two-col py-12 lg:py-16 ${index >= 0 ? 'border-t border-border' : ''}`}
          >
            {/* Number + Title */}
            <div>
              <span className="text-sm text-muted-foreground block mb-4">({service.number})</span>
              <h2 className="text-2xl font-medium mb-4">{service.title}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
            
            {/* Features */}
            <div>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="link-arrow">
                Inquire now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
