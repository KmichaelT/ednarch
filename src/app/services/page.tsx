import Link from 'next/link';

export const metadata = {
  title: 'My Services | EdenArch',
  description: 'Drafting, permit drawings, Revit modeling, and architectural design in AutoCAD, Revit, and MicroStation.',
};

const services = [
  {
    number: '01',
    title: 'Drafting and construction documents',
    description: 'Coordinated drawing sets in AutoCAD and Revit that reviewers can approve and contractors can build from. Every sheet is checked for clear dimensions, consistent notes, and drawings that agree with each other.',
    features: [
      'Floor plans, elevations, and sections',
      'Site plans and details',
      'Permit-ready drawing sets',
      'Drawing revisions and updates',
    ],
  },
  {
    number: '02',
    title: 'Permit and civil drafting',
    description: 'Traffic control plans in AutoCAD and MicroStation, and permit packages for DC agencies, assembled, submitted, and tracked through review so projects keep moving.',
    features: [
      'Traffic control plans (TCPs)',
      'Permit packages for DDOT, DOB, and DOEE',
      'Agency submittal tracking',
      'Zoning and land-use compliance research',
    ],
  },
  {
    number: '03',
    title: 'Revit modeling and visualization',
    description: 'Revit models that keep plans, sections, and elevations in sync, plus 3D views and renderings that help teams and clients see the design before it is built.',
    features: [
      'Revit building models',
      'Coordinated plans, sections, and elevations from one model',
      '3D views and renderings',
      'SketchUp massing studies',
    ],
  },
  {
    number: '04',
    title: 'Architectural and interior design',
    description: 'Concept through design development for residential, hospitality, and mixed-use projects, with interiors planned as carefully as the building around them.',
    features: [
      'Concept and schematic design',
      'Design development',
      'Space planning and interior layouts',
      'Material and finish selection',
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
              Clear, coordinated drawings in AutoCAD, Revit, and MicroStation, supported by a
              degree and hands-on experience in architectural design.
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
