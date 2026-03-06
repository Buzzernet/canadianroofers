"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Toronto, ON",
    text: "Canadian Roofers did an amazing job on our roof replacement. The price was unbeatable and the quality of work was outstanding. Highly recommend!",
    rating: 5,
  },
  {
    name: "James K.",
    location: "Mississauga, ON",
    text: "Very professional team. They showed up on time, finished the job quickly, and cleaned up perfectly. The best roofing company in the GTA!",
    rating: 5,
  },
  {
    name: "Linda P.",
    location: "Brampton, ON",
    text: "Got our flat roof repaired and the eavestrough replaced. Excellent service and the 10-year warranty gives us great peace of mind.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-padding bg-secondary/50 py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: label + giant quote mark */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-outfit text-accent text-sm uppercase tracking-[0.3em] font-medium">Testimonials</span>
            <h2 className="font-bebas-neue text-6xl md:text-8xl text-foreground leading-[100%] mt-2 leading-[0.9]">
              WHAT OUR<br />CLIENTS <span className="text-accent">SAY</span>
            </h2>
            {/* Giant decorative quote */}
            <span className="font-bebas-neue text-[200px] md:text-[300px] leading-none text-border/50 select-none -mt-16 block">
              "
            </span>
            <img src={`/images/google-reviews.png`} alt="Google reviews" className="md:w-[140px] w-[100px] md:h-[55px] h-[40px] md:mt-[-170px] mt-[-110px]" />
          </motion.div>

          {/* Right: single testimonial with navigation */}
          <div>
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-12"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="font-outfit text-foreground text-2xl md:text-3xl leading-tight font-light mb-8">
                "{t.text}"
              </p>
              <div>
                <div className="font-bebas-neue text-2xl text-foreground">{t.name}</div>
                <div className="font-outfit text-muted-foreground text-sm uppercase tracking-widest">{t.location}</div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 border border-border hover:border-accent hover:text-accent flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 border border-border hover:border-accent hover:text-accent flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="font-outfit text-muted-foreground text-sm ml-4">
                {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;