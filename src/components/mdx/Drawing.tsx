import Image from 'next/image';

interface DrawingProps {
  src: string;
  darkSrc?: string;
  label: string;
  caption?: string;
}

export function Drawing({ src, darkSrc, label, caption }: DrawingProps) {
  return (
    <figure className="py-8 lg:py-12 w-full">
      {/* Label */}
      <figcaption className="mb-4">
        <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
          {label}
        </span>
      </figcaption>

      {/* Drawing Image - Full width, natural height */}
      <div>
        {darkSrc ? (
          <>
            <Image
              src={src}
              alt={label}
              width={1920}
              height={1080}
              className="w-full h-auto dark:hidden"
              sizes="(max-width: 1400px) 100vw, 1400px"
            />
            <Image
              src={darkSrc}
              alt={label}
              width={1920}
              height={1080}
              className="w-full h-auto hidden dark:block"
              sizes="(max-width: 1400px) 100vw, 1400px"
            />
          </>
        ) : (
          <Image
            src={src}
            alt={label}
            width={1920}
            height={1080}
            className="w-full h-auto"
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
        )}
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
