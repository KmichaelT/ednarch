import Image from 'next/image';

interface ImagePairProps {
  images?: string[] | [string, string];
  captions?: (string | undefined)[];
  alt?: (string | undefined)[];
}

export function ImagePair({
  images,
  captions = [],
  alt = [],
}: ImagePairProps) {
  const safeImages = Array.isArray(images) ? images : [];

  if (safeImages.length === 0) {
    return null;
  }

  return (
    <div className="py-8 lg:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {safeImages.map((src, index) => (
          <figure key={index}>
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <Image
                src={src}
                alt={alt[index] || captions?.[index] || ''}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {captions?.[index] && (
              <figcaption className="mt-3 text-sm text-muted-foreground">
                {captions[index]}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}
