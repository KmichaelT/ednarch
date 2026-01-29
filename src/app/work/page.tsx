import Image from 'next/image';
import Link from 'next/link';
import { getAllProjects } from '@/lib/mdx';
import { placeholders } from '@/lib/types';

export const metadata = {
  title: 'Work | EdenArch',
  description: 'My portfolio spans residential, commercial, and cultural projects designed with clarity and restraint.',
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <section className="section">
      <div className="container-site">
        {/* Header */}
        <div className="two-col mb-16 lg:mb-24">
          <div>
            <h1 className="font-serif text-4xl lg:text-5xl">Work</h1>
            <p className="text-muted-foreground leading-relaxed mt-6 max-w-md">
              My portfolio spans residential, commercial, and cultural projects designed with clarity 
              and restraint. Each piece of work reflects my philosophy of creating spaces that balance 
              modern aesthetics with long-lasting functionality.
            </p>
          </div>
          <div className="flex justify-end items-start">
            <span className="section-label">(01) — WORK</span>
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
              <div className="hidden md:block text-sm text-muted-foreground flex-1">
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
  );
}
