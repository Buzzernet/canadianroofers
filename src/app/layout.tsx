import type { Metadata } from "next";
import Script from "next/script";
import {
  Playfair_Display,
  Space_Grotesk,
  Bebas_Neue,
  DM_Sans,
  Outfit,
} from "next/font/google";
import "./globals.css";

function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://canadianroofers.ca";
}

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans ({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const fonts = [
  spaceGrotesk.variable,
  playfairDisplay.variable,
  bebasNeue.variable,
  outfit.variable,
  dmSans.variable,
].join(" ");

const twitterSite = process.env.NEXT_PUBLIC_TWITTER_SITE;
const twitterCreator = process.env.NEXT_PUBLIC_TWITTER_CREATOR;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Roofing Contractors Toronto & GTA | Affordable Roof Repair & Installation",
    template: "%s",
  },
  description:
    "Professional roofing contractors in Toronto & GTA offering roof repair, installation, shingles, gutters & skylights. Get a free estimate today with affordable pricing and warranty.",
  openGraph: {
    title:
      "Roofing Contractors Toronto & GTA | Affordable Roof Repair & Installation",
    description:
      "Professional roofing contractors in Toronto & GTA offering roof repair, installation, shingles, gutters & skylights. Get a free estimate today with affordable pricing and warranty.",
    url: "/",
    siteName: "Canadian Roofers",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Canadian Roofers Toronto roof repair and installation services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Roofing Contractors Toronto & GTA | Affordable Roof Repair & Installation",
    description:
      "Professional roofing contractors in Toronto & GTA offering roof repair, installation, shingles, gutters & skylights. Get a free estimate today with affordable pricing and warranty.",
    images: ["/og-image.png"],
    ...(twitterSite ? { site: twitterSite } : {}),
    ...(twitterCreator ? { creator: twitterCreator } : {}),
  },
  other: {
    "twitter:image:alt":
      "Canadian Roofers Toronto roof repair and installation services",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${fonts} antialiased`}>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RXQ2CZ937K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RXQ2CZ937K');
          `}
        </Script>
        {/* Microsoft UET (Bing Ads) */}
        <Script id="microsoft-uet" strategy="afterInteractive">
          {`
            (function(w, d, t, u, o) {
              w[u] = w[u] || [], o.ts = (new Date).getTime();
              var n = d.createElement(t);
              n.src = "https://bat.bing.net/bat.js?ti=" + o.ti + ("uetq" != u ? "&q=" + u : ""),
              n.async = 1, n.onload = n.onreadystatechange = function() {
                var s = this.readyState;
                s && "loaded" !== s && "complete" !== s ||
                (o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad"),
                n.onload = n.onreadystatechange = null)
              };
              var i = d.getElementsByTagName(t)[0];
              i.parentNode.insertBefore(n, i);
            })(window, document, "script", "uetq", {
              ti: "20118468",
              enableAutoSpaTracking: true
            });
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}