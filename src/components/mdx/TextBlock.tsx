import { ReactNode } from 'react';

interface TextBlockProps {
  title?: string;
  children: ReactNode;
}

export function TextBlock({ title, children }: TextBlockProps) {
  return (
    <section className="py-12 lg:py-16 border-t border-border first:border-t-0">
      {/* Title - Section heading (H2 equivalent) */}
      {title && (
        <h2 className="text-xl md:text-2xl font-serif font-normal tracking-tight mb-6 text-foreground">
          {title}
        </h2>
      )}
      
      {/* Content - Body text */}
      <div className="prose-custom max-w-3xl">
        {children}
      </div>
    </section>
  );
}
