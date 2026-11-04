import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About | EdenArch',
  description: 'I\'m Eden Tilahun, an architectural and civil CAD drafter and architectural designer based in Silver Spring, MD.',
};

const timeline = [
  {
    year: '2025 – Present',
    title: 'Capital Engineering LLC',
    role: 'Permit Coordinator',
    description: 'Draft traffic control plans in AutoCAD and MicroStation, and prepare and track permit submittals for DC agencies, including DDOT, DOB, and DOEE.',
  },
  {
    year: '2023 – Present',
    title: 'EdenArch',
    role: 'Freelance Architectural Drafter & Designer',
    description: 'Revit models, CAD drawings, and renderings for residential, hospitality, and mixed-use projects, including an 8-unit, 5-story apartment building delivered in three weeks.',
  },
  {
    year: '2020 – 2023',
    title: 'S.Hawi General Contractor',
    role: 'Architectural Designer & Urban Planner',
    description: 'Developed AutoCAD conceptual plans for a 30-story commercial complex, led its permitting and zoning compliance, and supervised construction on site. Received the company\'s Certificate of Recognition in 2021.',
  },
  {
    year: '2019 – 2020',
    title: 'Denk Furniture Co.',
    role: 'Architectural Designer',
    description: 'Worked with manufacturing teams to keep product designs within safety and regulatory standards.',
  },
  {
    year: '2019',
    title: 'Unity University',
    role: 'B.S. in Architecture and Urban Planning',
    description: 'Coursework in architectural design, urban planning, and building systems.',
  },
  {
    year: '2018',
    title: 'Nemad Consulting Architects & Engineers',
    role: 'Architecture Intern',
    description: 'Prepared bills of quantities and reinforced concrete schedules, and supported as-built drawings for a rehabilitation center\'s permit documents.',
  },
];

const skills = [
  'Construction documents and permit sets',
  'Floor plans, elevations, sections, and site plans',
  'Revit modeling and 3D visualization',
  'Traffic control plans (AutoCAD and MicroStation)',
  'Permit submittals for DC agencies (DDOT, DOB, DOEE)',
  'On-site construction supervision',
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
                Hello, I&apos;m Eden Tilahun, an architectural and civil CAD drafter and
                architectural designer based in Silver Spring, MD.
              </p>
            </div>
            <div className="flex justify-end items-start">
              <span className="section-label">(01) — ABOUT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16 lg:pb-24">
        <div className="container-site">
          <div className="relative aspect-[16/9] bg-muted overflow-hidden">
            <Image
              src="/images/eden/about.jpeg"
              alt="Eden Tilahun"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* My Story - Intro */}
      <section className="pb-16 lg:pb-24">
        <div className="container-site">
          <div className="flex justify-end mb-8">
            <span className="section-label">(02) — MY STORY</span>
          </div>

          <div className="two-col">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl text-balance">
                Turning design intent into drawings that get built.
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I studied architecture and urban planning at Unity University, then spent more
                than three years at S.Hawi General Contractor drawing conceptual plans for a
                30-story commercial complex, leading its permitting, and supervising construction
                on site. Watching drawings become buildings showed me what a contractor needs from
                a sheet: clear dimensions, consistent notes, and no surprises.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Today I&apos;m based in Silver Spring, MD. At Capital Engineering I draft traffic
                control plans in AutoCAD and MicroStation and prepare permit submittals for DC
                agencies. Through EdenArch, I take on freelance drafting and design work: Revit
                models, CAD drawings, and renderings for residential, hospitality, and mixed-use
                projects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m open to drafter, CAD technician, and Revit/BIM roles in the Washington,
                DC area, and to freelance projects that need clear, buildable drawings.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                <a href="/eden-tilahun-resume.pdf" className="link-arrow inline-flex" target="_blank" rel="noopener noreferrer">
                  View résumé (PDF)
                </a>
                <a href="https://www.linkedin.com/in/edenarch" className="link-arrow inline-flex" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-16 lg:pb-24">
        <div className="container-site">
          <div className="border-t border-border pt-12">
            <h2 className="text-xl md:text-2xl font-serif mb-12">Experience and education</h2>

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
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.role}</p>
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
      <section className="pb-16 lg:pb-24">
        <div className="container-site">
          <div className="border-t border-border pt-12">
            <div className="two-col">
              <div>
                <h2 className="text-xl md:text-2xl font-serif mb-8">What I Do</h2>
              </div>
              <div>
                <ul className="space-y-4">
                  {skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-muted-foreground mt-8">
                  <span className="font-medium text-foreground">Tools:</span> AutoCAD · Revit ·
                  MicroStation · SketchUp · Adobe Creative Suite
                </p>

                <Link href="/services" className="link-arrow mt-8 inline-flex">
                  View all services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
