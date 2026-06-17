"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, DollarSign, Zap, TrendingUp, CheckCircle2 } from "lucide-react";

const valueCards = [
  {
    icon: Clock,
    title: "Long Lifespan",
    desc: "40–70+ years versus 15–25 for asphalt. One roof for the life of your home.",
    stat: "3–4×",
    statLabel: "Longer than shingles",
  },
  {
    icon: DollarSign,
    title: "Lower Maintenance",
    desc: "No shingle replacements, no granule loss, no moss treatments. Virtually maintenance-free.",
    stat: "80%",
    statLabel: "Less maintenance cost",
  },
  {
    icon: Zap,
    title: "Energy Savings",
    desc: "Reflective coatings reduce cooling load. Many homeowners see 20–25% reduction in summer energy bills.",
    stat: "25%",
    statLabel: "Avg. cooling reduction",
  },
  {
    icon: TrendingUp,
    title: "Property Value",
    desc: "Metal roofs are a major selling point. Buyers pay a premium — and insurers often discount your premiums.",
    stat: "6%+",
    statLabel: "Home value increase",
  },
];

const costPoints = [
  "Premium installation starting from competitive rates",
  "Financing options to fit any budget",
  "Costs offset by energy savings over time",
  "Insurance discounts available in many cases",
  "Eliminates repeated replacement costs",
];

export default function CostValue() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-accent" />
            <span className="font-outfit text-accent text-xs uppercase tracking-[0.35em] font-medium">
              Investment
            </span>
            <div className="w-8 h-[2px] bg-accent" />
          </motion.div> */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bebas-neue text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.9]"
          >
            Metal Roofing Cost In Ontario
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-stretch">
          {/* Left: cost info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden"
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src="/images/content-image-3.webp"
                alt="Metal roofing installation cost and value in Ontario"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 xl:p-12 h-full flex flex-col justify-between min-h-[480px]">
              <div>
                <span className="font-outfit text-accent text-xs uppercase tracking-[0.35em] font-medium block mb-3">
                  Metal Roofing Cost
                </span>
                <h3 className="font-bebas-neue text-4xl text-white leading-[0.9] mb-6">
                  A Smart Long-Term<br />Investment
                </h3>
                <p className="font-outfit text-white/65 text-base leading-relaxed mb-8">
                  While metal roofing has a higher upfront cost than asphalt shingles, the
                  total cost of ownership over 50 years is significantly lower — when you factor
                  in replacements, repairs, and energy costs.
                </p>

                {/* Cost points */}
                <ul className="space-y-3">
                  {costPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="text-accent flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="font-outfit text-white/75 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price callout */}
              <div className="mt-8 bg-white/10 border border-white/15 rounded-xl p-5">
                <p className="font-outfit text-white/50 text-xs uppercase tracking-widest mb-1">
                  Free No-Obligation Estimate
                </p>
                <p className="font-bebas-neue text-3xl text-white leading-none">
                  Contact Us For Pricing
                </p>
                <p className="font-outfit text-white/60 text-xs mt-1">
                  Pricing varies by panel style, roof complexity &amp; size
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: value cards */}
          <div className="grid grid-cols-2 gap-4">
            {valueCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 group flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <card.icon size={18} className="text-accent" strokeWidth={1.75} />
                </div>

                {/* Stat */}
                <div className="font-bebas-neue text-4xl text-accent leading-none mb-0.5">
                  {card.stat}
                </div>
                <div className="font-outfit text-muted-foreground text-xs mb-3 uppercase tracking-wide">
                  {card.statLabel}
                </div>

                <h3 className="font-bebas-neue text-xl text-foreground group-hover:text-accent transition-colors leading-tight mb-2">
                  {card.title}
                </h3>
                <p className="font-outfit text-muted-foreground text-xs leading-relaxed flex-1">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#estimate"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-outfit font-semibold px-8 py-4 text-sm uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5"
          >
            Get Free Estimate
          </a>
          <a
            href="tel:6472657047"
            className="inline-flex items-center gap-2 border border-border text-foreground hover:border-accent hover:text-accent font-outfit font-medium px-8 py-4 text-sm transition-all duration-200"
          >
            Call (647) 265-7047
          </a>
        </motion.div>
      </div>
    </section>
  );
}
