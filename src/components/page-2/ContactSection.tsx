"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

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
              LET'S<br />
              <span className="text-accent">BUILD</span><br />
              TOGETHER
            </h2>
            <p className="font-outfit text-primary-foreground/50 text-base max-w-md leading-relaxed">
              Submit the form and we will get back to you as soon as possible. All estimates are free, no-obligation.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <a href="tel:4377033625" className="flex items-center gap-4 group">
              <div className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center group-hover:border-accent transition-colors">
                <Phone className="w-4 h-4 text-accent" />
              </div>
              <div>
                <div className="font-outfit text-primary-foreground/40 text-xs uppercase tracking-widest">Phone</div>
                <div className="font-outfit text-primary-foreground font-medium">(437) 703-3625</div>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center">
                <Mail className="w-4 h-4 text-accent" />
              </div>
              <div>
                <div className="font-outfit text-primary-foreground/40 text-xs uppercase tracking-widest">Email</div>
                <div className="font-outfit text-primary-foreground font-medium">info@roofinstaller.ca</div>
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
          className="px-6 md:px-16 lg:px-20 py-20 lg:py-32 flex items-center"
        >
          <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8">
            <div>
              <label className="block font-outfit text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-0 py-3 bg-transparent border-b-2 border-border text-foreground font-outfit text-lg placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block font-outfit text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-0 py-3 bg-transparent border-b-2 border-border text-foreground font-outfit text-lg placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block font-outfit text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-0 py-3 bg-transparent border-b-2 border-border text-foreground font-outfit text-lg placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors"
                placeholder="(XXX) XXX-XXXX"
              />
            </div>
            <div>
              <label className="block font-outfit text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Message</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-0 py-3 bg-transparent border-b-2 border-border text-foreground font-outfit text-lg placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Tell us about your roofing needs..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground font-outfit font-semibold px-8 py-4 text-base uppercase tracking-wider hover:bg-accent/90 transition-all group"
            >
              {submitted ? "Thank You! We'll Be in Touch." : (
                <>
                  Send Request
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;