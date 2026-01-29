import Image from 'next/image';

interface DrawingProps {
  src: string;
  label: string;
  caption?: string;
}

export function Drawing({ src, label, caption }: DrawingProps) {
  return (
    <figure className="py-8 lg:py-12 w-full">
      {/* Label - Small caps style for technical drawings */}
      <figcaption className="mb-4">
        <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
          {label}
        </span>
      </figcaption>
      
      {/* Drawing Image - Full width */}
      <div className="relative aspect-[16/10] bg-muted overflow-hidden border border-border">
        <Image
          src={src}
          alt={label}
          fill
          className="object-contain p-4"
          sizes="100vw"
        />
      </div>
      
      {/* Caption */}
      {caption && (
        <p className="mt-4 text-sm text-muted-foreground">
          {caption}
        </p>
      )}
    </figure>
  );
}
