import type { Metadata } from "next";
import LandingPageA from "@/components/landingpageA";
import { seoGenerateMetadata } from "@/components/Seo";

export const dynamic = "force-dynamic"; // always run on each request
const metaTitle =
  "Roofing Company in Toronto | Repair & Installation Experts";
const metaDescription =
  "Top-rated roofing company in Toronto offering roof repair, replacement, installation & emergency services. Affordable, fast & reliable roofing solutions.";

export const metadata: Metadata = seoGenerateMetadata({
  title: metaTitle,
  description: metaDescription,
  url: "/",
  imageUrl: "/og-image.png",
  imageAlt:
    "Roofing company in Toronto providing roof repair and installation services",
  twitterSite: process.env.NEXT_PUBLIC_TWITTER_SITE,
  twitterCreator: process.env.NEXT_PUBLIC_TWITTER_CREATOR,
});

export default async function Home() {
  return <LandingPageA />;
}