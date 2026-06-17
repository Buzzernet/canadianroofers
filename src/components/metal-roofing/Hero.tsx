"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Shield, CheckCircle2, CreditCard, Star, Clock } from "lucide-react";

const stats = [
  { value: "40–70+", label: "Year Lifespan" },
  { value: "Licensed", label: "Contractors" },
  { value: "Financing", label: "Available" },
];

const badges = [
  { label: "Free Estimates", icon: CheckCircle2 },
  { label: "Licensed & Insured", icon: Shield },
  { label: "Financing Available", icon: CreditCard },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/slider-1.webp"
          alt="Professional metal roofing installation in Ontario"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061320]/95 via-[#061320]/85 to-[#061320]/50" />
        {/* Subtle diagonal pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
            backgroundSize: "12px 12px",
          }}
        />
      </div>

      {/* Main grid */}
      <div className="relative z-10 container flex-1 grid lg:grid-cols-2 gap-8 xl:gap-16 pt-24 pb-16 lg:py-0 items-center min-h-screen">
        {/* ── Left: hero content ── */}
        <div className="flex flex-col justify-center">
          {/* Trust badges */}
          {/* <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {badges.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 text-white text-xs font-outfit font-medium px-3 py-1.5 rounded-full"
              >
                <Icon size={11} className="text-accent" />
                {label}
              </span>
            ))}
          </motion.div> */}

          {/* Overline */}
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-10 h-[2px] bg-accent" />
            <span className="font-outfit text-accent text-sm uppercase tracking-[0.3em] font-medium">
              Metal Roofing Installation In Ontario
            </span>
          </motion.h1>

          {/* H1 */}
          <div className="overflow-hidden mb-5">
            <motion.h2
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="font-bebas-neue text-[10vw] sm:text-5xl lg:text-6xl leading-[0.88] tracking-tight text-white"
            >
              Premium<br />
              <span className="text-accent">Metal Roofing</span><br />
              For Ontario Homes
            </motion.h2>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-outfit text-white/65 text-lg leading-relaxed mb-8"
          >
            A professionally installed metal roof provides exceptional protection against Ontario&apos;s harsh winters, heavy snow accumulation, freezing temperatures, and seasonal weather changes.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-outfit text-white/65 text-lg leading-relaxed mb-8"
          >
            Canadian Roofers specializes in metal roofing installation throughout Ontario, helping homeowners invest in a durable roofing system designed to last for decades. Whether you&apos;re replacing an aging asphalt roof or building a new home, our team delivers expert workmanship and premium metal roofing solutions.
            </motion.p>

            

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <a
              href="#estimate"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-outfit font-semibold px-8 py-4 text-sm uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
            >
              Get Free Estimate
            </a>
            <a
              href="tel:6472657047"
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-outfit font-medium px-8 py-4 text-sm hover:bg-white/10 transition-all duration-200"
            >
              <Phone size={15} />
              (647) 265-7047
            </a>
          </motion.div>

          {/* Stats strip */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="flex flex-wrap gap-0 divide-x divide-white/15 border-t border-white/10 pt-8"
          >
            {stats.map((s) => (
              <div key={s.value} className="pr-8 first:pl-0 pl-8 first:pr-8">
                <div className="font-bebas-neue text-2xl text-accent leading-none mb-0.5">{s.value}</div>
                <div className="font-outfit text-white/45 text-xs uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </motion.div> */}
        </div>

        {/* ── Right: form card ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          id="estimate"
          className="flex items-center justify-center lg:py-12"
        >
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/10">
            {/* Card header */}
            <div className="bg-primary px-6 py-3">
              <h2 className="font-bebas-neue text-2xl text-white text-center leading-tight">
                Get A Free Metal Roofing Estimate
              </h2>
              {/* <div className="flex items-center gap-2 mt-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#ff851a" stroke="none" />
                  ))}
                </div>
                <span className="font-outfit text-white/65 text-xs">
                  Trusted by 500+ Ontario homeowners
                </span>
              </div> */}
            </div>

            {/* Zoho iframe */}
            <div className="bg-white">
              <iframe
                aria-label="Canadian Roofers Metal Roofing - Free Estimate Form"
                title="Canadian Roofers Metal Roofing - Free Estimate Form"
                frameBorder={0}
                style={{ height: "700px", width: "99%", border: "none", display: "block" }}
                src="https://forms.zohopublic.ca/bimg/form/CanadianRoofersMetalRoofingFreeEstimateForm/formperma/B8sJkiFOthWP1mX3PQJ_HUyusNgSsNItVLP7ZEWB3DY"
                loading="lazy"
              />
            </div>

            {/* Card footer */}
            {/* <div className="bg-gray-50 border-t border-gray-100 px-6 py-3 flex items-center justify-between flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 font-outfit text-[11px] text-muted-foreground">
                <Shield size={10} className="text-accent" /> Licensed &amp; Insured
              </span>
              <span className="inline-flex items-center gap-1 font-outfit text-[11px] text-muted-foreground">
                <CheckCircle2 size={10} className="text-accent" /> No Obligation
              </span>
              <span className="inline-flex items-center gap-1 font-outfit text-[11px] text-muted-foreground">
                <Clock size={10} className="text-accent" /> Quick Response
              </span>
            </div> */}
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="relative z-10 flex justify-center pb-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-1"
        >
          <div className="w-[1px] h-8 bg-white/20" />
          <span className="font-outfit text-white/30 text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
