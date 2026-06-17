"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Shield, Hammer, Award, Package, FileText, Users } from "lucide-react";

interface TrustCard {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const cards: TrustCard[] = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    desc: "WSIB accredited and fully insured. You're fully protected throughout every stage of the project.",
  },
  {
    icon: Hammer,
    title: "Professional Installation",
    desc: "Factory-trained installers who follow manufacturer specifications for maximum warranty coverage.",
  },
  {
    icon: Award,
    title: "Warranty Protection",
    desc: "10-year labour warranty backed by lifetime manufacturer material warranties on all metal roofing systems.",
  },
  {
    icon: Package,
    title: "Premium Materials",
    desc: "We source only top-tier metal roofing products from trusted Canadian and North American manufacturers.",
  },
  {
    icon: FileText,
    title: "Free Estimates",
    desc: "Detailed, written no-obligation estimates — no hidden costs, no surprises at project completion.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    desc: "Hundreds of completed metal roofing projects across Ontario. Our experience speaks for itself.",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction Rate" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-surface overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-accent" />
            <span className="font-outfit text-accent text-xs uppercase tracking-[0.35em] font-medium">
              Why Us
            </span>
            <div className="w-8 h-[2px] bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bebas-neue text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.9] mb-5"
          >
            Why Choose<br />
            <span className="text-accent">Canadian Roofers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-outfit text-muted-foreground text-lg leading-relaxed"
          >
            Ontario homeowners trust us for metal roofing that performs, lasts, and looks exceptional —
            backed by credentials and warranties that protect your investment.
          </motion.p>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden mb-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white text-center py-8 px-4">
              <div className="font-bebas-neue text-4xl md:text-5xl text-accent leading-none mb-2">
                {stat.value}
              </div>
              <div className="font-outfit text-muted-foreground text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className="bg-white p-8 xl:p-10 group hover:bg-primary transition-colors duration-500 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-6 transition-colors duration-300">
                <card.icon size={22} className="text-accent" strokeWidth={1.75} />
              </div>
              <h3 className="font-bebas-neue text-2xl text-foreground group-hover:text-white transition-colors duration-300 leading-tight mb-3">
                {card.title}
              </h3>
              <p className="font-outfit text-muted-foreground group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
