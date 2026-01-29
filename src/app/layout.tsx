import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Header, Footer } from '@/components/layout';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EdenArch | Architecture that works',
  description: 'Design services for clients who value clarity, precision, and buildings that deliver on their promise.',
  keywords: ['architecture', 'design', 'residential', 'commercial', 'Ethiopia', 'Addis Ababa'],
  openGraph: {
    title: 'EdenArch | Architecture that works',
    description: 'Design services for clients who value clarity, precision, and buildings that deliver on their promise.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
