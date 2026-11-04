import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header, Footer } from '@/components/layout';
import './globals.css';
import { getSubdomain } from '@/lib/subdomain';

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
  title: 'EdenArch | Eden Tilahun, Architectural Drafter & Designer',
  description: 'Eden Tilahun is an architectural and civil CAD drafter and architectural designer in Silver Spring, MD, producing construction documents, permit drawings, and Revit models in AutoCAD, Revit, and MicroStation.',
  keywords: ['architectural drafter', 'CAD drafter', 'civil drafter', 'Revit', 'AutoCAD', 'MicroStation', 'construction documents', 'permit drawings', 'architectural designer', 'Silver Spring', 'Maryland', 'Washington DC'],
  openGraph: {
    title: 'EdenArch | Eden Tilahun, Architectural Drafter & Designer',
    description: 'Construction documents, permit drawings, and Revit models in AutoCAD, Revit, and MicroStation.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const subdomain = await getSubdomain();
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header subdomain={subdomain} />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer subdomain={subdomain} />
        </ThemeProvider>
      </body>
    </html>
  );
}
