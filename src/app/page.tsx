'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// Stats data
const stats = [
  { value: '5+', label: 'Years in architecture and construction' },
  { value: '3', label: 'CAD & BIM platforms' },
  { value: '1:100', label: 'Construction drawing sets' },
  { value: '2019', label: 'B.S. in Architecture' },
];

// Services data
const services = [
  {
    number: '01',
    title: 'Drafting and construction documents',
    description: 'Coordinated drawing sets in AutoCAD and Revit: floor plans, elevations, sections, and site plans that reviewers can approve and contractors can build from.',
  },
  {
    number: '02',
    title: 'Permit and civil drafting',
    description: 'Traffic control plans in AutoCAD and MicroStation, plus permit packages for DC agencies including DDOT, DOB, and DOEE, assembled, submitted, and tracked through review.',
  },
  {
    number: '03',
    title: 'Revit modeling and visualization',
    description: 'Revit models that keep plans, sections, and elevations in sync, with 3D views and renderings that help teams and clients see the design before it is built.',
  },
  {
    number: '04',
    title: 'Architectural and interior design',
    description: 'Concept through design development for residential, hospitality, and mixed-use projects, including space planning and interior layouts.',
  },
];

// Projects data (static for client component)
const projects = [
  { slug: 'horizon-tower', title: 'Horizon Tower', category: 'Plans, section, elevations, site plan', year: '2023', thumbnail: '/images/projects/horizon-tower/hero.jpeg' },
  { slug: 'westfield-residence', title: 'Westfield Residence', category: 'Floor plans, renderings', year: '2024', thumbnail: '/images/projects/westfield-residence/hero.jpg' },
  { slug: 'glass-box-cafe', title: 'Glass Box Cafe', category: 'Dimensioned floor plans, renderings', year: '2024', thumbnail: '/images/projects/glass-box-cafe/hero.jpg' },
];

// FAQ data
const faqs = [
  {
    question: 'What kinds of drawings do you produce?',
    answer: 'Construction documents and permit sets (floor plans, elevations, sections, and site plans) for residential, hospitality, and mixed-use projects, plus traffic control plans for roadway and right-of-way work.',
  },
  {
    question: 'Which software do you use?',
    answer: 'AutoCAD, Revit, and MicroStation for drafting and modeling, SketchUp for quick 3D studies, and Adobe Creative Suite for presentation boards and renderings.',
  },
  {
    question: 'Are you a licensed architect?',
    answer: 'No. I am an architectural drafter and designer with a B.S. in Architecture and Urban Planning. On projects that need sealed drawings, I work with the licensed architect or engineer of record.',
  },
  {
    question: 'Are you open to full-time roles or freelance work?',
    answer: 'Both. I am open to drafter, CAD technician, and Revit/BIM roles in the Washington, DC area or remote, and I take on freelance drafting projects.',
  },
  {
    question: 'How do I get started?',
    answer: 'Send a message through the contact form or email edenetilahun@gmail.com. Tell me about the role or project, the drawings you need, and your timeline, and I will reply with next steps.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section">
        <div className="container-site">
          <div className="two-col items-start">
            {/* Left - Headline */}
            <div>
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-balance leading-[1.1]">
                Clear, buildable drawings, from first sketch to permit set.
              </h1>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                <Link href="/contact" className="link-arrow inline-flex">
                  Get in touch
                </Link>
                <a href="/eden-tilahun-resume.pdf" className="link-arrow inline-flex" target="_blank" rel="noopener noreferrer">
                  View résumé
                </a>
              </div>
            </div>

            {/* Right - Description */}
            <div className="max-w-md">
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m Eden Tilahun, an architectural and civil CAD drafter and architectural
                designer based in Silver Spring, MD. I turn design intent into coordinated drawing
                sets in AutoCAD, Revit, and MicroStation, and because I&apos;ve supervised
                construction on site, I draw with the builder in mind.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16 lg:mt-24 relative aspect-[16/9] bg-muted overflow-hidden">
            <Image
              src="/images/eden/hero.jpeg"
              alt="Eden Tilahun, architectural drafter and designer"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section border-t border-border">
        <div className="container-site">
          <div className="flex justify-end mb-8">
            <span className="section-label">(01) — ABOUT</span>
          </div>

          <div className="two-col">
            {/* Left - Headline */}
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl text-balance">
                Drafting grounded in architecture and construction.
              </h2>
            </div>

            {/* Right - Description */}
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I bring a B.S. in Architecture and 5+ years at a general contractor and an
                engineering firm to every drawing set, from a five-bedroom house and an 80-seat
                cafe to a 15-story mixed-use tower.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Today I draft traffic control plans and prepare permit submittals for DC agencies
                at a DC-area engineering firm.
              </p>
              <Link href="/about" className="link-arrow">
                About me
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-16 lg:mt-24 pt-12 border-t border-border">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl lg:text-5xl font-serif mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section border-t border-border">
        <div className="container-site">
          <div className="flex justify-end mb-8">
            <span className="section-label">(02) — SERVICES</span>
          </div>

          <div className="two-col mb-16">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl text-balance">
                Drafting first, backed by design.
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Clear, coordinated drawings in AutoCAD, Revit, and MicroStation, supported by a
                degree and hands-on experience in architectural design.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {services.map((service) => (
              <div key={service.number} className="border-t border-border pt-8">
                <div className="text-sm text-muted-foreground mb-4">{service.number}</div>
                <h3 className="text-xl font-medium mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <Link href="/services" className="link-arrow mt-12 inline-flex">
            View all services
          </Link>
        </div>
      </section>

      {/* Work Section */}
      <section className="section border-t border-border">
        <div className="container-site">
          <div className="flex justify-end mb-8">
            <span className="section-label">(03) — WORK</span>
          </div>

          <div className="two-col mb-16">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl text-balance">
                Drawings and design built on precision.
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Three drawing sets: a 15-story mixed-use tower at 1:100, a three-story house,
                and a two-level cafe.
              </p>
            </div>
          </div>

          {/* Project List */}
          <div className="border-t border-border">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="project-row group"
              >
                {/* Year */}
                <div className="w-16 text-sm text-muted-foreground">
                  {project.year}
                </div>

                {/* Thumbnail + Title */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="relative w-12 h-12 bg-muted overflow-hidden shrink-0">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <span className="font-medium">{project.title}</span>
                </div>

                {/* Category */}
                <div className="hidden md:block text-sm text-muted-foreground">
                  {project.category}
                </div>

                {/* Arrow */}
                <div className="text-muted-foreground group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section border-t border-border">
        <div className="container-site">
          <div className="flex justify-end mb-8">
            <span className="section-label">(04) — FAQ</span>
          </div>

          <div className="two-col mb-16">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl text-balance">
                Questions I get asked most often.
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Quick answers for hiring teams and clients.
              </p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="py-5 text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
