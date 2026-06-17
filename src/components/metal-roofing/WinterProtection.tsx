"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Snowflake, Shield, Zap, Cloud } from "lucide-react";

const weatherChallenges = [
  { icon: Snowflake, label: "Heavy Snow Loads", desc: "Metal sheds snow automatically" },
  { icon: Shield, label: "Ice Buildup", desc: "Eliminates ice dam formation" },
  { icon: Cloud, label: "Freeze-Thaw Cycles", desc: "Expands & contracts without cracking" },
  { icon: Zap, label: "Winter Protection", desc: "Continuous thermal barrier" },
];

const facts = [
  { value: "140+", label: "cm Average Ontario snowfall per year" },
  { value: "60%", label: "Fewer roof problems vs shingles in cold climates" },
  { value: "0", label: "Ice dams with properly installed metal roofing" },
];

export default function WinterProtection() {
  return (
    <section className="py-24 lg:py-32 bg-surface overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/content-image-4.webp"
                alt="Metal roofing handling Ontario winter snow and ice"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

              {/* Floating stats overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden">
                  {facts.map((f) => (
                    <div key={f.label} className="bg-primary/90 backdrop-blur-sm px-4 py-4 text-center">
                      <div className="font-bebas-neue text-2xl text-accent leading-none mb-1">
                        {f.value}
                      </div>
                      <div className="font-outfit text-white/60 text-[10px] leading-tight">
                        {f.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative accent block */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Content column */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px] bg-accent" />
                <span className="font-outfit text-accent text-xs uppercase tracking-[0.35em] font-medium">
                  Ontario Climate
                </span>
              </div>

              <h2 className="font-bebas-neue text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-foreground leading-[0.9] mb-6">
                Built For<br />
                Ontario&apos;s<br />
                <span className="text-accent">Harsh Winters</span>
              </h2>

              <p className="font-outfit text-muted-foreground text-base leading-relaxed mb-4 max-w-lg">
                Ontario experiences some of the most demanding roofing conditions in Canada. Heavy snow, freezing rain, ice buildup, and repeated freeze-thaw cycles can shorten the lifespan of many roofing systems.
              </p>
              <p className="font-outfit text-muted-foreground text-base leading-relaxed mb-4 max-w-lg">
                Metal roofing is engineered to perform exceptionally well during winter by allowing snow to slide off more easily and reducing moisture retention that can contribute to roofing damage.
              </p>
              <p className="font-outfit text-muted-foreground text-base leading-relaxed mb-4 max-w-lg">
                A properly installed metal roof can help protect your home against the challenges of Ontario weather while providing long-term peace of mind.
              </p>
              <p className="font-outfit text-muted-foreground text-base leading-relaxed mb-4 max-w-lg">
                Our experienced roofing team follows a detailed installation process to ensure maximum performance and longevity.
              </p>

              {/* Weather challenge cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {weatherChallenges.map((challenge, i) => (
                  <motion.div
                    key={challenge.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-border hover:border-accent/30 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <challenge.icon size={17} className="text-accent" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="font-outfit font-semibold text-foreground text-sm leading-tight">
                        {challenge.label}
                      </p>
                      <p className="font-outfit text-muted-foreground text-xs mt-0.5">
                        {challenge.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                href="#estimate"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-outfit font-semibold px-7 py-3.5 text-sm uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5"
              >
                Protect Your Home
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
