import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Project, ProjectMeta } from './types';

const CONTENT_DIR = path.join(process.cwd(), 'content');
const PROJECTS_DIR = path.join(CONTENT_DIR, 'projects');

// Get all project slugs for static generation
export function getProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) {
    return [];
  }
  
  const files = fs.readdirSync(PROJECTS_DIR);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

// Get project metadata for listings
export function getProjectMeta(slug: string): ProjectMeta | null {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);
  
  return {
    slug,
    title: data.title,
    category: data.category,
    year: data.year,
    thumbnail: data.thumbnail,
    order: data.order,
  };
}

// Get all projects with metadata (for listing pages)
export function getAllProjects(): ProjectMeta[] {
  const slugs = getProjectSlugs();
  
  const projects = slugs
    .map((slug) => getProjectMeta(slug))
    .filter((project): project is ProjectMeta => project !== null);
  
  // Sort by order (if defined), then by year (descending)
  return projects.sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order;
    }
    if (a.order !== undefined) return -1;
    if (b.order !== undefined) return 1;
    return parseInt(b.year) - parseInt(a.year);
  });
}

// Get full project data (for detail pages)
export function getProject(slug: string): Project | null {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    title: data.title,
    category: data.category,
    year: data.year,
    thumbnail: data.thumbnail,
    order: data.order,
    hero: data.hero,
    meta: data.meta || {},
    nextProject: data.nextProject,
    content,
  };
}

// Get adjacent projects for navigation
export function getAdjacentProjects(currentSlug: string): {
  prev: ProjectMeta | null;
  next: ProjectMeta | null;
} {
  const projects = getAllProjects();
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }
  
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];
  
  return { prev, next };
}

// Read page content (home, about)
export function getPageContent(pageName: string): { data: Record<string, unknown>; content: string } | null {
  const filePath = path.join(CONTENT_DIR, 'pages', `${pageName}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return { data, content };
}

// Read site config
export function getSiteConfig(): Record<string, unknown> {
  const filePath = path.join(CONTENT_DIR, 'site.json');
  
  if (!fs.existsSync(filePath)) {
    // Return default config
    return {
      name: 'EdenArch',
      tagline: 'Architecture that works.',
      email: 'hello@edenarch.studio',
      nav: [
        { label: 'Home', href: '/' },
        { label: 'Work', href: '/work' },
        { label: 'Services', href: '/services' },
        { label: 'About', href: '/about' },
      ],
      copyright: '© 2024 EdenArch. All rights reserved.',
    };
  }
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}
