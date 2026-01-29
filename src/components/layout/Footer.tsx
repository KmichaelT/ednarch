import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { label: 'Twitter', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
];

export function Footer() {
  return (
    <footer className="dark-section">
      {/* CTA Section */}
      <div className="container-site py-20 lg:py-28">
        <h2 className="font-serif text-3xl lg:text-4xl text-balance max-w-lg mb-6">
          Let&apos;s start designing a space that matches your vision.
        </h2>
        <Link
          href="/contact"
          className="link-arrow text-white"
        >
          Start your project
        </Link>
      </div>
      
      {/* Footer Content */}
      <div className="container-site pb-12">
        <div className="border-t border-white/10 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <p className="muted-text text-sm mb-3">Email</p>
              <a 
                href="mailto:hello@edenarch.studio" 
                className="text-white hover:opacity-70 transition-opacity"
              >
                hello@edenarch.studio
              </a>
              <p className="muted-text text-sm mt-6 mb-3">Phone</p>
              <span className="text-white">+251 91 234 5678</span>
            </div>
            
            {/* Navigation */}
            <div>
              <p className="muted-text text-sm mb-3">Navigation</p>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white hover:opacity-70 transition-opacity w-fit"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            
            {/* Social */}
            <div>
              <p className="muted-text text-sm mb-3">Follow me</p>
              <nav className="flex flex-col gap-2">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-white hover:opacity-70 transition-opacity w-fit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      {/* Large Logo */}
      <div className="container-site pb-12">
        <div className="text-[15vw] lg:text-[12vw] font-light tracking-tighter text-white leading-none select-none">
          EdenArch
        </div>
      </div>
    </footer>
  );
}
