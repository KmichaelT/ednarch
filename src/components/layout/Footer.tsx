import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
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
          href="https://www.upwork.com/freelancers/~01fe06473308f6bc5c"
          target="_blank"
          rel="noopener noreferrer"
          className="link-arrow text-white"
        >
          Hire me on Upwork
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
                href="mailto:edenetilahun@gmail.com" 
                className="text-white hover:opacity-70 transition-opacity"
              >
                edenetilahun@gmail.com
              </a>
              <p className="muted-text text-sm mt-6 mb-3">Phone</p>
              <a
                href="tel:+12404814420"
                className="text-white hover:opacity-70 transition-opacity"
              >
                +1 240 481 4420
              </a>
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
            
            {/* Location */}
            <div>
              <p className="muted-text text-sm mb-3">Location</p>
              <p className="text-white">Silver Spring, MD</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Large Logo - always white in dark footer */}
      <div className="container-site pb-12">
        <div className="relative h-24 lg:h-32 w-full max-w-md">
          <Image
            src="/logo-white.png"
            alt="EdenArch"
            fill
            className="object-contain object-left"
          />
        </div>
      </div>
    </footer>
  );
}
