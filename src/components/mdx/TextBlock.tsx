import { ReactNode } from 'react';

interface TextBlockProps {
  title?: string;
  children: ReactNode;
}

export function TextBlock({ title, children }: TextBlockProps) {
  return (
    <div className="two-col py-12 lg:py-16">
      {/* Title - Left column */}
      <div>
        {title && (
          <h3 className="text-sm font-medium text-muted-foreground">
            {title}
          </h3>
        )}
      </div>
      
      {/* Content - Right column */}
      <div className="prose-custom text-base lg:text-lg text-muted-foreground max-w-prose">
        {children}
      </div>
    </div>
  );
}
