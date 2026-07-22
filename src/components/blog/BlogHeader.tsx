import Image from 'next/image'

type BlogHeaderProps = {
  title: string
  description?: string
  eyebrow?: string
}

export default function BlogHeader({
  title,
  description,
  eyebrow = 'Expert Roofing Knowledge',
}: BlogHeaderProps) {
  return (
    <div className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container relative py-8 md:py-10 text-center">
        <div className="flex justify-center py-2">
          <Image
            src="/images/logo.webp"
            alt="Canadian Roofers Logo"
            width={160}
            height={48}
            className="h-32 w-auto rounded-2xl"
          />
        </div>

        <div className="flex flex-col mx-auto max-w-4xl justify-center items-center">
          {eyebrow && (
            <span className="inline-block font-space-grotesk text-accent text-xs tracking-[0.3em] uppercase font-bold mb-4">
              {eyebrow}
            </span>
          )}

          <h1 className="font-playfair-display font-black text-3xl sm:text-4xl lg:text-5xl text-primary-foreground leading-[1.08] mb-4">
            {title}
          </h1>

          {description && (
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
