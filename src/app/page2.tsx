import type { Metadata } from "next";
import { headers } from "next/headers";
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

export const dynamic = "force-dynamic";

export default async function Home() {
  const headersList = await headers();
  const variant = headersList.get("x-ab-variant") ?? "A";

  if (variant === "B") {
    return <LandingPageB />;
  }

  return <LandingPageA />;
}
