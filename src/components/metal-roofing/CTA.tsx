import Image from "next/image";
import { CheckCircle2, Phone } from "lucide-react";

const checklist = [
  "Free Estimates",
  "Licensed & Insured",
  "Financing Available",
  "Professional Installation",
  "Premium Metal Roofing Systems",
];

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/slider-2.webp"
          alt="Canadian Roofers professional metal roof installation Ontario"
          fill
          className="object-cover object-center"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/97 via-primary/92 to-primary-dark/95" />
        {/* Diagonal pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "16px 16px",
          }}
        />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Overline */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="font-outfit text-accent text-xs uppercase tracking-[0.35em] font-medium">
              Get Started Today
            </span>
            <div className="w-8 h-[2px] bg-accent" />
          </div>

          {/* Headline */}
          <h2 className="font-bebas-neue text-5xl sm:text-6xl lg:text-8xl text-white leading-[0.88] mb-6">
            Get A Free Metal<br />
            Roofing <span className="text-accent">Estimate</span>
          </h2>

          {/* Subheadline */}
          <p className="font-outfit text-white/65 text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            Protect your Ontario home with a durable, premium metal roof.
            Contact us today for your no-obligation estimate.
          </p>

          {/* Checklist */}
          <div className="inline-grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 mb-12 text-left">
            {checklist.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-accent flex-shrink-0" strokeWidth={2} />
                <span className="font-outfit text-white/85 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#estimate"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-outfit font-semibold px-10 py-5 text-base uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-accent/40"
            >
              Schedule Free Consultation
            </a>
            <a
              href="#estimate"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/25 text-white font-outfit font-semibold px-10 py-5 text-base uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
            >
              Request Estimate
            </a>
          </div>

          {/* Phone CTA */}
          <div className="mt-8">
            <a
              href="tel:6472657047"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white font-outfit text-base transition-colors duration-200 group"
            >
              <Phone size={16} className="group-hover:text-accent transition-colors" />
              Or call us at{" "}
              <span className="font-semibold text-white group-hover:text-accent transition-colors">
                (647) 265-7047
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
