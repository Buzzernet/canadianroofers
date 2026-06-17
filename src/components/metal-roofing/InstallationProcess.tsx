"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Search, ClipboardList, Layers, Package, Hammer, Shield } from "lucide-react";

interface Step {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    num: "01",
    icon: Search,
    title: "Roof Inspection And Assessment",
    desc: "Our certified team performs a thorough inspection of your existing roof structure, decking, and drainage to determine the ideal metal roofing solution for your home.",
  },
  {
    num: "02",
    icon: Layers,
    title: "Preparation Of The Roof Deck",
    desc: "Old roofing materials are safely removed and the roof deck is cleaned, leveled, and repaired to provide a solid, stable base for your new metal roofing system.",
  },
  {
    num: "03",
    icon: Package,
    title: "Premium Underlayment Installation",
    desc: "High-performance synthetic underlayment is installed to provide a critical moisture barrier, thermal protection, and additional insulation between your deck and metal panels.",
  },
  {
    num: "04",
    icon: Hammer,
    title: "Professional Metal Roofing Installation",
    desc: "Your new metal roofing panels are expertly installed using manufacturer-specified fastening systems, ensuring maximum wind resistance, watertight seams, and long-term durability.",
  },
  {
    num: "05",
    icon: ClipboardList,
    title: "Quality Assurance Inspection",
    desc: "Our team conducts a comprehensive walkthrough, inspecting every seam, flashing, fastener, and ridge cap to ensure the installation meets our rigorous quality standards.",
  },
  {
    num: "06",
    icon: Shield,
    title: "Manufacturer Warranty Protection",
    desc: "Upon completion, your metal roofing system is registered for full manufacturer warranty coverage, giving you decades of peace of mind and protection for your investment.",
  },
];

export default function InstallationProcess() {
  return (
    <section className="py-24 lg:py-32 bg-primary overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="w-8 h-[2px] bg-accent" />
            <span className="font-outfit text-accent text-xs uppercase tracking-[0.35em] font-medium">
              Our Process
            </span>
            <div className="w-8 h-[2px] bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bebas-neue text-5xl md:text-6xl lg:text-7xl text-white leading-[0.9] mb-5"
          >
            Professional<br />
            <span className="text-accent">Metal Roof Installation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-outfit text-white/60 text-lg leading-relaxed"
          >
            Our experienced roofing team follows a detailed installation process to ensure maximum performance and longevity.
          </motion.p>
        </div>

        {/* ── Desktop: horizontal timeline ── */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div className="absolute top-[52px] left-0 right-0 h-[2px] bg-white/10" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-[52px] left-0 right-0 h-[2px] bg-accent origin-left"
          />

          <div className="grid grid-cols-6 gap-4 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step circle */}
                <div className="relative mb-8">
                  <div className="w-[52px] h-[52px] rounded-full border-2 border-accent bg-primary flex items-center justify-center relative z-10 group-hover:bg-accent transition-colors duration-300">
                    <step.icon size={20} className="text-accent group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
                  </div>
                  <span className="absolute -top-2 -right-2 font-outfit text-[10px] font-bold text-accent/70 leading-none">
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-bebas-neue text-xl text-white group-hover:text-accent transition-colors duration-300 leading-tight mb-2">
                  {step.title}
                </h3>
                <p className="font-outfit text-white/45 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Mobile: vertical timeline ── */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/10" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative flex gap-6 pb-10 last:pb-0 group"
              >
                {/* Circle node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-accent bg-primary flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <step.icon size={18} className="text-accent group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <span className="font-outfit text-accent text-xs uppercase tracking-widest font-semibold">
                    Step {step.num}
                  </span>
                  <h3 className="font-bebas-neue text-2xl text-white mt-1 mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-outfit text-white/55 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="font-outfit text-white/50 text-sm mb-5">
            Our goal is to provide Ontario homeowners with a roofing system that delivers lasting performance and exceptional value.
          </p>
          <a
            href="#estimate"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-outfit font-semibold px-8 py-4 text-sm uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
          >
            Schedule Your Inspection
          </a>
        </motion.div>
      </div>
    </section>
  );
}
