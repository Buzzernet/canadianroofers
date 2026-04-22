"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm2 from "@/components/shared/ContactForm2";

const ContactSection = () => {

  return (
    <section id="contact" className="bg-background">
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        {/* Left - large typography + contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-primary text-primary-foreground px-6 md:px-16 lg:px-20 py-20 lg:py-32 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-accent" />
              <span className="font-outfit text-accent text-sm uppercase tracking-[0.3em] font-medium">
                Get In Touch
              </span>
            </div>
            <h2 className="font-bebas-neue text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8">
              LET&apos;S<br />
              <span className="text-accent">BUILD</span><br />
              TOGETHER
            </h2>
            <p className="font-outfit text-primary-foreground/50 text-base max-w-md leading-relaxed">
              Submit the form and we will get back to you as soon as possible. All estimates are free, no-obligation.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <a href="tel:6472657047" className="flex items-center gap-4 group">
              <div className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center group-hover:border-accent transition-colors">
                <Phone className="w-4 h-4 text-accent" />
              </div>
              <div>
                <div className="font-outfit text-primary-foreground/40 text-xs uppercase tracking-widest">Phone</div>
                <div className="font-outfit text-primary-foreground font-medium">(647) 265-7047</div>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center">
                <Mail className="w-4 h-4 text-accent" />
              </div>
              <div>
                <div className="font-outfit text-primary-foreground/40 text-xs uppercase tracking-widest">Email</div>
                <div className="font-outfit text-primary-foreground font-medium"><a href="mailto:info@canadianroofers.ca" aria-label="Email us at info@canadianroofers.ca">info@canadianroofers.ca</a></div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-accent" />
              </div>
              <div>
                <div className="font-outfit text-primary-foreground/40 text-xs uppercase tracking-widest">Service Area</div>
                <div className="font-outfit text-primary-foreground font-medium">Toronto & GTA, Ontario</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right - form */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="px-6 md:px-16  py-10 lg:py-12 flex items-center justify-center"
        >
          <ContactForm2 className="w-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;