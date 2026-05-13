import Image, { getImageProps } from "next/image";
import { Phone } from "lucide-react";

const HeroSection = () => {
  const { props: desktopHeroImage } = getImageProps({
    src: "/images/slider-1.webp",
    alt: "Professional shingle roof installation in Canada",
    width: 1920,
    height: 1080,
    quality: 80,
    sizes: "100vw",
    priority: true,
  });

  const { props: mobileHeroImage } = getImageProps({
    src: "/images/slider-1-mobile.webp",
    alt: "Professional shingle roof installation in Canada",
    width: 828,
    height: 1472,
    quality: 80,
    sizes: "100vw",
    priority: true,
  });

  return (
    <section className="relative md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 767px)" srcSet={mobileHeroImage.srcSet} sizes="100vw" />
          <img
            src={desktopHeroImage.src}
            srcSet={desktopHeroImage.srcSet}
            sizes={desktopHeroImage.sizes}
            alt={desktopHeroImage.alt}
            title="Professional shingle roof installation in Canada"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t md:from-primary-dark/80 md:via-primary-dark/60 md:to-primary-dark/60 from-primary-dark/95 to-primary-dark/75" />
      </div>

      <div className="container relative z-10 py-10 flex md:flex-row flex-col gap-20 items-end">
        <div className="max-w-2xl space-y-6 motion-safe:animate-fade-in-up">
          {/* <GoogleStars size="lg" className="[&_span]:text-primary-foreground [&_.text-muted-foreground]:text-primary-foreground/70" />
           */}
          {/* Logo */}
          <div>
            <Image
              src="/images/logo.webp"
              alt="Canadian Roofers logo - roofing company in Toronto"
              title="Canadian Roofers logo - roofing company in Toronto"
              width={240}
              height={80}
              loading="lazy"
              className="max-w-[240px] w-auto h-auto"
            />
          </div>

          <div className="px-4 pt-2">
            <span className="font-mono text-sm tracking-[0.3em] uppercase font-bold font-space-grotesk text-[#ff851a]">END OF WINTER SEASON DEAL</span>
          </div>

          <h1 className="font-black font-playfair-display text-primary-foreground max-w-[40rem] text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-tight">
            Need A <span className="text-stroke-light text-transparent [-webkit-text-stroke:1.5px_hsl(var(--primary-foreground))]">New</span> Roof?
          </h1>

          {/* <p className="text-primary-foreground/90 text-xl md:text-2xl font-bebas-neue font-bold">
            Only <span className="text-accent text-3xl md:text-4xl">$4.99</span> Per Square Foot
            <br />Including Material & Installation
          </p> */}

          <p className="md:text-primary-foreground/60 text-primary-foreground/80 text-lg max-w-lg leading-relaxed">
          Trusted Toronto & GTA roofers offering free roof inspections and honest roof replacement estimates starting<br/>from $4.99 per square foot (for standard asphalt shingles)
          <br/>Click Below To Claim Your Free Roof Inspection Now.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#quote"
              className="shadow-lg group inline-flex items-center justify-center bg-accent hover:bg-accent-hover font-space-grotesk text-white font-bold text-sm tracking-wider uppercase px-8 py-4 transition-all hover:translate-y-[-2px] hover:shadow-xl"
            >
              Get A Free Estimate
            </a>
            <a
              href="tel:6472657047"
              className="inline-flex items-center justify-center gap-2 text-primary-foreground/80 hover:text-primary-foreground border border-primary-foreground/20 hover:border-primary-foreground/40 font-space-grotesk font-bold text-sm tracking-wider px-8 py-4 transition-all"
            >
              <Phone size={20} />
              (647) 265-7047
            </a>
          </div>

          {/* <p className="text-primary-foreground/60 text-sm font-medium">
            Financing Options Available • Free Gutter Cleaning With Roof Replacement
          </p> */}
        </div>
        <div className="bg-[#ff851a] max-w-full flex-1 p-8 md:p-10 relative border ">
          <p className="font-space-grotesk text-accent-foreground/80 text-xs tracking-[0.3em] uppercase mb-2">Starting From</p>
          <h2 className="font-playfair-display font-black text-accent-foreground text-7xl md:text-8xl leading-none">$4.<span className="text-5xl md:text-6xl"></span>99</h2>
          <p className="font-space-grotesk text-accent-foreground/90 text-sm tracking-wider uppercase mt-4">Per Square Foot</p>
          <div className="mt-4 pt-4 border-t border-accent-foreground/20">
            <p className="text-accent-foreground/80 text-sm">Material & Installation Included</p>
            <p className="text-accent-foreground/60 text-xs mt-3">Free Gutter Cleaning With Roof Replacement</p>
            <p className="text-accent-foreground/60 text-xs mt-3">Financing Options Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
