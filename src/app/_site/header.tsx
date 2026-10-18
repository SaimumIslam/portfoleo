"use client";

import { useState } from "react";

import SITE from "@/config/site";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-20 border-b border-ink/8 bg-bg/72 backdrop-blur-[14px]">
      <nav
        aria-label="Primary"
        className="wrap flex items-center justify-between gap-6 py-3.5"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 text-[15px] font-medium tracking-[-.01em]"
        >
          <span
            aria-hidden="true"
            className="grid size-7 place-items-center rounded-lg bg-accent font-mono text-xs font-medium text-bg"
          >
            SI
          </span>
          Saimum Islam
        </a>

        <ul className="hidden gap-[26px] text-sm min-[860px]:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={SITE.resume}
          download
          className="hidden items-center gap-2 rounded-full border border-ink/18 px-4 py-[9px] text-sm transition-colors hover:border-accent hover:text-accent min-[860px]:flex"
        >
          ↓ Download résumé
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="grid size-11 cursor-pointer place-items-center rounded-full border border-ink/18 text-lg min-[860px]:hidden"
        >
          <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="flex flex-col border-t border-ink/8 bg-bg px-5 pt-2 pb-6 min-[860px]:hidden"
        >
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="flex justify-between border-b border-ink/8 py-4 text-[22px] tracking-[-.02em]"
            >
              {link.label}
              <span className="self-center font-mono text-xs text-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
          <a
            href={SITE.resume}
            download
            className="mt-5 rounded-full bg-ink px-[22px] py-3.5 text-center text-[15px] font-medium text-bg"
          >
            ↓ Download résumé
          </a>
        </div>
      )}
    </header>
  );
}
