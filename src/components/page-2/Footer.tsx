import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Top: large brand */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-12">
          {/* Left: content info */}
          <div>
            <img
              src={`/images/logo.webp`}
              alt="Canadian Roofers"
              className="w-[250px] h-[120px]"
            ></img>
            <p className="font-outfit text-primary-foreground/40 text-sm my-3 max-w-sm">
              High quality & affordable roofing solutions for Toronto and the GTA. Only $4.99/sq ft.
            </p>
            <span className="font-outfit text-primary-foreground/30 text-xs uppercase tracking-widest">
              © {new Date().getFullYear()} Canadian Roofers. All rights reserved.
            </span>
          </div>
          {/* Right: content info */}
          <div className="md:max-w-2xl w-full text-primary-foreground/40 md:text-lg text-base leading-[130%] md:mt-5">
            Our Toronto, GTA  based professional roofing contractors provide free roof estimates and give you the best solutions for all your roofing needs. To obtain the free roof estimates please submit the form above and we will get back to you as soon as possible.  or give us a call at (647) 265-7047. Estimates are free!
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;