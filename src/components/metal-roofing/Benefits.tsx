"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Timer,
  Snowflake,
  Shield,
  Zap,
  Wrench,
  Leaf,
  TrendingUp,
  Layers,
} from "lucide-react";

interface Benefit {
  icon: LucideIcon;
  title: string;
  desc: string;
  highlight?: boolean;
}

const benefits: Benefit[] = [
  {
    icon: Timer,
    title: "40–70+ Year Lifespan",
    desc: "Outlasts asphalt shingles 3–4× over. Metal roofing is a once-in-a-generation investment for your home.",
    highlight: true,
  },
  {
    icon: Snowflake,
    title: "Snow Shedding",
    desc: "Smooth metal panels shed heavy snow naturally, reducing structural load and preventing dangerous accumulation.",
  },
  {
    icon: Shield,
    title: "Ice Dam Protection",
    desc: "Metal's thermal properties and seamless installation virtually eliminate ice dams that damage traditional shingles.",
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    desc: "Reflective metal surfaces reduce summer cooling costs by up to 25%, paying for themselves over time.",
    highlight: true,
  },
  {
    icon: Wrench,
    title: "Low Maintenance",
    desc: "Unlike asphalt that requires regular replacement, metal roofing demands minimal upkeep over its lifetime.",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    desc: "Made from 25–95% recycled content and fully recyclable at end of life. The sustainable roofing choice.",
  },
  {
    icon: TrendingUp,
    title: "Property Value Increase",
    desc: "Metal roofs deliver one of the highest ROI of any home improvement—often recouping 60–85% of cost on resale.",
    highlight: true,
  },
  {
    icon: Layers,
    title: "Modern Appearance",
    desc: "Sleek, contemporary profiles that complement any architectural style from traditional to ultra-modern.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Benefits() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-accent" />
            <span className="font-outfit text-accent text-xs uppercase tracking-[0.35em] font-medium">
              Why Metal Roofing
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bebas-neue text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.9] mb-5"
          >
            Why Ontario Homeowners<br />
            <span className="text-accent">Choose Metal Roofing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-outfit text-muted-foreground text-lg leading-relaxed"
          >
            Metal roofing has become one of the fastest-growing roofing options in Ontario because it offers superior durability, energy efficiency, and long-term value.
          </motion.p>
        </div>

        {/* Benefits grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              className={`group relative p-8 xl:p-10 cursor-default transition-colors duration-500 hover:bg-primary ${
                benefit.highlight ? "bg-surface" : "bg-white"
              }`}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-6 transition-colors duration-300">
                <benefit.icon
                  size={22}
                  className="text-accent"
                  strokeWidth={1.75}
                />
              </div>

              {/* Title */}
              <h3 className="font-bebas-neue text-2xl text-foreground group-hover:text-white transition-colors duration-300 leading-tight mb-3">
                {benefit.title}
              </h3>

              {/* Desc */}
              <p className="font-outfit text-muted-foreground group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">
                {benefit.desc}
              </p>

              {/* Accent bar on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-primary rounded-2xl px-8 py-6"
        >
          <div>
            <p className="text-2xl text-white max-w-4xl">
              Unlike traditional asphalt shingles, metal roofing systems are designed to withstand Ontario's changing climate year after year. </p>
            {/* <p className="font-outfit text-white/60 text-sm">
              Free estimates · No obligation · Financing available
            </p> */}
          </div>
          <a
            href="#estimate"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-outfit font-semibold px-7 py-3 text-sm uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Get Free Estimate
          </a>
        </motion.div>
      </div>
    </section>
  );
}
