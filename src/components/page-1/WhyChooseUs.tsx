import { DollarSign, Award, ShieldCheck, Clock, BadgePercent, Banknote } from "lucide-react";

const features = [
  { icon: DollarSign, title: "$4.99 Per Sq. Ft.", desc: "Including material and installation — the best price guaranteed" },
  { icon: BadgePercent, title: "We Beat Any Estimate by 5%", desc: "We will beat any written roofing estimate by 5%" },
  { icon: Award, title: "10 Year Labour Warranty", desc: "Full labour warranty for your complete peace of mind" },
  { icon: ShieldCheck, title: "Lifetime Shingle Warranty", desc: "Lifetime material warranty on all shingle products" },
  { icon: Clock, title: "WSIB Insured & Accredited", desc: "Fully insured, licensed, and WSIB accredited" },
  { icon: Banknote, title: "Financing Available", desc: "Flexible financing options to fit your budget" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[#1b212d] text-primary-foreground">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h4 className="font-space-grotesk text-accent text-xs tracking-[0.3em] uppercase font-bold mb-3">Why Us</h4>
          <h2 className="font-playfair-display max-w-xl font-black mx-auto text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[0.95] mb-6">
            Why Choose Canadian Roofers?
          </h2>
          <p className="text-primary-foreground/60 text-lg">
            We are the cheapest guaranteed! Quality roofing at unbeatable prices.
          </p>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative border border-primary-foreground/10 p-8 hover:border-accent/50 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500"></div>
              <div className="w-14 h-14 border border-accent/30 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                <f.icon className="text-accent-foreground" size={24} />
              </div>
              <h3 className="font-bold text-xl font-playfair-display text-primary-foreground mb-3">{f.title}</h3>
              <p className="text-primary-foreground/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
