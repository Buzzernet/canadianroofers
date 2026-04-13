import type { Metadata } from "next";
import { cookies } from "next/headers";
import LandingPageA from "@/components/landingpageA";
import LandingPageB from "@/components/landingpageB";
import { AB_COOKIE_NAME, AB_TTL_SECONDS } from "@/lib/ab-testing";
import { resolveAbVariantFromCookie } from "@/lib/pick-ab-variant";

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
  const cookieStore = await cookies();
  const raw = cookieStore.get(AB_COOKIE_NAME)?.value;
  const variant = resolveAbVariantFromCookie(
    raw,
    Date.now(),
    AB_TTL_SECONDS * 1000,
  );

  if (variant === "B") {
    return <LandingPageB />;
  }

  return <LandingPageA />;
}
