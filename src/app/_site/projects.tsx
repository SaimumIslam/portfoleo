"use client";

import { useState } from "react";

import { hasLink, PLATFORM_LABELS, visibleProjects } from "@/lib/profile";
import { cn } from "@/lib/utils";

import Em from "./em";

const INITIAL_COUNT = 4;
const FEATURE_COUNT = 3;

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
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-5">
        {visibleProjects.map((project, index) => {
          const num = String(index + 1).padStart(2, "0");
          return (
            <article
              key={project.id}
              aria-labelledby={`project-${project.id}`}
              className={cn(
                "flex min-w-0 flex-col gap-6 rounded-3xl border border-ink/8 bg-panel p-[clamp(24px,4vw,40px)] transition-colors duration-250 hover:border-accent/45",
                !showAll && index >= INITIAL_COUNT && "hidden",
              )}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <span
                  aria-hidden="true"
                  className="font-serif text-[clamp(56px,6vw,80px)] leading-[.9] text-accent italic"
                >
                  {num}
                </span>
                <span className="rounded-full bg-ink/6 px-3.5 py-2 font-mono text-xs tracking-[.1em] text-muted uppercase">
                  {PLATFORM_LABELS[project.platform]}
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h3
                  id={`project-${project.id}`}
                  className="m-0 text-[clamp(28px,3vw,40px)] leading-[1.05] font-normal tracking-[-.035em]"
                >
                  {project.title}
                </h3>
                <p className="m-0 text-base leading-[1.6] text-pretty text-muted">
                  {project.description}
                </p>
              </div>
              <ul className="m-0 flex list-none flex-col gap-3 p-0 text-sm leading-[1.55] text-soft">
                {project.features.slice(0, FEATURE_COUNT).map((feature) => (
                  <li key={feature} className="grid grid-cols-[20px_1fr] gap-2">
                    <span aria-hidden="true" className="text-accent">
                      →
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-ink/8 pt-6">
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
