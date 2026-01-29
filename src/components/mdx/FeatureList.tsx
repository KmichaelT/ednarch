import { ReactNode } from 'react';

interface FeatureListProps {
  title: string;
  children?: ReactNode;
  items?: string[];
}

export function FeatureList({ title, children, items }: FeatureListProps) {
  return (
    <section className="py-12 lg:py-16 border-t border-border">
      {/* Title - Section heading (H2 equivalent) */}
      <h2 className="text-xl md:text-2xl font-serif font-normal tracking-tight mb-6 text-foreground">
        {title}
      </h2>
      
      {/* Features list */}
      {items ? (
        <ul className="space-y-3 max-w-3xl">
          {items.map((item, index) => (
            <li 
              key={index}
              className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <div className="prose-custom max-w-3xl">
          {children}
        </div>
      )}
    </section>
  );
}
