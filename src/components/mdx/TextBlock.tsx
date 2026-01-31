import { ReactNode } from "react";

interface TextBlockProps {
  title?: string;
  children: ReactNode;
}

export function TextBlock({ title, children }: TextBlockProps) {
  return (
    <section className="py-12 lg:py-16 border-t border-border first:border-t-0">
      <div className="two-col">
        <div>
          {title && (
            <h2 className="text-xl md:text-2xl font-serif font-normal tracking-tight mb-6 text-foreground">
              {title}
            </h2>
          )}
          {/* <h2 className="font-serif text-3xl lg:text-4xl text-balance">
                Bringing visions to life through thoughtful design.
              </h2> */}
        </div>
        <div>
          <div className="prose-custom max-w-3xl">{children}</div>
        </div>
      </div>
    </section>
  );
}
