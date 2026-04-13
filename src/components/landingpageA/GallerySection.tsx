"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";

const GallerySection = () => {
  const images = [
    { src: "/images/slider-1.webp", alt: "Professional shingle roof installation in Toronto" },
    { src: "/images/content-image-6.webp", alt: "Roofing contractor working on residential roof" },
    { src: "/images/content-image-7.webp", alt: "Completed roofing project in Greater Toronto Area" },
    { src: "/images/content-image-3.webp", alt: "High-quality shingle roof replacement service" },
    { src: "/images/content-image-4.webp", alt: "Expert roofing team installing new roof" },
    { src: "/images/slider-2.webp", alt: "Before and after roof replacement in GTA" },
    { src: "/images/content-image-5.webp", alt: "Professional roof repair and maintenance service" },
    { src: "/images/content-image-1.webp", alt: "Canadian Roofers quality craftsmanship" },
  ];
  return (
    <section 
      className="py-20 bg-surface" 
      id="gallery"
      aria-labelledby="gallery-heading"
    >
      <div className="container">
        <div className="max-w-full mx-auto mb-16 grid grid-cols-2 justify-between items-end gap-10">
          <div>
            <h4 className="font-space-grotesk text-accent text-xs tracking-[0.3em] uppercase font-bold mb-3">
              Portfolio
            </h4>
            <h2 id="gallery-heading" className="font-black text-4xl md:text-5xl lg:text-6xl text-foreground leading-[0.95]">
              Our Roofing Work
            </h2>
          </div>
          <div className="flex justify-end">
            <p className="text-muted-foreground text-base max-w-sm font-outfit leading-relaxed md:text-right ">
              See the quality and craftsmanship we bring to every shingle roof project.
            </p>
          </div>
        </div>
        {/* <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-bebas-neue font-bold text-3xl md:text-4xl text-foreground mb-4">
            Our Roofing Work
          </h2>
          <p className="text-muted-foreground text-lg">
            See the quality and craftsmanship we bring to every shingle roof project.
          </p>
        </div> */}
        <div className="w-full h-full">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3, 1280: 4 }}
          >
            <Masonry gutter="16px">
              {images.map((image, i) => (
                <div key={i} className="overflow-hidden rounded-xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="h-auto w-full object-cover max-h-[250px]"
                    loading="lazy"
                    sizes="(max-width: 350px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    fetchPriority={i < 4 ? "high" : "low"}
                  />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>

        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default GallerySection;
