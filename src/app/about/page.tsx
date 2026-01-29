import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About | EdenArch',
  description: 'Hello, I\'m Eden Eskinder, a skilled architect and urban planner with a passion for creating functional and aesthetically pleasing spaces.',
};

const timeline = [
  {
    year: '2019',
    title: 'Graduation',
    description: 'Graduated with a BSc degree in Architecture and Urban Planning from Unity University, completing coursework in architectural design principles, urban planning concepts, and building systems.',
  },
  {
    year: '2020-2023',
    title: 'S.Hawi General Contractor',
    description: 'Worked as an Architect and Urban Planner, designing G+30 commercial buildings, developing conceptual plans using AutoCAD, and supervising on-site construction to ensure alignment with designs.',
  },
  {
    year: '2023',
    title: 'Founded EdenArch',
    description: 'Launched EdenArch as a freelance architecture and design business, working with companies and individuals as an independent contractor specializing in residential, commercial, and interior design projects.',
  },
];

const testimonials = [
  {
    quote: 'Eden guided our project with remarkable clarity and vision. He understood not only the architecture but also the business goals behind it, making him an invaluable partner.',
    author: 'Sarah Mitchell',
    role: 'Director, Horizon Development Group',
  },
  {
    quote: 'Working with Eden was seamless from start to finish. His approach is refined, precise, and deeply thoughtful — our institution now has a space that truly embodies its mission.',
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
                Hello, I&apos;m Eden Eskinder, a skilled architect and urban planner with a passion 
                for creating functional and aesthetically pleasing spaces.
              </p>
            </div>
            <div className="flex justify-end items-start">
              <span className="section-label">(01) — ABOUT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-20 lg:pb-32">
        <div className="container-site">
          <div className="relative aspect-[16/9] bg-muted overflow-hidden">
            <Image
              src="/images/eden/about.jpeg"
              alt="Eden Eskinder"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* My Story - Intro */}
      <section className="pb-20 lg:pb-32">
        <div className="container-site">
          <div className="flex justify-end mb-8">
            <span className="section-label">(02) — MY STORY</span>
          </div>
          
          <div className="two-col">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl text-balance">
                Bringing visions to life through thoughtful design.
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With years of experience in the field, I am proficient in designing floor plan 
                drawings and 3D models, as well as producing photorealistic visualizations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I have a keen eye for color and texture, and I excel at selecting wall and textile 
                colors and arranging layouts to optimize space and enhance the user experience. My 
                expertise extends to furniture selection and placement, ensuring that each design 
                is optimized for comfort, functionality, and style.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a strong focus on sustainability, I am committed to creating environmentally 
                friendly and socially responsible designs. Let&apos;s work together to bring your 
                vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-20 lg:pb-32">
        <div className="container-site">
          <div className="border-t border-border pt-12">
            <h3 className="text-sm font-medium mb-12">Experience</h3>
            
            <div className="space-y-0">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-border"
                >
                  {/* Year */}
                  <div className="md:col-span-2">
                    <span className="text-sm text-muted-foreground font-medium">
                      {item.year}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <div className="md:col-span-3">
                    <h4 className="font-medium">{item.title}</h4>
                  </div>
                  
                  {/* Description */}
                  <div className="md:col-span-7">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills/Expertise */}
      <section className="pb-20 lg:pb-32">
        <div className="container-site">
          <div className="border-t border-border pt-12">
            <div className="two-col">
              <div>
                <h3 className="text-sm font-medium mb-8">What I Do</h3>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                    Floor plan drawings and 3D modeling
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                    Photorealistic architectural visualizations
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                    Interior design and space planning
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                    Material and color selection
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                    Construction documentation
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                    On-site construction supervision
                  </li>
                </ul>
                
                <Link href="/services" className="link-arrow mt-8 inline-flex">
                  View all services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section border-t border-border">
        <div className="container-site">
          <div className="flex justify-end mb-8">
            <span className="section-label">(03) — CLIENTS</span>
          </div>
          
          <div className="mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl text-balance max-w-2xl">
              I build trust through relationships as lasting as my spaces.
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-6 max-w-2xl">
              My clients range from developers to cultural institutions and private homeowners. 
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
