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
  description: "Have a project in mind? I'd love to hear about it.",
  formHeading: 'Send a Message',
  messagePlaceholder: 'Tell me about your project...',
  submitLabel: 'Send message',
  projectTypes: [
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'hospitality', label: 'Hospitality' },
    { value: 'mixed-use', label: 'Mixed-Use' },
    { value: 'interior', label: 'Interior Design' },
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
    description: "Have a project in mind? I'd love to hear about it.",
  },
};

const upworkContent: ContactContent = {
  heading: 'Hire Me on Upwork',
  description:
    'Looking for a skilled architect for your next project? Let\u2019s discuss how I can help bring your vision to life.',
  formHeading: 'Start a Conversation',
  messagePlaceholder:
    'Describe your project \u2014 scope, timeline, and any details that help me understand your needs...',
  submitLabel: 'Send inquiry',
  projectTypes: [
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
      'Hire a skilled architect through Upwork. Residential, commercial, and interior design services.',
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
