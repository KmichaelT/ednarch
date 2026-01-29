import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section min-h-[60vh] flex items-center">
      <div className="container-site">
        <div className="max-w-lg">
          <h1 className="font-serif text-6xl lg:text-8xl mb-6">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/" className="link-arrow">
            Return home
          </Link>
        </div>
      </div>
    </section>
  );
}
