import AboutSection from "@/components/page-2/AboutSection";
import ContactSection from "@/components/page-2/ContactSection";
import CTASection from "@/components/page-2/CTASection";
import HeroSection from "@/components/page-2/HeroSection";
import ServicesSection from "@/components/page-2/ServicesSection";
import TestimonialsSection from "@/components/page-2/TestimonialsSection";
import WhyChooseUs from "@/components/page-2/WhyChooseUs";
import GallerySection from "@/components/page-2/GallerySection";
import Footer from "@/components/page-2/Footer";

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