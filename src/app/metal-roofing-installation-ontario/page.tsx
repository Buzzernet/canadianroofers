import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import BaseLayout from "@/components/BaseLayout";
import Footer from "@/components/landingpageA/Footer";
import Hero from "@/components/metal-roofing/Hero";
import Benefits from "@/components/metal-roofing/Benefits";
import WinterProtection from "@/components/metal-roofing/WinterProtection";
import InstallationProcess from "@/components/metal-roofing/InstallationProcess";
import CostValue from "@/components/metal-roofing/CostValue";
import Financing from "@/components/metal-roofing/Financing";
import WhyChooseUs from "@/components/metal-roofing/WhyChooseUs";
import CTA from "@/components/metal-roofing/CTA";

export const metadata: Metadata = {
  title: "Metal Roofing Installation Ontario | Canadian Roofers",
  description:
    "Professional metal roofing installation across Ontario. 40–70+ year lifespan, snow-shedding, ice dam protection, energy efficient. Licensed & insured. Free estimates. Call (647) 265-7047.",
  keywords: [
    "metal roofing installation Ontario",
    "Ontario metal roofing",
    "metal roof installation",
    "metal roofing contractors Ontario",
    "metal roof replacement Ontario",
    "metal roofing Toronto",
    "standing seam metal roof Ontario",
    "residential metal roofing Ontario",
    "metal roof cost Ontario",
    "best metal roofing company Ontario",
  ],
  alternates: {
    canonical: "https://canadianroofers.ca/metal-roofing-installation-ontario",
  },
  openGraph: {
    title: "Metal Roofing Installation Ontario | Canadian Roofers",
    description:
      "Professional metal roofing installation across Ontario. 40–70+ year lifespan, snow-shedding, ice dam protection. Licensed & insured. Free estimates.",
    url: "https://canadianroofers.ca/metal-roofing-installation-ontario",
    siteName: "Canadian Roofers",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://canadianroofers.ca/og-image.png",
        width: 1200,
        height: 630,
        alt: "Metal roofing installation in Ontario by Canadian Roofers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metal Roofing Installation Ontario | Canadian Roofers",
    description:
      "Professional metal roofing installation across Ontario. 40–70+ year lifespan, snow-shedding, ice dam protection. Free estimates.",
    images: ["https://canadianroofers.ca/og-image.png"],
  },
};

export default function MetalRoofingPage() {
  return (
    <BaseLayout>
      {/* ── Sticky header ── */}
      {/* <header className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/95 backdrop-blur-md border-b border-white/[0.06]">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" aria-label="Canadian Roofers — Homepage">
            <Image
              src="/images/logo.webp"
              alt="Canadian Roofers"
              width={160}
              height={52}
              className="w-auto h-8"
              priority
            />
          </Link>
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:6472657047"
              className="hidden sm:inline-flex items-center gap-1.5 text-white/70 hover:text-white font-outfit text-sm transition-colors"
            >
              <Phone size={14} />
              (647) 265-7047
            </a>
            <a
              href="#estimate"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-outfit font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2.5 uppercase tracking-wider transition-all duration-200"
            >
              Free Estimate
            </a>
          </div>
        </div>
      </header> */}

      {/* ── Page content ── */}
      <main id="main-content">
        <Hero />

        {/* Marquee service strip */}
        <div className="bg-accent py-3 overflow-hidden" aria-hidden>
          <div className="marquee whitespace-nowrap flex gap-12">
            {[...Array(2)].map((_, rep) => (
              <span key={rep} className="flex gap-12 items-center">
                {[
                  "METAL ROOFING",
                  "STANDING SEAM",
                  "SNOW SHEDDING",
                  "ICE DAM PROTECTION",
                  "ENERGY EFFICIENT",
                  "40–70 YEAR LIFESPAN",
                  "FREE ESTIMATES",
                  "LICENSED & INSURED",
                ].map((s) => (
                  <span
                    key={s + rep}
                    className="font-bebas-neue text-white/90 text-2xl tracking-wider flex items-center gap-12"
                  >
                    {s}{" "}
                    <span className="text-white/30">✦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <Benefits />
        <WinterProtection />
        <InstallationProcess />
        <CostValue />
        <Financing />
        <WhyChooseUs />
        <CTA />
      </main>

      <Footer />
    </BaseLayout>
  );
}
