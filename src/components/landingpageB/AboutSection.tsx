"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { num: "$4.99", label: "Per Sq Ft" },
  { num: "5%", label: "We Beat Any Estimate" },
  { num: "10yr", label: "Labour Warranty" },
  { num: "100%", label: "WSIB Insured" },
];

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="bg-primary text-primary-foreground relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Two-column: image bleeds to edge, content has padding */}
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        {/* Image side - full bleed */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative h-[50vh] lg:h-auto"
        >
          <Image
            src="/images/content-image-2.webp"
            alt="Canadian Roofers professional roofing team working on Toronto and GTA residential and commercial projects"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="lazy"
            fetchPriority="low"
          />
          {/* Overlay with text */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-primary" />
        </motion.div>

        {/* Content side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center px-6 md:px-16 lg:px-20 py-16 lg:py-24 relative"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-accent" />
            <span className="font-outfit text-accent text-sm uppercase tracking-[0.3em] font-medium">
              About Us
            </span>
          </div>

          <h2 id="about-heading" className="font-bebas-neue text-5xl md:text-7xl leading-[0.9] mb-8">
            TORONTO & GTA&apos;S MOST<br />
            <span className="text-accent">AFFORDABLE</span><br />
            ROOFING EXPERTS
          </h2>

          <p className="font-outfit text-primary-foreground/60 text-lg leading-relaxed max-w-lg mb-12">
            Our Toronto, GTA based professional roofing contractors provide free roof
            estimates and give you the best solutions for all your roofing needs. We are the cheapest guaranteed!
          </p>

          {/* Highlights as a minimal list */}
          <ul className="space-y-3 mb-12 list-none" aria-label="Service highlights">
            {[
              "Only $4.99 Per Sq Ft Including Material & Installation",
              "We Beat Any Written Roofing Estimate by 5%",
              "Free Gutter Cleaning With Roof Replacement",
              "Free At-Home Roof Estimate",
              "Lifetime Shingle/Material Warranty",
            ].map((item) => (
              <li key={item} className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-accent flex-shrink-0" aria-hidden="true" />
                <span className="font-outfit text-primary-foreground/80 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-primary-foreground/10" role="list" aria-label="Company statistics">
            {stats.map((stat) => (
              <div key={stat.label} role="listitem">
                <div className="font-bebas-neue text-4xl text-accent" aria-label={stat.num}>{stat.num}</div>
                <div className="font-outfit text-primary-foreground/40 text-xs uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;