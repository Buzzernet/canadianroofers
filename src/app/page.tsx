
import AboutSection from "@/components/page-1/AboutSection";
import CTASection from "@/components/page-1/CTASection";
import HeroSection from "@/components/page-1/HeroSection";
import QuoteForm from "@/components/page-1/QuoteForm";
import ServicesSection from "@/components/page-1/ServicesSection";
import TestimonialsSection from "@/components/page-1/TestimonialsSection";
import WhyChooseUs from "@/components/page-1/WhyChooseUs";
import Footer from "@/components/page-1/Footer";
import GallerySection from "@/components/page-1/GallerySection";
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
