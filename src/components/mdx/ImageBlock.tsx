import Image from 'next/image';

interface ImageBlockProps {
  src: string;
  alt?: string;
  caption?: string;
  size?: 'medium' | 'large' | 'full';
}

export function ImageBlock({ 
  src, 
  alt = '', 
  caption, 
  size = 'large' 
}: ImageBlockProps) {
  const sizeClasses = {
    medium: 'max-w-3xl mx-auto',
    large: 'max-w-5xl mx-auto',
    full: 'w-full',
  };

  return (
    <figure className={`py-8 lg:py-12 ${sizeClasses[size]}`}>
      <div className="relative aspect-[16/10] bg-muted overflow-hidden">
        <Image
          src={src}
          alt={alt || caption || ''}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>
      {caption && (
        <figcaption className="mt-4 text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
