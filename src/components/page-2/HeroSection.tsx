"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-primary">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={`/images/slider-1.webp`}
          alt="Professional shingle roof installation in Canada"
          fill
          priority
          className="w-full h-full object-cover"
          sizes="100vw"
        />
        
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>

      {/* Giant typography - the main creative element */}
      <div className="relative z-10 container mx-auto px-4 pb-12 md:pb-20 pt-40">
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-12 h-[2px] bg-accent" />
          <span className="font-outfit text-accent text-sm uppercase tracking-[0.3em] font-medium">
            Toronto & GTA Roofing Experts
          </span>
        </motion.div>

        {/* Massive stacked headline */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-bebas-neue text-[15vw] md:text-[10vw] lg:text-[8vw] text-primary-foreground leading-[0.9] tracking-tight"
          >
            NEED A
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-bebas-neue text-[15vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] tracking-tight"
          >
            <span className="text-primary-foreground">NEW </span>
            <span className="text-accent">ROOF?</span>
          </motion.h1>
        </div>

        {/* Price callout - bold and offset */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 flex flex-col md:flex-row md:items-end gap-6 md:gap-16"
        >
          <div className="flex items-baseline gap-2">
            <span className="font-bebas-neue text-accent text-[80px] md:text-[120px] leading-none">$4.99</span>
            <div className="flex flex-col">
              <span className="font-outfit text-primary-foreground/60 text-sm uppercase tracking-widest">per sq ft</span>
              <span className="font-outfit text-primary-foreground/40 text-xs uppercase tracking-widest">material + labour</span>
            </div>
          </div>

          <div className="max-w-sm">
            <p className="font-outfit text-primary-foreground/60 text-base leading-relaxed">
              Including Material and Installation. We beat any written roofing estimate by 5%.
              Financing options available.
            </p>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground font-outfit font-semibold px-8 py-4 text-base uppercase tracking-wider hover:bg-accent/90 transition-all group"
          >
            Get a Free Estimate
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="tel:4377033625"
            className="inline-flex items-center justify-center gap-3 border border-primary-foreground/30 text-primary-foreground font-outfit font-medium px-8 py-4 text-base hover:bg-primary-foreground/10 transition-all"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </motion.div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-wrap gap-x-10 gap-y-3"
        >
          {["WSIB Insured", "Lifetime Warranty", "Licensed & Insured", "Free Estimates"].map((item) => (
            <span key={item} className="font-outfit text-primary-foreground/40 text-xs uppercase tracking-[0.25em]">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;