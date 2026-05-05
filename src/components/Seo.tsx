import type { Metadata } from "next";

interface SeoProps {
  title?: string;
  description?: string;
  url?: string;
  imageUrl?: string;
  imageAlt?: string;
  siteName?: string;
  locale?: string;
  type?: "website" | "article";
  twitterSite?: string;
  twitterCreator?: string;
}

const META_KEYWORDS = [
  "Roofing Company in Toronto",
  "Roofing Service In Toronto",
  "Roofing Contractors in Canada",
  "Roof Installation in Toronto",
  "Roof Replacement in Toronto",
  "Roof Repair in Toronto",
  "Roof Leak Repair in Toronto",
  "Emergency Roof Repair in Toronto",
  "Gutter Installation in Toronto",
  "Skylight Installation in Toronto",
  "Eavestrough Installation in Toronto",
  "Shingle Roof Installation in Toronto",
  "Shingle Roof Installation in Canada",
  "Residential Roofing Services in Toronto",
  "Affordable Roofing Services in Toronto",
];

const DEFAULT_SITE_NAME = "Canadian Roofers";
const DEFAULT_LOCALE = "en_CA";
const DEFAULT_IMAGE_ALT =
  "Canadian Roofers Toronto roof repair and installation services";

function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://canadianroofers.ca/";
}

function toAbsoluteUrl(pathOrUrl: string) {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const siteUrl = getSiteUrl().replace(/\/$/, "");
  const cleanPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${siteUrl}${cleanPath}`;
}

export function seoGenerateMetadata({
  title,
  description,
  url,
  imageUrl,
  imageAlt,
  siteName,
  locale,
  type,
  twitterSite,
  twitterCreator,
}: SeoProps): Metadata {
  const metaImageUrl = imageUrl ?? "/og-image.png";
  const metaImageAlt = imageAlt ?? DEFAULT_IMAGE_ALT;
  const ogSiteName = siteName ?? DEFAULT_SITE_NAME;
  const ogLocale = locale ?? DEFAULT_LOCALE;
  const ogType = type ?? "website";

  const absoluteImage = toAbsoluteUrl(metaImageUrl);
  const absolutePageUrl = url ? toAbsoluteUrl(url) : undefined;

  return {
    ...(absolutePageUrl
      ? {
          alternates: {
            canonical: absolutePageUrl,
            languages: {
              "en-CA": absolutePageUrl,
              "x-default": absolutePageUrl,
            },
          },
        }
      : {}),
    title,
    description,
    keywords: META_KEYWORDS,
    openGraph: {
      title,
      description,
      siteName: ogSiteName,
      locale: ogLocale,
      type: ogType,
      images: [
        {
          url: absoluteImage,
          width: 1200,
          height: 630,
          alt: metaImageAlt,
        },
      ],
      ...(absolutePageUrl ? { url: absolutePageUrl } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteImage],
      ...(twitterSite ? { site: twitterSite } : {}),
      ...(twitterCreator ? { creator: twitterCreator } : {}),
    },
    other: {
      "twitter:image:alt": metaImageAlt,
    },
  };
}
