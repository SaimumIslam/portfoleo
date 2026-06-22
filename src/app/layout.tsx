import type { Metadata } from "next";

import {
  IBM_Plex_Mono as FontMono,
  IBM_Plex_Sans as FontSans,
} from "next/font/google";

import ThemeProvider from "@/providers/theme";
import ThemeSwitcher from "@/components/layout/theme-switcher";
import Landing from "@/components/layout/landing";

import SITE from "@/config/site";
import ABOUT from "@/config/about";

import "./globals.css";

const fontSans = FontSans({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--cd-font-sans",
});

const fontMono = FontMono({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--cd-font-mono",
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
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    locale: "en_US",
    images: [
      {
        url: "/profile.webp",
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
    images: ["/profile.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: ABOUT.name,
  url: SITE.url,
  image: `${SITE.url}/profile.webp`,
  jobTitle: ABOUT.currentRole,
  worksFor: {
    "@type": "Organization",
    name: ABOUT.currentCompany,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: ABOUT.location,
  },
  email: `mailto:${ABOUT.email}`,
  description: ABOUT.introduction,
  sameAs: Object.values(ABOUT.socialLinks),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${fontSans.variable} ${fontMono.variable} `}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Landing>{children}</Landing>
          <ThemeSwitcher className="fixed bottom-2 right-2" />
        </ThemeProvider>
      </body>
    </html>
  );
}
