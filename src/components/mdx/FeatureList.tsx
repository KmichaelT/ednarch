import { ReactNode } from 'react';

interface FeatureListProps {
  title: string;
  children?: ReactNode;
  items?: string[];
}

export function FeatureList({ title, children, items }: FeatureListProps) {
  return (
    <div className="two-col py-12 lg:py-16">
      {/* Title - Left column */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground">
          {title}
        </h3>
      </div>
      
      {/* Features - Right column */}
      <div>
        {items ? (
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 text-base text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <div className="prose-custom">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
