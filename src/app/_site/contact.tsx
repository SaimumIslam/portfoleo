"use client";

import { useState } from "react";

import ABOUT from "@/config/about";
import SITE from "@/config/site";

import Em from "./em";

const SOCIALS = [
  { label: "GitHub", href: ABOUT.socialLinks.github },
  { label: "LinkedIn", href: ABOUT.socialLinks.linkedin },
  { label: "Medium", href: ABOUT.socialLinks.medium },
  { label: "ResearchGate", href: ABOUT.socialLinks.researchgate },
];

const fieldClass =
  "box-border rounded-xl border border-ink/12 bg-bg px-4 py-3.5 font-sans text-[15px] tracking-normal text-ink normal-case outline-none placeholder:text-faint focus:border-accent";

const lastUpdated = new Date(SITE.lastUpdatedAt).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Hello from ${name || "your portfolio"}`;
    window.location.href = `mailto:${ABOUT.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="wrap flex flex-col gap-14 pt-10 pb-16"
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-end gap-12">
        <div className="flex flex-col gap-7">
          <p className="eyebrow m-0 text-faint">06 — Contact</p>
          <h2
            id="contact-title"
            className="m-0 text-[clamp(48px,8vw,112px)] leading-[.92] font-normal tracking-[-.055em]"
          >
            Let's build
            <br />
            <Em className="tracking-[-.02em] text-accent">together.</Em>
          </h2>
          <p className="m-0 max-w-[460px] text-lg leading-[1.6] text-muted">
            Always open to collaboration — say hi at{" "}
            <a
              href={`mailto:${ABOUT.email}`}
              className="text-ink underline decoration-ink/30 underline-offset-4 hover:text-accent"
            >
              {ABOUT.email}
            </a>
            .
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-3.5 rounded-3xl border border-ink/8 bg-panel p-[clamp(20px,5vw,28px)]"
        >
          <label className="flex flex-col gap-2 font-mono text-[11px] tracking-[.1em] text-faint uppercase">
            Name
            <input
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={fieldClass}
            />
          </label>
          <label className="flex flex-col gap-2 font-mono text-[11px] tracking-[.1em] text-faint uppercase">
            Message
            <textarea
              name="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What are you building?"
              className={`${fieldClass} min-h-[110px] resize-y leading-[1.5]`}
            />
          </label>
          <button
            type="submit"
            className="flex cursor-pointer items-center gap-2.5 self-start rounded-full bg-accent px-[22px] py-3.5 text-[15px] font-medium text-bg transition-colors hover:bg-ink"
          >
            Send message <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>

      <footer className="flex flex-wrap justify-between gap-6 border-t border-ink/10 pt-7 font-mono text-[13px] text-faint">
        <span>
          © {SITE.lastUpdatedAt.slice(0, 4)} {ABOUT.name} · Last updated{" "}
          <time dateTime={SITE.lastUpdatedAt}>{lastUpdated}</time>
        </span>
        <ul className="m-0 flex list-none flex-wrap gap-6 p-0">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="me noopener noreferrer"
                className="text-muted hover:text-accent"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </section>
  );
}
