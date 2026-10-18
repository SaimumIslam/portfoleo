import type { Metadata, Viewport } from "next";

import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";

import SITE from "@/config/site";
import { buildJsonLd } from "@/lib/structured-data";

import "./globals.css";

const fontSans = Geist({
  weight: ["300", "400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-geist",
});

const fontMono = Geist_Mono({
  weight: ["400", "500"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const fontSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  keywords: SITE.keywords,
  authors: SITE.author,
  creator: SITE.name,
  alternates: {
    canonical: "/",
    types: {
      "text/plain": [{ url: "/llms.txt", title: "LLM-readable profile" }],
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "profile",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    locale: "en_US",
    firstName: "Saimum",
    lastName: "Islam",
    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 1200,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/og.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0c0e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable} ${fontSerif.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
