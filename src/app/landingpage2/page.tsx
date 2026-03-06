import type { Metadata } from "next";
import AboutSection from "@/components/page-2/AboutSection";
import ContactSection from "@/components/page-2/ContactSection";
import CTASection from "@/components/page-2/CTASection";
import HeroSection from "@/components/page-2/HeroSection";
import ServicesSection from "@/components/page-2/ServicesSection";
import TestimonialsSection from "@/components/page-2/TestimonialsSection";
import WhyChooseUs from "@/components/page-2/WhyChooseUs";
import GallerySection from "@/components/page-2/GallerySection";
import Footer from "@/components/page-2/Footer";

export const metadata: Metadata = {
  title: "GTA Roofing Experts | Beat Any Estimate 5% | Lifetime Warranty | Canadian Roofers",
  description: "Toronto & GTA's most affordable roofing experts. $4.99/sq ft all-inclusive. We beat any written estimate by 5%. Lifetime material warranty, 10-year labour warranty, WSIB insured. Free estimates & gutter cleaning included.",
  keywords: [
    "GTA roofing experts",
    "Toronto roof replacement",
    "affordable roofing GTA",
    "roof installation Mississauga",
    "roofing contractors Brampton",
    "best roofing company Toronto",
    "cheap roof installation",
    "roof repair GTA",
    "shingle roof contractors",
    "flat roof specialists Toronto"
  ],
  openGraph: {
    title: "GTA Roofing Experts | Beat Any Estimate 5% | Lifetime Warranty",
    description: "Toronto & GTA's most affordable roofing experts. $4.99/sq ft all-inclusive. We beat any written estimate by 5%. Lifetime material warranty, 10-year labour warranty, WSIB insured.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTA Roofing Experts | Beat Any Estimate 5% | Lifetime Warranty",
    description: "Toronto & GTA's most affordable roofing experts. $4.99/sq ft all-inclusive. We beat any written estimate by 5%.",
  },
};

export default function Page2() {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <WhyChooseUs />
            <GallerySection />
            <TestimonialsSection />
            <CTASection />
            <ContactSection />
            <Footer />
        </>
    );
}