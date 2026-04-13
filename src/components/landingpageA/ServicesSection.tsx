import type { LucideIcon } from "lucide-react";
import { Home, Shield, Wind, Layers, Droplets, Sun, Wrench, Scissors, PaintBucket } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const services: Service[] = [
  { icon: Home, title: "Shingle Roof Installations", desc: "Premium asphalt shingle installations for residential homes" },
  { icon: Shield, title: "Leak Protection & Repairs", desc: "Animal & weather damage repairs with lasting protection" },
  { icon: Wind, title: "Vent & Turbine Replacement", desc: "Max vent, turbine, and exhaust vent replacement" },
  { icon: Layers, title: "Soffit & Fascia", desc: "Professional installation and repair services" },
  { icon: Droplets, title: "Eavestrough", desc: "Complete eavestrough installation and maintenance" },
  { icon: Sun, title: "Skylight Installation", desc: "Skylight installation and repair for natural light" },
  { icon: Wrench, title: "Chimney Roof Repairs", desc: "Expert chimney flashing and roof repair" },
  { icon: Scissors, title: "Gutter Services", desc: "Gutter cleaning, repairs, and replacement" },
  { icon: PaintBucket, title: "Roof Caulking", desc: "Professional caulking and recaulking services" },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-surface via-surface to-surface/95" id="services">
      <div className="container ">
        <div className="max-w-full mx-auto mb-16 grid md:grid-cols-2 justify-between items-end gap-10">
          <div className="">
            <h4 className="font-space-grotesk text-accent text-xs tracking-[0.3em] uppercase font-bold mb-3">What We Do</h4>
            <h2 className="font-black font-playfair-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[0.95]">
              Our Services
              <span className="block text-transparent tracking-tight [-webkit-text-stroke:2px_hsl(var(--foreground))]">
                That We Offer
              </span>
            </h2>
          </div>
          <div className="flex justify-end">
            <p className="text-muted-foreground text-base max-w-md leading-relaxed md:text-right ">
              At Canadian Roofers we offer the best pricing and roofing options in Toronto and all across the GTA.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-gradient-to-b from-surface via-surface to-surface/95  p-8  transition-all duration-500  overflow-hidden animate-fade-in-up hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0  group-hover:bg-black group-hover:text-white transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon container with enhanced hover effect */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start justify-start mb-6 group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-500">
                    <service.icon
                      className="text-[#ff851a] group-hover:text-accent transition-all duration-500 group-hover:scale-110"
                      size={28}
                    />
                  </div>
                  <span className="font-space-grotesk text-xs text-muted-foreground/40 group-hover:text-primary-foreground/50 tracking-wider transition-colors"> {String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-playfair-display font-bold text-xl text-foreground mb-3 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                {/* <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {service.desc}
                </p> */}
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/0 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
