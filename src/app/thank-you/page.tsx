import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle2 } from "lucide-react";

const SITE_NAME = "Canadian Roofers";
const PHONE_DISPLAY = "(647) 265-7047";
const PHONE_TEL = "tel:6472657047";

const PAGE_DESCRIPTION =
  "Your free roofing estimate request was submitted successfully. Canadian Roofers will contact you shortly about your Toronto or GTA roofing project. Call (647) 265-7047 for urgent questions.";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Thank You — We Received Your Roofing Estimate Request",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/thank-you",
  },
  // noindex: avoids thin duplicate SERP entries; follow keeps link equity from this page.
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
  openGraph: {
    title: `Thank You | ${SITE_NAME}`,
    description:
      "Your roofing estimate request was received. We will contact you soon about your Toronto or GTA project.",
    url: "/thank-you",
    type: "website",
    locale: "en_CA",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary",
    title: `Thank You | ${SITE_NAME}`,
    description:
      "Your roofing estimate request was received. We will contact you soon.",
  },
};

export default function ThankYouPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "";

  const thankYouPath = "/thank-you";
  const absoluteThankYou = siteUrl ? `${siteUrl}${thankYouPath}` : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        ...(absoluteThankYou
          ? { "@id": `${absoluteThankYou}#webpage`, url: absoluteThankYou }
          : {}),
        name: `Thank You | ${SITE_NAME}`,
        description: PAGE_DESCRIPTION,
        inLanguage: "en-CA",
        isPartOf: {
          "@type": "WebSite",
          name: SITE_NAME,
          ...(siteUrl ? { url: siteUrl } : {}),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl ? `${siteUrl}/` : "/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Thank you",
            item: absoluteThankYou ?? thankYouPath,
          },
        ],
      },
    ],
  };

  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Event snippet for LEADS 2 conversion page — afterInteractive so gtag from root layout is available */}
      <Script id="google-ads-conversion-leads-2" strategy="afterInteractive">
        {`gtag('event', 'conversion', {'send_to': 'AW-18006693901/ORfhCN3nh4scEI2woYpD'});`}
      </Script>
      <a
        href="#thank-you-main"
        className="absolute left-[-10000px] top-auto z-[100] h-px w-px overflow-hidden focus:left-4 focus:top-4 focus:m-0 focus:h-auto focus:w-auto focus:overflow-visible focus:rounded-md focus:bg-accent focus:px-4 focus:py-3 focus:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
      >
        Skip to main content
      </a>

      <header className="border-b border-border  bg-[#152336]">
        <div className="container flex items-center justify-center py-5 sm:py-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Image
              src="/images/logo.webp"
              alt={`${SITE_NAME} — Return to homepage`}
              width={200}
              height={67}
              priority
              sizes="(max-width: 640px) 180px, 200px"
              className="h-auto w-[min(200px,50vw)]"
            />
          </Link>
        </div>
      </header>

      <main
        id="thank-you-main"
        tabIndex={-1}
        className="flex flex-1 flex-col outline-none"
      >
        <article className="container flex flex-1 flex-col py-10 sm:py-14 md:py-16">
          <header className="mx-auto max-w-2xl text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
              <CheckCircle2
                className="size-4 shrink-0 text-accent"
                aria-hidden
                strokeWidth={2.25}
              />
              Request received
            </p>
            <h1 className="font-playfair-display text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
              Thank you for contacting {SITE_NAME}
            </h1>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Your free roofing estimate request has been submitted successfully. A member of our team will review your
              details and reach out as soon as possible to discuss your roof replacement, repair, or installation needs
              across Toronto and the GTA.
            </p>
          </header>

          <section
            className="mx-auto mt-12 w-full max-w-2xl"
            aria-labelledby="next-steps-heading"
          >
            <h2
              id="next-steps-heading"
              className="font-outfit text-lg font-semibold text-foreground sm:text-xl"
            >
              What happens next
            </h2>
            <ol className="mt-5 list-decimal space-y-4 ps-5 text-left text-muted-foreground marker:text-accent sm:ps-6">
              <li className="ps-1 leading-relaxed">
                <span className="text-foreground">Confirmation.</span> You should receive an email confirmation shortly
                (check spam or promotions folders if you do not see it).
              </li>
              <li className="ps-1 leading-relaxed">
                <span className="text-foreground">Review.</span> We review your project details and availability for an
                on-site assessment or follow-up call.
              </li>
              <li className="ps-1 leading-relaxed">
                <span className="text-foreground">Estimate.</span> We prepare a clear, no-obligation estimate tailored to
                your roof and budget.
              </li>
            </ol>
          </section>

          <section
            className="mx-auto mt-12 w-full max-w-2xl rounded-xl border border-border bg-card p-6 sm:p-8"
            aria-labelledby="contact-heading"
          >
            <h2 id="contact-heading" className="font-outfit text-lg font-semibold text-foreground sm:text-xl">
              Need to speak with someone sooner?
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              For urgent questions or to schedule by phone, call us at{" "}
              <a
                href={PHONE_TEL}
                className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent/90 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={`Call ${SITE_NAME} at ${PHONE_DISPLAY}`}
              >
                {PHONE_DISPLAY}
              </a>
              . We are happy to help with roof leaks, storm damage, quotes, and warranty questions.
            </p>
          </section>

          <nav
            className="mx-auto mt-12 flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4"
            aria-label="Continue browsing"
          >
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-6 py-2.5 text-center text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:min-h-12 sm:text-base"
            >
              Return to homepage
            </Link>
            <Link
              href="/landingpage2"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-background px-6 py-2.5 text-center text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:min-h-12 sm:text-base"
            >
              View services overview
            </Link>
          </nav>
        </article>
      </main>

      <footer className="mt-auto border-t border-border bg-muted/40" role="contentinfo">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. Licensed, insured, and WSIB accredited. Serving Toronto and the
            Greater Toronto Area.
          </p>
        </div>
      </footer>
    </div>
  );
}
