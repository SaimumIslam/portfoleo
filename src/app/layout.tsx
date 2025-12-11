import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import {
  IBM_Plex_Mono as FontMono,
  IBM_Plex_Sans as FontSans,
} from "next/font/google";

import ThemeProvider from "@/providers/theme";
import ThemeSwitcher from "@/components/layout/theme-switcher";
import Landing from "@/components/layout/landing";

import SITE from "@/config/site";

import { cn } from "@/lib/utils";

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
  title: SITE.title,
  description: SITE.title,
  keywords: SITE.keywords,
  authors: SITE.author,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} `}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Landing>{children}</Landing>
          <ThemeSwitcher className="fixed bottom-2 right-2" />
        </ThemeProvider>
      </body>
    </html>
  );
}
