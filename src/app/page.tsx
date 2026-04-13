// src/app/page.tsx
import { headers } from "next/headers";
import LandingPageA from "@/components/landingpageA";
import LandingPageB from "@/components/landingpageB";

export const dynamic = "force-dynamic"; // always run on each request

export default async function Home() {
  const headersList = await headers();
  const variant = headersList.get("x-ab-variant") ?? "A";

  return variant === "B" ? <LandingPageB /> : <LandingPageA />;
}