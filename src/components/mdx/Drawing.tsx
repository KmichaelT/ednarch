import Image from 'next/image';

interface DrawingProps {
  src: string;
  label: string;
  caption?: string;
}

export function Drawing({ src, label, caption }: DrawingProps) {
  return (
    <figure className="py-8 lg:py-12 max-w-4xl mx-auto">
      {/* Label */}
      <div className="mb-4">
        <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
          {label}
        </span>
      </div>
      
      {/* Drawing Image */}
      <div className="relative aspect-[16/10] bg-[#fafafa] overflow-hidden border border-border">
        <Image
          src={src}
          alt={label}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 900px"
        />
      </div>
      
      {/* Caption */}
      {caption && (
        <figcaption className="mt-4 text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
