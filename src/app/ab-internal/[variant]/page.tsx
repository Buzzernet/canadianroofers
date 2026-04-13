import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPageA from "@/components/landingpageA";
import LandingPageB from "@/components/landingpageB";

export const metadata: Metadata = {
  title:
    "Toronto Roofing Contractors | $4.99/sq ft | Free Estimates | Canadian Roofers",
  description:
    "Toronto's most affordable roofing contractors. Only $4.99/sq ft including materials & installation. We beat any estimate by 5%. Free at-home estimates, 10-year warranty, WSIB insured. Serving Toronto, GTA & surrounding areas.",
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
    "best roofing company GTA",
  ],
  openGraph: {
    title: "Toronto Roofing Contractors | $4.99/sq ft | Free Estimates",
    description:
      "Toronto's most affordable roofing contractors. Only $4.99/sq ft including materials & installation. We beat any estimate by 5%. Free at-home estimates, 10-year warranty, WSIB insured.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toronto Roofing Contractors | $4.99/sq ft | Free Estimates",
    description:
      "Toronto's most affordable roofing contractors. Only $4.99/sq ft including materials & installation. We beat any estimate by 5%.",
  },
};

type PageProps = {
  params: Promise<{ variant: string }>;
};

export default async function HomeAbPage({ params }: PageProps) {
  const { variant } = await params;

  if (variant !== "A" && variant !== "B") {
    notFound();
  }

  if (variant === "B") {
    return <LandingPageB />;
  }

  return <LandingPageA />;
}
