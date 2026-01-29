export const metadata = {
  title: 'Contact | EdenArch',
  description: 'Have a project in mind? I\'d love to hear about it.',
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container-site">
        {/* Header */}
        <div className="two-col mb-16 lg:mb-24">
          <div>
            <h1 className="font-serif text-4xl lg:text-5xl">Get in Touch</h1>
            <p className="text-muted-foreground leading-relaxed mt-6 max-w-md">
              Have a project in mind? I&apos;d love to hear about it.
            </p>
          </div>
          <div className="flex justify-end items-start">
            <span className="section-label">(01) — CONTACT</span>
          </div>
        </div>

        <div className="two-col">
          {/* Contact Form */}
          <div>
            <h2 className="text-xl md:text-2xl font-serif mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-2">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition-colors"
                >
                  <option value="">Select a project type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="mixed-use">Mixed-Use</option>
                  <option value="interior">Interior Design</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="px-8 py-3 bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
              >
                Send message
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="lg:pl-12">
            <h2 className="text-xl md:text-2xl font-serif mb-8">Contact Details</h2>
            
            <div className="space-y-8">
              <div>
                <span className="block text-sm font-medium text-muted-foreground mb-1">Email</span>
                <a 
                  href="mailto:hello@edenarch.studio"
                  className="text-foreground hover:opacity-70 transition-opacity"
                >
                  hello@edenarch.studio
                </a>
              </div>
              
              <div>
                <span className="block text-sm font-medium text-muted-foreground mb-1">Phone</span>
                <span className="text-foreground">+251 91 234 5678</span>
              </div>
              
              <div>
                <span className="block text-sm font-medium text-muted-foreground mb-1">Location</span>
                <address className="text-foreground not-italic">
                  Addis Ababa, Ethiopia
                </address>
              </div>
              
              <div>
                <span className="block text-sm font-medium text-muted-foreground mb-3">Follow me</span>
                <div className="flex gap-6">
                  <a 
                    href="#" 
                    className="text-foreground hover:opacity-70 transition-opacity"
                  >
                    Twitter
                  </a>
                  <a 
                    href="#" 
                    className="text-foreground hover:opacity-70 transition-opacity"
                  >
                    Instagram
                  </a>
                  <a 
                    href="#" 
                    className="text-foreground hover:opacity-70 transition-opacity"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
