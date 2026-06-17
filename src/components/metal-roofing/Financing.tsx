import Image from "next/image";
import { Banknote, CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  "Low monthly payments",
  "Flexible terms available",
  "Quick approval process",
  "No large upfront cost",
  "Apply in minutes",
];

export default function Financing() {
  return (
    <section className="py-20 lg:py-28 bg-surface overflow-hidden">
      <div className="container">
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(215,70%,18%) 0%, hsl(215,80%,12%) 50%, hsl(215,70%,22%) 100%)",
          }}
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Accent gradient orb */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 p-8 sm:p-12 lg:p-16 items-center">
            {/* Left */}
            <div>
              {/* Icon badge */}
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-2 rounded-full mb-6">
                <Banknote size={16} />
                <span className="font-outfit text-sm font-semibold uppercase tracking-wider">
                  Financing Available
                </span>
              </div>

              <h2 className="font-bebas-neue text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.9] mb-5">
                Upgrade Your Roof<br />
                <span className="text-accent">Without A Large</span><br />
                Upfront Cost
              </h2>

              <p className="font-outfit text-white/65 text-lg leading-relaxed mb-4 max-w-4xl">
                Don&apos;t let budget hold you back from protecting your home. Our flexible
                financing options make premium metal roofing accessible for every Ontario homeowner.
              </p>

              <p className="font-outfit text-white/65 text-lg leading-relaxed mb-4 max-w-4xl">Upgrade to a premium metal roof without the burden of a large upfront
payment.</p>
<p className="font-outfit text-white/65 text-lg leading-relaxed mb-4 max-w-4xl">
Canadian Roofers offers flexible financing options that allow homeowners
to spread the cost of their roofing investment through convenient monthly
payments.</p>
<p className="font-outfit text-white/65 text-lg leading-relaxed mb-4 max-w-4xl">
Ask our team about available financing programs during your free estimate.</p>


              {/* <ul className="space-y-3 mb-10">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-accent flex-shrink-0" strokeWidth={2} />
                    <span className="font-outfit text-white/80 text-base">{feature}</span>
                  </li>
                ))}
              </ul> */}

              <a
                href="#estimate"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-outfit font-semibold px-8 py-4 text-sm uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
              >
                Check Financing Options
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Right: image */}
            <div className="flex justify-center lg:justify-end self-stretch">
              <div className="relative rounded-2xl overflow-hidden w-full max-w-sm min-h-[420px]">
                <Image
                  src="/images/content-image-2.webp"
                  alt="Canadian Roofers professional metal roofing installation in Ontario"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 384px"
                  loading="lazy"
                />
                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061320]/70 via-[#061320]/10 to-transparent" />
                {/* Caption */}
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-outfit text-center text-white/90 text-sm font-medium leading-snug">
                    Certified professionals serving Ontario homeowners since 2010
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
