import type { Metadata } from "next";
import AboutSection from "@/components/page-1/AboutSection";
import CTASection from "@/components/page-1/CTASection";
import HeroSection from "@/components/page-1/HeroSection";
import QuoteForm from "@/components/page-1/QuoteForm";
import ServicesSection from "@/components/page-1/ServicesSection";
import TestimonialsSection from "@/components/page-1/TestimonialsSection";
import WhyChooseUs from "@/components/page-1/WhyChooseUs";
import Footer from "@/components/page-1/Footer";
import GallerySection from "@/components/page-1/GallerySection";

export const metadata: Metadata = {
  title: "Toronto Roofing Contractors | $4.99/sq ft | Free Estimates | Canadian Roofers",
  description: "Toronto's most affordable roofing contractors. Only $4.99/sq ft including materials & installation. We beat any estimate by 5%. Free at-home estimates, 10-year warranty, WSIB insured. Serving Toronto, GTA & surrounding areas.",
  keywords: [
    "Toronto roofing contractors",
    "GTA roofing",
    "affordable roof installation",
    "roof replacement Toronto",
    "shingle roof installation",
    "roof repair Toronto",
    "flat roof installation",
    "roofing contractors near me",
    "cheap roofing Toronto",
    "best roofing company GTA"
  ],
  openGraph: {
    title: "Toronto Roofing Contractors | $4.99/sq ft | Free Estimates",
    description: "Toronto's most affordable roofing contractors. Only $4.99/sq ft including materials & installation. We beat any estimate by 5%. Free at-home estimates, 10-year warranty, WSIB insured.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toronto Roofing Contractors | $4.99/sq ft | Free Estimates",
    description: "Toronto's most affordable roofing contractors. Only $4.99/sq ft including materials & installation. We beat any estimate by 5%.",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <GallerySection />
      <CTASection />
      <QuoteForm />
      <Footer />
    </>
  );
}
