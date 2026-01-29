import Image from 'next/image';

interface ImageGridProps {
  images: string[];
  labels?: string[];
  caption?: string;
  columns?: 2 | 3 | 4;
}

export function ImageGrid({ 
  images, 
  labels = [], 
  caption,
  columns = 3 
}: ImageGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
  };

  return (
    <div className="py-8 lg:py-12">
      <div className={`grid ${gridCols[columns]} gap-4 lg:gap-6`}>
        {images.map((src, index) => (
          <figure key={index}>
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <Image
                src={src}
                alt={labels[index] || ''}
                fill
                className="object-cover"
                sizes={`(max-width: 768px) 100vw, ${100 / columns}vw`}
              />
            </div>
            {labels[index] && (
              <figcaption className="mt-2 text-xs text-muted-foreground">
                {labels[index]}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
      {caption && (
        <p className="mt-4 text-sm text-muted-foreground">
          {caption}
        </p>
      )}
    </div>
  );
}
