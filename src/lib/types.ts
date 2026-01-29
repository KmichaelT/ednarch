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
