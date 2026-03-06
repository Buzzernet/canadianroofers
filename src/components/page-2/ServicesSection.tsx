"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  { num: "01", title: "Shingle Roofs & Flat Roof Installations", desc: "Complete residential and flat roof installation with premium materials and expert craftsmanship." },
  { num: "02", title: "Leak Protection & Repairs", desc: "Expert repairs for animal & weather damage with lasting protection for your home." },
  { num: "03", title: "Vent, Turbine & Max Vent Replacement", desc: "Proper ventilation solutions to extend your roof's lifespan and improve energy efficiency." },
  { num: "04", title: "Soffit & Fascia Installation & Repair", desc: "Professional soffit and fascia services for a clean, durable finish." },
  { num: "05", title: "Eavestrough & Gutter Services", desc: "Gutter cleaning, repairs, and full replacement services to protect your foundation." },
  { num: "06", title: "Skylight Installation", desc: "Brighten your home with professional skylight installations." },
  { num: "07", title: "Chimney Roof Repairs", desc: "Specialized chimney flashing and roof repair services." },
  { num: "08", title: "Commercial & Flat Roofing", desc: "Tar and gravel, torch on, and single ply roofing solutions for businesses." },
  { num: "09", title: "Roof Caulking & Recaulking", desc: "Prevent leaks with professional caulking and sealing services." },
];

const ServicesSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="services" className="bg-background relative">
      {/* Marquee banner */}
      <div className="bg-accent py-3 overflow-hidden">
        <div className="marquee whitespace-nowrap flex gap-12">
          {[...Array(2)].map((_, rep) => (
            <span key={rep} className="flex gap-12 items-center">
              {["SHINGLE ROOFS", "FLAT ROOFING", "LEAK REPAIRS", "GUTTERS", "SKYLIGHTS", "CHIMNEY", "COMMERCIAL", "CAULKING", "SOFFIT & FASCIA"].map((s) => (
                <span key={s + rep} className="font-bebas-neue text-accent-foreground text-2xl tracking-wider flex items-center gap-12">
                  {s} <span className="text-accent-foreground/40">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="section-padding px-4 py-32">
        <div className="container mx-auto">
          {/* Section header - asymmetric */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-outfit text-accent text-sm uppercase tracking-[0.3em] font-medium">What We Do</span>
              <h2 className="font-bebas-neue text-6xl md:text-8xl text-foreground mt-2 leading-[0.9]">
                OUR<br />SERVICES
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-outfit text-muted-foreground text-base max-w-md leading-relaxed"
            >
              At Canadian Roofers we offer the best pricing and roofing options in Toronto and all across the GTA.
            </motion.p>
          </div>

          {/* Services as numbered list with hover effect */}
          <div className="border-t border-border">
            {services.map((service, i) => (
              <motion.div
                key={service.num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="border-b border-border py-6 md:py-8 flex items-center gap-6 md:gap-10 group cursor-pointer transition-colors hover:bg-secondary/50 px-4 -mx-4"
              >
                <span className="font-bebas-neue text-4xl md:text-5xl text-muted-foreground/30 group-hover:text-accent transition-colors w-16 md:w-20 flex-shrink-0">
                  {service.num}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bebas-neue text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <motion.p
                    initial={false}
                    animate={{ height: hoveredIdx === i ? "auto" : 0, opacity: hoveredIdx === i ? 1 : 0 }}
                    className="font-outfit text-muted-foreground text-sm overflow-hidden mt-2"
                  >
                    {service.desc}
                  </motion.p>
                </div>
                <div className="hidden md:block w-6 h-6 rounded-full border-2 border-muted-foreground/20 group-hover:border-accent group-hover:bg-accent transition-all flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;