export interface ContactContent {
  heading: string;
  description: string;
  formHeading: string;
  messagePlaceholder: string;
  submitLabel: string;
  projectTypes: { value: string; label: string }[];
  detailsHeading: string;
  contactDetails: {
    email: string;
    phone: string;
    location: string;
  };
  /** Optional banner shown above the form */
  banner?: {
    text: string;
    linkText?: string;
    linkHref?: string;
  };
  metadata: {
    title: string;
    description: string;
  };
}

const defaultContent: ContactContent = {
  heading: 'Get in Touch',
  description: "Hiring a drafter, or have a project that needs clear drawings? I'd love to hear about it.",
  formHeading: 'Send a Message',
  messagePlaceholder: 'Tell me about the role or project...',
  submitLabel: 'Send message',
  projectTypes: [
    { value: 'job', label: 'Job opportunity' },
    { value: 'drafting', label: 'Drafting / construction documents' },
    { value: 'permit', label: 'Permit or civil drafting' },
    { value: 'revit', label: 'Revit modeling' },
    { value: 'design', label: 'Architectural or interior design' },
    { value: 'other', label: 'Other' },
  ],
  detailsHeading: 'Contact Details',
  contactDetails: {
    email: 'edenetilahun@gmail.com',
    phone: '+1 240 481 4420',
    location: 'Silver Spring, MD',
  },
  metadata: {
    title: 'Contact | EdenArch',
    description: "Hiring a drafter, or have a project that needs clear drawings? I'd love to hear about it.",
  },
};

const upworkContent: ContactContent = {
  heading: 'Hire Me on Upwork',
  description:
    'Need a drafter or architectural designer for your next project? Let\u2019s talk about the drawings you need.',
  formHeading: 'Start a Conversation',
  messagePlaceholder:
    'Describe your project \u2014 scope, timeline, and any details that help me understand your needs...',
  submitLabel: 'Send inquiry',
  projectTypes: [
    { value: 'drafting', label: 'CAD Drafting' },
    { value: 'revit', label: 'Revit Modeling' },
    { value: 'residential', label: 'Residential Design' },
    { value: 'commercial', label: 'Commercial Design' },
    { value: 'interior', label: 'Interior Design' },
    { value: 'visualization', label: '3D Visualization' },
    { value: 'consultation', label: 'Design Consultation' },
    { value: 'other', label: 'Other' },
  ],
  detailsHeading: 'Work With Me',
  contactDetails: {
    email: 'edenetilahun@gmail.com',
    phone: '+1 240 481 4420',
    location: 'Silver Spring, MD',
  },
  banner: {
    text: 'Prefer to hire through Upwork?',
    linkText: 'View my Upwork profile',
    linkHref: 'https://www.upwork.com/freelancers/~01fe06473308f6bc5c',
  },
  metadata: {
    title: 'Hire Me | EdenArch on Upwork',
    description:
      'Hire an architectural drafter and designer through Upwork: CAD drafting, Revit modeling, and residential, commercial, and interior design.',
  },
};

/**
 * Map of subdomain → contact content overrides.
 * Add new entries here to support additional subdomains.
 */
const subdomainContent: Record<string, ContactContent> = {
  upwork: upworkContent,
};

export function getContactContent(subdomain: string | null): ContactContent {
  if (subdomain && subdomain in subdomainContent) {
    return subdomainContent[subdomain];
  }
  return defaultContent;
}
