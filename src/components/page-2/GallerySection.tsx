"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <section id="gallery" className="bg-primary text-primary-foreground overflow-hidden">
      {/* Section header */}
      <div className="container mx-auto px-4 pt-24 md:pt-32 pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-outfit text-accent text-sm uppercase tracking-[0.3em] font-medium">Our Work</span>
            <h2 className="font-bebas-neue text-6xl md:text-8xl leading-[0.9] mt-2">
              PROJECT<br /><span className="text-accent">GALLERY</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-outfit text-primary-foreground/50 text-base max-w-sm"
          >
            A selection of our recent roofing projects across Toronto and the GTA.
          </motion.p>
        </div>
      </div>

      {/* Asymmetric gallery - staggered heights */}
      <div className="container mx-auto px-4 pb-24 md:pb-32">
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
      </div>
    </section>
  );
};

export default GallerySection;