import {
  Home,
  Building2,
  Warehouse,
  Layers,
  Phone,
  CheckCircle2,
  Ruler,
  TrendingUp,
  Package,
  Hammer,
  Wind,
  ShieldCheck,
  Star,
  BadgeCheck,
  MapPin,
  ArrowRight,
  Factory,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type PricingCard = {
  icon: LucideIcon;
  type: string;
  price: string;
  desc: string;
  isCommercial?: boolean;
};

type FeatureCard = {
  icon: LucideIcon;
  title: string;
  desc: string;
  materials?: string[];
};

type TrustBadge = {
  icon: LucideIcon;
  label: string;
};

const pricingCards: PricingCard[] = [
  {
    icon: Warehouse,
    type: "Average Size Shed",
    price: "$2,999 – $4,999",
    desc: "Detached garages, storage sheds, and small outbuildings with straightforward pitches.",
  },
  {
    icon: Home,
    type: "Small Bungalow",
    price: "$5,000 – $8,500",
    desc: "Single-storey homes with standard roof geometry and typical shingle replacement.",
  },
  {
    icon: Home,
    type: "Semi-Detached Home",
    price: "$6,500 – $10,000",
    desc: "Semi-detached properties with standard pitch and moderate roof complexity.",
  },
  {
    icon: Building2,
    type: "Detached 2-Storey Home",
    price: "$8,000 – $15,000",
    desc: "Full two-storey homes including valleys, hips, dormers, and larger square footage.",
  },
  {
    icon: Factory,
    type: "Large Custom Home",
    price: "$15,000 – $30,000+",
    desc: "Premium custom builds with complex rooflines, multiple slopes, and high-end materials.",
  },
  {
    icon: Layers,
    type: "Commercial Roofing",
    price: "Contact for Custom Pricing",
    desc: "Flat roofs, commercial membranes, and large-scale installations tailored to your project.",
    isCommercial: true,
  },
];

const featureCards: FeatureCard[] = [
  {
    icon: Ruler,
    title: "Roof Size",
    desc: "Larger roofs require significantly more materials and labour hours, directly impacting the total project cost.",
  },
  {
    icon: TrendingUp,
    title: "Roof Pitch & Complexity",
    desc: "Steeper or more complex rooflines require additional safety measures, specialized equipment, and extra time.",
  },
  {
    icon: Package,
    title: "Roofing Materials",
    desc: "Material choice is the single biggest cost variable — from economy asphalt to premium metal roofing systems.",
    materials: [
      "Asphalt Shingles",
      "Architectural Shingles",
      "Metal Roofing",
      "Flat Roofing",
      "Commercial Membrane",
    ],
  },
  {
    icon: Hammer,
    title: "Existing Roof Removal",
    desc: "Stripping and disposing of old roofing materials adds to both labour time and disposal costs.",
  },
  {
    icon: ShieldCheck,
    title: "Roof Deck Repairs",
    desc: "Damaged or rotten decking discovered during tear-off must be replaced before new materials are installed.",
  },
  {
    icon: Wind,
    title: "Ventilation",
    desc: "Proper attic ventilation extends roof lifespan and is frequently upgraded during a full replacement project.",
  },
];

const benefits: string[] = [
  "Better protection against weather and leaks",
  "Improved energy efficiency year-round",
  "Increased curb appeal and aesthetics",
  "Higher resale value for your home",
  "Long-term savings vs. repeated repairs",
];

const trustBadges: TrustBadge[] = [
  { icon: BadgeCheck, label: "Licensed" },
  { icon: ShieldCheck, label: "Insured" },
  { icon: Star, label: "Free Estimates" },
  { icon: MapPin, label: "Ontario Wide" },
];

const NewRoofCost = () => {
  return (
    <section id="roof-cost">

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <div className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-dark/60 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="container relative py-24 md:py-32 text-center">
          <span className="inline-block font-space-grotesk text-accent text-xs tracking-[0.3em] uppercase font-bold mb-5">
            Ontario Roofing Costs
          </span>

          <h1 className="font-playfair-display font-black text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.08] max-w-3xl mx-auto mb-6">
            Average Cost of a New Roof{" "}
            <span className="text-accent italic">in Ontario</span>
          </h1>

          <p className="text-primary-foreground/70 text-xl md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            One of the most common questions homeowners ask is:<br/> <span className="text-accent italic">"How much does a new roof cost in Ontario?"</span>
          </p>

          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            The truth is that roofing costs can vary significantly depending on the size of your home, the roofing materials selected, the complexity of the roof, and the condition of the existing roof structure. While every project is unique, the following estimates can help provide a general idea of what Ontario homeowners can expect to invest in a new roof.
          </p>

          

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-1.5 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/85 rounded-full px-4 py-2 text-sm font-space-grotesk font-medium backdrop-blur-sm"
              >
                <Icon size={13} className="text-accent" />
                {label}
              </div>
            ))}
          </div>

          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-accent-foreground font-space-grotesk font-bold text-base px-9 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Free Roofing Estimate
            <ArrowRight size={17} />
          </a>
        </div>
      </div>

      {/* ── 2. PRICING CARDS ────────────────────────────────────── */}
      <div className="bg-surface">
        <div className="container py-24">
          <div className="text-center mb-14">
            <span className="font-space-grotesk text-accent text-xs tracking-[0.3em] uppercase font-bold">
              Pricing Guide
            </span>
            <h2 className="font-playfair-display font-black text-3xl md:text-4xl lg:text-[2.75rem] text-foreground mt-3 leading-[1.1]">
              Roof Replacement Cost Estimates
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-base leading-relaxed">
              All prices include labour and materials. Final quotes depend on roof size, chosen materials, and project complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingCards.map(({ icon: Icon, type, price, desc, isCommercial }) => (
              <div
                key={type}
                className={`group relative flex flex-col rounded-2xl border bg-card p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden ${
                  isCommercial
                    ? "border-accent/30 bg-gradient-to-br from-primary/5 to-accent/5"
                    : "border-border hover:border-accent/25"
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      isCommercial
                        ? "bg-accent/15"
                        : "bg-primary/10 group-hover:bg-accent/10"
                    }`}
                  >
                    <Icon
                      size={22}
                      className={`transition-colors duration-300 ${
                        isCommercial
                          ? "text-accent"
                          : "text-primary group-hover:text-accent"
                      }`}
                    />
                  </div>
                  {isCommercial && (
                    <span className="text-xs font-space-grotesk font-bold text-accent bg-accent/10 border border-accent/20 rounded-full px-3 py-1">
                      Commercial
                    </span>
                  )}
                </div>

                <h3 className="font-playfair-display font-bold text-xl text-foreground mb-2">
                  {type}
                </h3>

                <p
                  className={`font-space-grotesk font-black text-2xl mb-3 ${
                    isCommercial ? "text-accent" : "text-primary"
                  }`}
                >
                  {price}
                </p>

                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {desc}
                </p>

                <div
                  className={`mt-6 pt-5 border-t ${
                    isCommercial ? "border-accent/20" : "border-border"
                  }`}
                >
                  {isCommercial ? (
                    <a
                      href="tel:6472657047"
                      className="inline-flex items-center gap-1.5 text-sm font-space-grotesk font-semibold text-accent hover:gap-3 transition-all duration-200"
                    >
                      <Phone size={13} />
                      Contact Us Today
                    </a>
                  ) : (
                    <a
                      href="#quote"
                      className="inline-flex items-center gap-1.5 text-sm font-space-grotesk font-semibold text-accent hover:gap-3 transition-all duration-200"
                    >
                      Get a Quote
                      <ArrowRight size={13} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. WHAT AFFECTS COSTS ───────────────────────────────── */}
      <div className="bg-gradient-to-b from-primary/5 via-surface to-surface">
        <div className="container py-24">
          <div className="text-center mb-14">
            <span className="font-space-grotesk text-accent text-xs tracking-[0.3em] uppercase font-bold">
              Cost Factors
            </span>
            <h2 className="font-playfair-display font-black text-3xl md:text-4xl lg:text-[2.75rem] text-foreground mt-3 leading-[1.1]">
              What Affects Roofing Costs
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-base leading-relaxed">
              Understanding these key factors will help you better anticipate your roofing investment and plan accordingly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map(({ icon: Icon, title, desc, materials }) => (
              <div
                key={title}
                className="group rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-accent/25 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon size={20} className="text-accent" />
                </div>

                <h3 className="font-playfair-display font-bold text-lg text-foreground mb-2">
                  {title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>

                {materials && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {materials.map((m) => (
                      <span
                        key={m}
                        className="text-xs font-space-grotesk font-semibold text-primary bg-primary/10 border border-primary/15 rounded-full px-3 py-1"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4. REPAIR VS REPLACE ────────────────────────────────── */}
      <div className="bg-surface">
        <div className="container py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Visual panel */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-dark via-primary to-primary-light aspect-[4/3] flex items-end order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex items-center justify-center">
                  <div className="w-32 h-32 bg-accent/15 rounded-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-accent/25 rounded-full flex items-center justify-center">
                      <Home size={40} className="text-accent" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-6 right-6 flex flex-col gap-3">
                {["15+ Year Roofs", "Recurring Leaks", "Widespread Damage"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-space-grotesk font-semibold text-primary-foreground/80 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-3 py-1.5 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="relative p-8 w-full">
                <p className="font-playfair-display font-bold text-xl text-primary-foreground">
                  Free Roof Inspections
                </p>
                <p className="text-primary-foreground/60 text-sm mt-1">
                  Across Ontario — No Obligation
                </p>
              </div>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-accent via-accent/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="font-space-grotesk text-accent text-xs tracking-[0.3em] uppercase font-bold">
                Expert Advice
              </span>

              <h2 className="font-playfair-display font-black text-3xl md:text-4xl lg:text-[2.75rem] text-foreground mt-3 mb-6 leading-[1.1]">
                Is It Better to Repair or Replace a Roof?
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                If your roof is approaching 15–25 years old, has widespread shingle damage, recurring leaks, or significant wear, a full replacement is often more cost-effective than repeated repairs. A new roof can improve your home's protection, energy efficiency, curb appeal, and resale value.
              </p>

              <ul className="space-y-3.5 mb-10">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={11} className="text-accent" />
                    </div>
                    <span className="text-foreground font-medium text-sm leading-snug">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#quote"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-primary-foreground font-space-grotesk font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Book Roof Inspection
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── 5. CTA BANNER ───────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative py-24 text-center">
          <span className="font-space-grotesk text-accent text-xs tracking-[0.3em] uppercase font-bold">
            Free No-Obligation Quote
          </span>

          <h2 className="font-playfair-display font-black text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.08] mt-4 mb-6 max-w-2xl mx-auto">
            Get an Accurate Roofing Quote
          </h2>

          <p className="text-primary-foreground/65 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
           While online estimates can provide a general guideline, the only way to determine the exact cost of your roof is through a professional inspection. Our experienced roofing specialists provide free, no-obligation roofing estimates throughout Ontario, helping homeowners understand their options and choose the best roofing solution for their property.
          </p>

          <p className="text-primary-foreground/65 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
           Contact Canadian Roofers today for a free roofing estimate and discover exactly what your new roof will cost.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-accent-foreground font-space-grotesk font-bold text-base px-10 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Free Roofing Estimate
              <ArrowRight size={17} />
            </a>
            <a
              href="tel:6472657047"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/25 font-space-grotesk font-bold text-base px-10 py-4 rounded-xl transition-all duration-200"
            >
              <Phone size={17} />
              Call Now
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default NewRoofCost;
