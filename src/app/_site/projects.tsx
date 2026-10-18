"use client";

import { useState } from "react";

import {
  formatRange,
  hasLink,
  PLATFORM_LABELS,
  visibleProjects,
} from "@/lib/profile";
import { cn } from "@/lib/utils";

import Em from "./em";

const INITIAL_COUNT = 3;

const hostOf = (href: string) => new URL(href).hostname.replace(/^www\./, "");

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="wrap flex flex-col gap-10 pb-[clamp(72px,10vw,112px)]"
    >
      <div className="flex flex-col gap-[18px]">
        <p className="eyebrow m-0 text-faint">03 — Personal projects</p>
        <h2 id="projects-title" className="section-title">
          Things I've <Em>shipped.</Em>
        </h2>
      </div>

      {/* Every project is rendered so crawlers see them all; extras are only visually collapsed. */}
      <div className="flex flex-col gap-5">
        {visibleProjects.map((project, index) => {
          const num = String(index + 1).padStart(2, "0");
          return (
            <article
              key={project.id}
              aria-labelledby={`project-${project.id}`}
              className={cn(
                "grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] overflow-hidden rounded-3xl border border-ink/8 bg-panel transition-colors duration-250 hover:border-accent/45",
                !showAll && index >= INITIAL_COUNT && "hidden",
              )}
            >
              <div className="flex min-w-0 flex-col gap-[22px] p-[clamp(24px,5vw,40px)]">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-md bg-accent px-2 py-1 font-mono text-[11px] text-bg">
                    {num}
                  </span>
                  <span className="font-mono text-xs tracking-[.1em] text-muted uppercase">
                    {PLATFORM_LABELS[project.platform]}
                  </span>
                  <span className="font-mono text-xs text-faint">
                    {formatRange(project.createdAt)}
                  </span>
                </div>
                <h3
                  id={`project-${project.id}`}
                  className="m-0 text-[clamp(28px,3vw,40px)] leading-[1.05] font-normal tracking-[-.035em]"
                >
                  {project.title}
                </h3>
                <p className="m-0 max-w-[520px] text-base leading-[1.6] text-pretty text-muted">
                  {project.description}
                </p>
                <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-sm leading-[1.55] text-soft">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="grid grid-cols-[16px_1fr] gap-2"
                    >
                      <span aria-hidden="true" className="text-accent">
                        →
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-3">
                  <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
                    {project.badge.map((tag) => (
                      <li
                        key={tag}
                        className="chip border border-ink/14 text-soft"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {hasLink(project) && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:text-ink"
                    >
                      {hostOf(project.href)} <span aria-hidden="true">↗</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  )}
                </div>
              </div>
              <div
                aria-hidden="true"
                className="relative min-h-[clamp(240px,60vw,340px)] bg-[repeating-linear-gradient(135deg,#16171a_0_12px,#131417_12px_24px)]"
              >
                <div className="absolute inset-5 flex flex-col justify-between rounded-[14px] border border-ink/8 bg-bg/60 p-6">
                  <span className="font-mono text-[11px] tracking-[.1em] text-faint uppercase">
                    {PLATFORM_LABELS[project.platform]}
                  </span>
                  <span className="font-serif text-[clamp(64px,9vw,120px)] leading-none text-accent italic">
                    {project.title.charAt(0)}
                    <span className="font-sans text-[.35em] text-ink/20 not-italic">
                      /{num}
                    </span>
                  </span>
                  <span className="font-mono text-[11px] text-faint">
                    {project.badge.slice(0, 3).join(" · ")}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {visibleProjects.length > INITIAL_COUNT && (
        <button
          type="button"
          onClick={() => setShowAll((all) => !all)}
          aria-expanded={showAll}
          className="flex cursor-pointer items-center gap-2.5 self-center rounded-full border border-ink/18 px-6 py-3.5 text-[15px] transition-colors hover:border-accent hover:text-accent"
        >
          {showAll
            ? "Show less ↑"
            : `Show all ${visibleProjects.length} projects ↓`}
        </button>
      )}
    </section>
  );
}
