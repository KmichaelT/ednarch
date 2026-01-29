'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Menu, Sun, Moon, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-md hover:bg-muted transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}

function Logo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show light logo by default during SSR to prevent flash
  const logoSrc = mounted && theme === 'dark' ? '/logo-white.png' : '/logo.png';

  return (
    <Link href="/" className="relative h-8 w-28 block">
      <Image
        src={logoSrc}
        alt="EdenArch"
        fill
        className="object-contain object-left"
        priority
      />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border/40">
      <div className="container-site">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo />
          
          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm transition-colors hover:text-foreground',
                  pathname === item.href
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Right side - Theme toggle + Contact (desktop) + Mobile menu */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Contact - Desktop only */}
            <Link
              href="/contact"
              className="hidden lg:block text-sm font-medium px-4 py-2 bg-foreground text-background rounded-sm hover:opacity-90 transition-opacity"
            >
              Contact
            </Link>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <button className="p-2 hover:bg-muted rounded-md transition-colors">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <div className="flex flex-col h-full">
                  {/* Mobile Nav Links */}
                  <nav className="flex flex-col gap-1 mt-8">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            'text-lg py-3 px-2 rounded-md transition-colors hover:bg-muted',
                            pathname === item.href
                              ? 'text-foreground font-medium bg-muted'
                              : 'text-muted-foreground'
                          )}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                    <SheetClose asChild>
                      <Link
                        href="/contact"
                        className={cn(
                          'text-lg py-3 px-2 rounded-md transition-colors hover:bg-muted',
                          pathname === '/contact'
                            ? 'text-foreground font-medium bg-muted'
                            : 'text-muted-foreground'
                        )}
                      >
                        Contact
                      </Link>
                    </SheetClose>
                  </nav>
                  
                  {/* Bottom section */}
                  <div className="mt-auto pb-8 pt-8 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Theme</span>
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
