"use client";

import { motion } from "framer-motion";
import { Shield, DollarSign, Clock, Award, Hammer, HeartHandshake } from "lucide-react";

const features = [
  { icon: DollarSign, title: "Best Pricing Guaranteed", desc: "Only $4.99/sq ft. We beat any written estimate by 5%." },
  { icon: Shield, title: "WSIB Insured", desc: "Fully insured and accredited for your peace of mind." },
  { icon: Clock, title: "10 Year Labour Warranty", desc: "Decade-long labour warranty on all roofing projects." },
  { icon: Award, title: "Lifetime Material Warranty", desc: "Lifetime shingle and material warranty included." },
  { icon: Hammer, title: "Free Gutter Cleaning", desc: "Complimentary gutter cleaning with roof replacement." },
  { icon: HeartHandshake, title: "Free At-Home Estimates", desc: "No-obligation, free roof estimates at your home." },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding py-32 px-4 relative overflow-hidden bg-[#f9fafb]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-outfit text-accent text-sm uppercase tracking-[0.3em] font-medium"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bebas-neue text-6xl md:text-8xl text-foreground mt-3 leading-[0.9]"
          >
            THE CANADIAN<br />ROOFERS <span className="text-accent">ADVANTAGE</span>
          </motion.h2>
        </div>

        {/* Cards in 2x3 grid with alternating sizes */}
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-background p-10 md:p-12 group hover:bg-primary transition-colors duration-500 cursor-default"
            >
              <feature.icon className="w-8 h-8 text-accent mb-8" />
              <h3 className="font-bebas-neue text-3xl text-foreground group-hover:text-primary-foreground transition-colors mb-3">
                {feature.title}
              </h3>
              <p className="font-outfit text-muted-foreground group-hover:text-primary-foreground/60 transition-colors text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;