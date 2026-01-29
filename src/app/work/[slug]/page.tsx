import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getProject, getProjectSlugs, getAdjacentProjects } from '@/lib/mdx';
import { mdxComponents } from '@/components/mdx';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  
  if (!project) {
    return { title: 'Project Not Found | EdenArch' };
  }
  
  return {
    title: `${project.title} | EdenArch`,
    description: project.hero.subtitle,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  
  if (!project) {
    notFound();
  }
  
  const { next } = getAdjacentProjects(slug);
  
  // Get meta entries as array
  const metaEntries = Object.entries(project.meta).filter(([, value]) => value);

  return (
    <>
      {/* Project Header */}
      <section className="pt-12 lg:pt-16">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Title */}
            <div className="lg:col-span-6">
              <h1 className="font-serif text-3xl lg:text-4xl xl:text-5xl">
                {project.title}
              </h1>
              {/* Subtitle directly under title */}
              <p className="text-muted-foreground leading-relaxed mt-4 max-w-md">
                {project.hero.subtitle}
              </p>
            </div>
            
            {/* Project Number */}
            <div className="lg:col-span-2">
              <span className="section-label">(01)</span>
            </div>
            
            {/* Meta Info */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <div className="text-sm font-medium mb-1">Year</div>
                <div className="text-sm text-muted-foreground">{project.year}</div>
              </div>
              <div>
                <div className="text-sm font-medium mb-1">Category</div>
                <div className="text-sm text-muted-foreground">{project.category}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 lg:py-16">
        <div className="container-site">
          <div className="relative aspect-[16/9] bg-muted overflow-hidden">
            <Image
              src={project.hero.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* MDX Content */}
      <section className="pb-12 lg:pb-24">
        <div className="container-site">
          <MDXRemote 
            source={project.content} 
            components={mdxComponents}
          />
        </div>
      </section>

      {/* Project Meta Details */}
      {metaEntries.length > 0 && (
        <section className="pb-12 lg:pb-24">
          <div className="container-site">
            <div className="border-t border-border pt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {metaEntries.map(([key, value]) => (
                  <div key={key}>
                    <div className="text-sm font-medium mb-1 capitalize">{key}</div>
                    <div className="text-sm text-muted-foreground">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Next Project */}
      {next && (
        <section className="pb-12 lg:pb-24">
          <div className="container-site">
            <div className="border-t border-border pt-8">
              <Link 
                href={`/work/${next.slug}`}
                className="group inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
              >
                <span className="text-muted-foreground">Next</span>
                <span className="text-muted-foreground">—</span>
                <span className="font-medium">{next.title}</span>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
