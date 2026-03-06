"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative bg-accent overflow-hidden">
      {/* Marquee text background */}
      <div className="absolute inset-0 flex items-center opacity-10 pointer-events-none overflow-hidden">
        <div className="marquee-reverse whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="font-bebas-neue text-[200px] text-accent-foreground tracking-wider">
              FREE ESTIMATE · FREE ESTIMATE · 
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bebas-neue text-5xl md:text-8xl lg:text-9xl text-accent-foreground leading-[0.9] mb-6"
          >
            READY TO GET<br />YOUR FREE<br />ROOF ESTIMATE?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-outfit text-accent-foreground/70 text-lg max-w-lg mb-10"
          >
            Only $4.99 per square foot including material and installation.
            We'll beat any written estimate by 5%.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-outfit font-semibold px-10 py-4 text-base uppercase tracking-wider hover:bg-primary/90 transition-all group"
            >
              Request Free Estimate
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:4377033625"
              className="inline-flex items-center justify-center gap-3 border-2 border-accent-foreground/30 text-accent-foreground font-outfit font-semibold px-10 py-4 text-base hover:bg-accent-foreground/10 transition-all"
            >
              <Phone className="w-4 h-4" />
              (437) 703-3625
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;