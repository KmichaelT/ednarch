interface QuoteProps {
  children: React.ReactNode;
  author?: string;
}

export function Quote({ children, author }: QuoteProps) {
  return (
    <blockquote className="py-12 lg:py-16 max-w-3xl mx-auto">
      <p className="font-serif text-2xl lg:text-3xl text-foreground leading-relaxed">
        &ldquo;{children}&rdquo;
      </p>
      {author && (
        <cite className="block mt-6 text-sm text-muted-foreground not-italic">
          — {author}
        </cite>
      )}
    </blockquote>
  );
}
