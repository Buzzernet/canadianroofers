"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import GoogleStars from "./GoogleStars";

const QuoteForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    alert("Thank you! We will get back to you shortly with your free estimate.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-20 bg-surface" id="quote">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-playfair-display font-black text-4xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-4">
              Request A Free Roof Estimate
            </h2>
            <p className="text-muted-foreground text-lg mb-3">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <GoogleStars size="md" className="justify-center" />
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-md p-8 border border-border space-y-5">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                placeholder="Your name"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Phone</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                  placeholder="(416) 000-0000"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition resize-none"
                placeholder="Tell us about your roofing needs..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-accent-foreground font-space-grotesk font-bold text-lg py-4 rounded-lg transition-colors shadow-md"
            >
              <Send size={20} />
              Submit Free Estimate Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
