import Image from 'next/image';
import Link from 'next/link';
import { getAllProjects } from '@/lib/mdx';
import { placeholders } from '@/lib/types';

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
    description: 'Full design services from concept through construction documentation. We develop clear, coordinated drawings that contractors can build from — minimizing surprises and change orders.',
  },
  {
    number: '02',
    title: 'Interior architecture',
    description: 'Integrated interior design that extends the architectural concept into finishes, fixtures, and furniture layouts. Not decoration; spatial design.',
  },
  {
    number: '03',
    title: 'Urban and landscape design',
    description: 'Site planning, landscape integration, and urban-scale studies. We consider the building\'s relationship to its context from day one — not as an afterthought.',
  },
  {
    number: '04',
    title: 'Project delivery and consultancy',
    description: 'Design review, permit coordination, and construction oversight. For clients who have a design but need help getting it built.',
  },
];

export default function HomePage() {
  const projects = getAllProjects().slice(0, 6); // Show first 6 projects

  return (
    <>
      {/* Hero Section */}
      <section className="section">
        <div className="container-site">
          <div className="two-col items-start">
            {/* Left - Headline */}
            <div>
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-balance leading-[1.1]">
                We design spaces that balance function and timeless beauty.
              </h1>
              <Link href="/contact" className="link-arrow mt-8 inline-flex">
                Get started
              </Link>
            </div>
            
            {/* Right - Description */}
            <div className="max-w-md">
              <p className="text-muted-foreground leading-relaxed">
                At Fieldwork, architecture is guided by precision and restraint. Our work blends modern 
                aesthetics with human-centered design, creating spaces that endure. From residential 
                and commercial projects to cultural landmarks, we focus on designing environments that 
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
            <span className="section-label">(FW 01) — ABOUT</span>
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
                EdenArch is an architectural practice focused on delivering thoughtful, buildable design 
                for clients who value clarity over complexity. We work across scales — from private 
                residences to mixed-use towers — bringing the same attention to spatial quality, 
                material honesty, and client outcomes to every project.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Based in Addis Ababa, we collaborate with developers, entrepreneurs, and homeowners 
                who want architecture that works: on budget, on time, and exactly as imagined.
              </p>
              <Link href="/about" className="link-arrow">
                About
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
            <span className="section-label">(FW 02) — SERVICES</span>
          </div>
          
          <div className="two-col mb-16">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl text-balance">
                Discover the full range of services that shape lasting architecture.
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed">
                From early concept through construction documentation, we ensure that every project 
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
            View services
          </Link>
        </div>
      </section>

      {/* Work Section */}
      <section className="section border-t border-border">
        <div className="container-site">
          <div className="flex justify-end mb-8">
            <span className="section-label">(FW 03) — WORK</span>
          </div>
          
          <div className="two-col mb-16">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl text-balance">
                We showcase architecture built on precision and purpose.
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Our portfolio spans hospitality, residential, commercial, and wellness — each 
                responding to its own brief, site, and story.
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
                      src={project.thumbnail || placeholders.square(project.title)}
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
            <span className="section-label">(FW 04) — CLIENTS</span>
          </div>
          
          <div className="mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl text-balance max-w-2xl">
              We build trust through relationships as lasting as our spaces.
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-6 max-w-2xl">
              Our clients range from developers to entrepreneurs and private homeowners. Each 
              partnership is grounded in clear communication, professional rigor, and a shared 
              belief in design that stands the test of time.
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <blockquote className="border-t border-border pt-8">
              <p className="text-lg leading-relaxed mb-6">
                &ldquo;EdenArch guided our project with remarkable clarity and vision. Their team 
                understood not only the architecture but also the business goals behind it, making 
                them an invaluable partner.&rdquo;
              </p>
              <footer>
                <cite className="not-italic font-medium">Sarah Mitchell</cite>
                <div className="text-sm text-muted-foreground">Director, Horizon Development Group</div>
              </footer>
            </blockquote>
            
            <blockquote className="border-t border-border pt-8">
              <p className="text-lg leading-relaxed mb-6">
                &ldquo;Working with EdenArch was seamless from start to finish. Their approach is 
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
            <span className="section-label">(FW 05) — FAQ</span>
          </div>
          
          <div className="two-col mb-16">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl text-balance">
                We answer the questions that matter most.
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Starting an architecture project is a big decision. These are the questions our 
                clients ask most often.
              </p>
            </div>
          </div>
          
          {/* FAQ List */}
          <div className="border-t border-border">
            {[
              'What types of projects does EdenArch take on?',
              'How early should we involve EdenArch in our project?',
              'Do you only work with large-scale clients?',
              'What does your process look like?',
              'Do you manage construction as well?',
              'How do we get started with EdenArch?',
            ].map((question, index) => (
              <div 
                key={index}
                className="flex items-center justify-between py-5 border-b border-border cursor-pointer hover:bg-muted/50 transition-colors px-2 -mx-2"
              >
                <span>{question}</span>
                <span className="text-muted-foreground">+</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
