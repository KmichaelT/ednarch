import Image from 'next/image';
import Link from 'next/link';
import { placeholders } from '@/lib/types';

export const metadata = {
  title: 'About | EdenArch',
  description: 'Our practice is rooted in the belief that architecture should serve both people and place.',
};

const services = [
  {
    number: '01',
    title: 'Architectural design',
    description: 'Our architectural design practice shapes spaces that balance form, function, and context. Every project begins with a deep understanding of its site, its users, and its intended purpose. From private residences to cultural institutions and commercial developments, we craft concepts that respect their surroundings while standing out with clarity and purpose.',
    cta: 'Inquire now →',
  },
  {
    number: '02',
    title: 'Interior architecture',
    description: 'We believe the interior of a space should feel as intentional as its exterior. Material choices, spatial flow, and tailored details come together to produce interiors that are cohesive, refined, and practical. Whether designing workplaces, cultural venues, or private homes, we aim to deliver spaces that feel human-centered while remaining architecturally rigorous.',
    cta: 'Inquire now →',
  },
  {
    number: '03',
    title: 'Urban and landscape design',
    description: 'Cities and outdoor environments shape how people live and connect, and our urban and landscape design practice addresses these spaces with both care and ambition. We focus on master planning, parks, and public spaces that integrate seamlessly into their context, supporting community and long-term sustainability.',
    cta: 'Inquire now →',
  },
  {
    number: '04',
    title: 'Project delivery and consultancy',
    description: 'Successful architecture requires more than a great idea — it demands precise execution. Our project delivery and consultancy services guide clients from early planning through construction and beyond. With technical documentation, contractor coordination, and advisory support, we ensure every project is delivered to the highest standards.',
    cta: 'Inquire now →',
  },
];

const testimonials = [
  {
    quote: 'EdenArch guided our project with remarkable clarity and vision. Their team understood not only the architecture but also the business goals behind it, making them an invaluable partner.',
    author: 'Sarah Mitchell',
    role: 'Director, Horizon Development Group',
  },
  {
    quote: 'Working with EdenArch was seamless from start to finish. Their approach is refined, precise, and deeply thoughtful — our institution now has a space that truly embodies its mission.',
    author: 'David Romero',
    role: 'Founder, Romero & Associates Cultural Projects',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="section">
        <div className="container-site">
          <div className="two-col">
            <div>
              <h1 className="font-serif text-4xl lg:text-5xl">About</h1>
              <p className="text-muted-foreground leading-relaxed mt-6 max-w-md">
                Our practice is rooted in the belief that architecture should serve both people and place. 
                With every project, we bring together research, craft, and collaboration to design spaces 
                that are precise, functional, and enduring.
              </p>
            </div>
            <div className="flex justify-end items-start">
              <span className="section-label">(FW 01) — ABOUT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-20 lg:pb-32">
        <div className="container-site">
          <div className="relative aspect-[16/9] bg-muted overflow-hidden">
            <Image
              src={placeholders.hero('Studio Image')}
              alt="EdenArch studio"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-20 lg:pb-32">
        <div className="container-site">
          {services.map((service, index) => (
            <div 
              key={service.number}
              className={`two-col py-12 lg:py-16 ${index > 0 ? 'border-t border-border' : ''}`}
            >
              {/* Number + Title */}
              <div className="flex gap-12">
                <span className="text-sm text-muted-foreground">({service.number})</span>
                <h2 className="text-xl font-medium">{service.title}</h2>
              </div>
              
              {/* Description */}
              <div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link href="/contact" className="link-arrow">
                  {service.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section border-t border-border">
        <div className="container-site">
          <div className="flex justify-end mb-8">
            <span className="section-label">(FW 02) — CLIENTS</span>
          </div>
          
          <div className="mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl text-balance max-w-2xl">
              We build trust through relationships as lasting as our spaces.
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-6 max-w-2xl">
              Our clients range from developers to cultural institutions and private homeowners. 
              Each partnership is grounded in clear communication, professional rigor, and a shared 
              belief in design that stands the test of time.
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {testimonials.map((testimonial, index) => (
              <blockquote key={index} className="border-t border-border pt-8">
                <p className="text-lg leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer>
                  <cite className="not-italic font-medium">{testimonial.author}</cite>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
