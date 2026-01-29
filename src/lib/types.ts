// Project types
export interface ProjectMeta {
  slug: string;
  title: string;
  category: string;
  year: string;
  thumbnail: string;
  order?: number;
}

export interface ProjectHero {
  image: string;
  title: string;
  subtitle: string;
}

export interface ProjectMetaDetails {
  location?: string;
  program?: string;
  area?: string;
  capacity?: string;
  floors?: string;
  status?: string;
}

export interface Project extends ProjectMeta {
  hero: ProjectHero;
  meta: ProjectMetaDetails;
  nextProject?: string;
  content: string; // MDX content
}

// Site config
export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLinks {
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  email: string;
  phone?: string;
  address?: string;
  social: SocialLinks;
  nav: NavItem[];
  copyright: string;
}

// Homepage types
export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface FAQ {
  question: string;
  answer?: string;
}

// About page types
export interface AboutService extends Service {
  cta?: string;
}

// Placeholder utility
export function placeholder(
  width: number,
  height: number,
  text: string,
  bgColor: string = 'f5f5f5',
  textColor: string = 'a3a3a3'
): string {
  return `https://placehold.co/${width}x${height}/${bgColor}/${textColor}?text=${encodeURIComponent(text)}`;
}

// Placeholder presets
export const placeholders = {
  hero: (text: string = 'Hero Image') => placeholder(1920, 1080, text),
  thumbnail: (text: string = 'Thumbnail') => placeholder(800, 600, text),
  square: (text: string = 'Image') => placeholder(600, 600, text),
  portrait: (text: string = 'Portrait') => placeholder(800, 1200, text),
  landscape: (text: string = 'Landscape') => placeholder(1200, 800, text),
  drawing: (text: string = 'Floor Plan') => placeholder(1400, 900, text, 'fafafa', '999999'),
  pair: (text: string = 'Image') => placeholder(900, 600, text),
};
