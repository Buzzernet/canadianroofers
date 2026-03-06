import { Phone } from "lucide-react";

const StickyHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <span className="font-bebas-neue font-bold text-xl text-primary-foreground">
          Canadian Roofers
        </span>
        <div className="flex items-center gap-4">
          <a
            href="tel:4377033625"
            className="hidden sm:flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-colors"
          >
            <Phone size={16} />
            (437) 703-3625
          </a>
          <a
            href="#quote"
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-bebas-neue font-bold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Free Estimate
          </a>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
