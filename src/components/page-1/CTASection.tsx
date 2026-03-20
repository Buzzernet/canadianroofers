import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container text-center">
        <h2 className="font-playfair-display font-black text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[0.9] max-w-md mx-auto mb-6">
          Ready For A New Roof?
        </h2>
        <p className="text-primary-foreground/80 text-xl mb-2 font-semibold">
          Only $4.99 Per Square Foot — Material & Labour Included
        </p>
        <p className="text-primary-foreground/60 mb-6">
          Free Gutter Cleaning With Every Roof Replacement
        </p>
        {/* <div className="flex justify-center mb-6">
          <GoogleStars size="md" className="[&_span]:text-primary-foreground [&_.text-muted-foreground]:text-primary-foreground/70" />
        </div> */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#quote"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-accent-foreground font-space-grotesk font-bold text-lg px-10 py-4 rounded-lg transition-colors shadow-lg"
          >
            Get A Free Estimate
          </a>
          <a
            href="tel:6472657047"
            className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/30 font-space-grotesk font-bold text-lg px-10 py-4 rounded-lg transition-colors"
          >
            <Phone size={20} />
            (647) 265-7047
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
