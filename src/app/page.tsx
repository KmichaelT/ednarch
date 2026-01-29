'use client';

import Image from 'next/image';
import Link from 'next/link';
import { placeholders } from '@/lib/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// Stats data
const stats = [
  { value: '4', label: 'Completed projects' },
  { value: '3', label: 'Building types' },
  { value: '100%', label: 'Client focused' },
  { value: '2024', label: 'Founded' },
];

// Services data
const services = [
  {
    number: '01',
    title: 'Architectural design',
    description: 'Full design services from concept through construction documentation. I develop clear, coordinated drawings that contractors can build from — minimizing surprises and change orders.',
  },
  {
    number: '02',
    title: 'Interior architecture',
    description: 'Integrated interior design that extends the architectural concept into finishes, fixtures, and furniture layouts. Not decoration; spatial design.',
  },
  {
    number: '03',
    title: 'Urban and landscape design',
    description: 'Site planning, landscape integration, and urban-scale studies. I consider the building\'s relationship to its context from day one — not as an afterthought.',
  },
  {
    number: '04',
    title: 'Project delivery and consultancy',
    description: 'Design review, permit coordination, and construction oversight. For clients who have a design but need help getting it built.',
  },
];

// Projects data (static for client component)
const projects = [
  { slug: 'glass-box-cafe', title: 'Glass Box Cafe', category: 'Hospitality', year: '2024', thumbnail: 'https://placehold.co/800x600/f5f5f5/a3a3a3?text=Cafe+Thumb' },
  { slug: 'westfield-residence', title: 'Westfield Residence', category: 'Residential Architecture', year: '2024', thumbnail: 'https://placehold.co/800x600/f5f5f5/a3a3a3?text=Residence+Thumb' },
  { slug: 'horizon-tower', title: 'Horizon Tower', category: 'Mixed-Use Architecture', year: '2023', thumbnail: 'https://placehold.co/800x600/f5f5f5/a3a3a3?text=Tower+Thumb' },
  { slug: 'genet-terrace-wellness-center', title: 'Genet Terrace Wellness Center', category: 'Wellness Architecture', year: '2023', thumbnail: 'https://placehold.co/800x600/f5f5f5/a3a3a3?text=Wellness+Thumb' },
];

// FAQ data
const faqs = [
  {
    question: 'What types of projects do you take on?',
    answer: 'I work across a range of scales and typologies — from private residences and interiors to commercial buildings and mixed-use developments. Each project receives the same level of attention to detail and commitment to quality, regardless of size.',
  },
  {
    question: 'How early should I involve you in my project?',
    answer: 'The earlier, the better. Involving an architect from the start helps avoid costly mistakes and ensures the design aligns with your goals, budget, and site conditions from day one. Even if you\'re just exploring possibilities, a conversation can help clarify your options.',
  },
  {
    question: 'Do you only work with large-scale clients?',
    answer: 'Not at all. I work with individuals, families, and businesses of all sizes. Whether you\'re building your first home or developing a commercial property, I bring the same professional approach to every project.',
  },
  {
    question: 'What does your process look like?',
    answer: 'My process typically moves through four phases: initial consultation and concept development, design development with detailed drawings, construction documentation, and construction administration. I keep clients informed at every stage with clear communication and regular check-ins.',
  },
  {
    question: 'Do you manage construction as well?',
    answer: 'I offer construction administration services, which means I can oversee the construction process to ensure the built work matches the design intent. While I don\'t act as a general contractor, I work closely with builders to address questions and maintain quality.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply reach out through the contact form or send me an email. I\'ll schedule an initial consultation to discuss your project, understand your goals, and explain how I can help bring your vision to life.',
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
                I design spaces that balance function and timeless beauty.
              </h1>
              <Link href="/contact" className="link-arrow mt-8 inline-flex">
                Get started
              </Link>
            </div>
            
            {/* Right - Description */}
            <div className="max-w-md">
              <p className="text-muted-foreground leading-relaxed">
                My architecture is guided by precision and restraint. I blend modern 
                aesthetics with human-centered design, creating spaces that endure. From residential 
                and commercial projects to cultural landmarks, I focus on designing environments that 
                integrate seamlessly with their context and stand the test of time.
              </p>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="mt-16 lg:mt-24 relative aspect-[16/9] bg-muted overflow-hidden">
            <Image
              src={placeholders.hero('Hero Image')}
              alt="Architecture hero"
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
                Architecture that stands for clarity and purpose.
              </h2>
            </div>
            
            {/* Right - Description */}
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                EdenArch is my architectural practice focused on delivering thoughtful, buildable design 
                for clients who value clarity over complexity. I work across scales — from private 
                residences to mixed-use towers — bringing the same attention to spatial quality, 
                material honesty, and client outcomes to every project.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Based in Addis Ababa, I collaborate with developers, entrepreneurs, and homeowners 
                who want architecture that works: on budget, on time, and exactly as imagined.
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
                Discover the full range of services I offer.
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed">
                From early concept through construction documentation, I ensure that every project 
                feels cohesive, intentional, and built to last.
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
                Architecture built on precision and purpose.
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed">
                My portfolio spans hospitality, residential, commercial, and wellness — each 
                project responding to its own brief, site, and story.
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

      {/* Testimonials Section */}
      <section className="section border-t border-border">
        <div className="container-site">
          <div className="flex justify-end mb-8">
            <span className="section-label">(04) — CLIENTS</span>
          </div>
          
          <div className="mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl text-balance max-w-2xl">
              I build trust through relationships as lasting as my spaces.
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-6 max-w-2xl">
              My clients range from developers to entrepreneurs and private homeowners. Each 
              partnership is grounded in clear communication, professional rigor, and a shared 
              belief in design that stands the test of time.
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <blockquote className="border-t border-border pt-8">
              <p className="text-lg leading-relaxed mb-6">
                &ldquo;Eden guided our project with remarkable clarity and vision. He 
                understood not only the architecture but also the business goals behind it, making 
                him an invaluable partner.&rdquo;
              </p>
              <footer>
                <cite className="not-italic font-medium">Sarah Mitchell</cite>
                <div className="text-sm text-muted-foreground">Director, Horizon Development Group</div>
              </footer>
            </blockquote>
            
            <blockquote className="border-t border-border pt-8">
              <p className="text-lg leading-relaxed mb-6">
                &ldquo;Working with Eden was seamless from start to finish. His approach is 
                refined, precise, and deeply thoughtful — our institution now has a space that truly 
                embodies its mission.&rdquo;
              </p>
              <footer>
                <cite className="not-italic font-medium">David Romero</cite>
                <div className="text-sm text-muted-foreground">Founder, Romero & Associates Cultural Projects</div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section border-t border-border">
        <div className="container-site">
          <div className="flex justify-end mb-8">
            <span className="section-label">(05) — FAQ</span>
          </div>
          
          <div className="two-col mb-16">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl text-balance">
                Questions I get asked most often.
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Starting an architecture project is a big decision. Here are answers to the most 
                common questions.
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
