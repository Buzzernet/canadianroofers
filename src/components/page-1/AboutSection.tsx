const AboutSection = () => {
  return (
    <section className="py-24 bg-[#f6f4ee]" id="about">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img
                src={`/images/content-image-1.webp`}
                alt="Canadian Roofers professional installing shingles"
                className="w-full object-cover aspect-[4/5] z-20"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent z-0" />
            <div className="absolute -top-4 -right-4 z-20 bg-[#1b212d] max-w-[8rem] text-accent-foreground font-playfair-display font-black text-3xl px-6 py-3 ">
              $4.99 <span className="font-mono text-[10px] tracking-wider uppercase text-primary-foreground/70">per sq ft</span>
            </div>

          </div>

          <div className="space-y-6">
            <h4 className="font-space-grotesk text-accent text-xs tracking-[0.3em] uppercase font-bold mb-3">About Us</h4>
            <h2 className="font-playfair-display font-black text-4xl md:text-5xl text-foreground leading-[0.95] mb-6 ">
              Toronto & GTA's Trusted Roofing Experts
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Canadian Roofers we offer the best pricing and roofing options in Toronto and all across the GTA. Our professional roofing contractors provide free roof estimates and give you the best solutions for all your roofing needs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              To obtain a free roof estimate please submit the form below and we will get back to you as soon as possible, or give us a call at <a href="tel:4377033625" className="text-accent font-semibold hover:underline">(437) 703-3625</a>. Estimates are free!
            </p>
            {/* <GoogleStars size="md" /> */}
            <img src={`/images/google-reviews.png`} className="w-[120px] my-6" alt="google-review" />
            <a
              href="#quote"
              className="inline-flex items-center bg-primary hover:bg-primary-light text-primary-foreground font-space-grotesk font-bold text-sm tracking-wider uppercase px-8 py-4 transition-all hover:translate-y-[-2px] hover:shadow-lg justify-center bg-[#1b212d] shadow-md"
            >
              Get A Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
