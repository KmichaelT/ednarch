import type { Metadata } from 'next';
import { getSubdomain } from '@/lib/subdomain';
import { getContactContent } from './contact-content';
import { ContactForm } from '@/components/contact-form';

export async function generateMetadata(): Promise<Metadata> {
  const subdomain = await getSubdomain();
  const content = getContactContent(subdomain);
  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function ContactPage() {
  const subdomain = await getSubdomain();
  const content = getContactContent(subdomain);

  return (
    <section className="section">
      <div className="container-site">
        {/* Header */}
        <div className="two-col mb-16 lg:mb-24">
          <div>
            <h1 className="font-serif text-4xl lg:text-5xl">{content.heading}</h1>
            <p className="text-muted-foreground leading-relaxed mt-6 max-w-md">
              {content.description}
            </p>
          </div>
          <div className="flex justify-end items-start">
            <span className="section-label">(01) — CONTACT</span>
          </div>
        </div>

        <div className="two-col">
          {/* Contact Form */}
          <div>
            {content.banner && (
              <div className="mb-8 p-4 border border-border bg-muted">
                <p className="text-sm">
                  {content.banner.text}{' '}
                  {content.banner.linkText && content.banner.linkHref && (
                    <a
                      href={content.banner.linkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-medium hover:opacity-70 transition-opacity"
                    >
                      {content.banner.linkText} &rarr;
                    </a>
                  )}
                </p>
              </div>
            )}

            <h2 className="text-xl md:text-2xl font-serif mb-8">{content.formHeading}</h2>
            <ContactForm
              projectTypes={content.projectTypes}
              messagePlaceholder={content.messagePlaceholder}
              submitLabel={content.submitLabel}
            />
          </div>

          {/* Contact Info */}
          <div className="lg:pl-12">
            <h2 className="text-xl md:text-2xl font-serif mb-8">{content.detailsHeading}</h2>

            <div className="space-y-8">
              <div>
                <span className="block text-sm font-medium text-muted-foreground mb-1">Email</span>
                <a
                  href={`mailto:${content.contactDetails.email}`}
                  className="text-foreground hover:opacity-70 transition-opacity"
                >
                  {content.contactDetails.email}
                </a>
              </div>

              <div>
                <span className="block text-sm font-medium text-muted-foreground mb-1">Phone</span>
                <a
                  href={`tel:${content.contactDetails.phone.replace(/[^+\d]/g, '')}`}
                  className="text-foreground hover:opacity-70 transition-opacity"
                >
                  {content.contactDetails.phone}
                </a>
              </div>

              <div>
                <span className="block text-sm font-medium text-muted-foreground mb-1">Location</span>
                <address className="text-foreground not-italic">
                  {content.contactDetails.location}
                </address>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
