import Image from "next/image";

// Get current year at build time to avoid hydration issues
const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  return (
    <footer 
      className="bg-primary-dark text-primary-foreground"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-start items-center">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <Image 
                src="/images/logo.webp" 
                alt="Canadian Roofers - Professional Roofing Services in Toronto and GTA" 
                width={240}
                height={80}
                className="max-w-[240px] w-auto h-auto"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 240px"
                fetchPriority="low"
              />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              High quality and affordable roofing services across Toronto and the Greater Toronto Area. Licensed, insured, and WSIB accredited.
            </p>
            
            <p className="text-primary-foreground/50 text-sm" aria-label={`Copyright ${CURRENT_YEAR}`}>
              © {CURRENT_YEAR} Canadian Roofers. All rights reserved.
            </p>
          </div>
          
          <div className="md:col-span-2 flex justify-end">
            <p className="text-primary-foreground/70 text-base leading-relaxed max-w-2xl">
              Our Toronto, GTA based professional roofing contractors provide free roof estimates and give you the best solutions for all your roofing needs. To obtain the free roof estimates please submit the form above and we will get back to you as soon as possible. or give us a call at{" "}
              <a 
                href="tel:6472657047" 
                className="text-accent hover:text-accent/80 underline transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-dark rounded"
                aria-label="Call us at (647) 265-7047"
              >
                (647) 265-7047
              </a>
              . Estimates are free!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
