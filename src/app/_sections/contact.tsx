"use client";

import dynamic from "next/dynamic";

import { cn } from "@/lib/utils";

// zod + react-hook-form + the radix form primitives are ~138 KB gzipped and are
// only needed once someone reaches the bottom of the page, so they are kept out
// of the initial bundle. The fallback is the real heading at the real height,
// so the section is crawlable and swapping in the form shifts nothing.
const ContactForm = dynamic(() => import("./contact-form"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[292px] w-full flex-col items-center">
      <h2 className="relative py-4 font-mono text-2xl font-semibold">
        Contact Me
      </h2>
    </div>
  ),
});

const EDGE_STRIPE = [
  "absolute top-0 flex h-full w-8 border-edge",
  "before:absolute before:inset-0 before:-z-1",
  "before:bg-[repeating-linear-gradient(45deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)]",
  "before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
];

function ContactMeSection() {
  return (
    <section className="relative h-fit border-x full-line-bottom px-11">
      <div className={cn(EDGE_STRIPE, "left-0 border-r")} />
      <div className={cn(EDGE_STRIPE, "right-0 border-l")} />
      <ContactForm />
    </section>
  );
}

export default ContactMeSection;
