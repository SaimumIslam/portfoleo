import EDUCATION from "@/config/educations";
import { formatRange } from "@/lib/profile";

import Em from "./em";

const DEGREES = ["BSc", "MSc"];

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="wrap flex flex-wrap gap-[clamp(24px,4vw,48px)] pb-[clamp(72px,10vw,112px)]"
    >
      <div className="flex flex-[1_1_280px] flex-col gap-[18px]">
        <p className="eyebrow m-0 text-faint">06 — Education</p>
        <h2 id="education-title" className="section-title">
          Where I <Em>learned.</Em>
        </h2>
      </div>

      <div className="flex min-w-0 flex-[999_1_min(100%,560px)] flex-col gap-6">
        {EDUCATION.map((edu) => (
          <article
            key={edu.institution}
            className="flex flex-col gap-7 rounded-3xl border border-ink/10 bg-ink/[.03] p-[clamp(24px,4vw,40px)]"
          >
            <header className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-muted">
                  {formatRange(edu.duration)}
                </span>
                <h3 className="m-0 text-[clamp(26px,3.4vw,36px)] leading-[1.1] font-normal tracking-[-.03em]">
                  {edu.institution}
                </h3>
                <span className="text-base text-soft">
                  Computer Science &amp; Engineering
                </span>
              </div>
              <ul className="m-0 flex list-none gap-2 p-0">
                {DEGREES.map((degree) => (
                  <li
                    key={degree}
                    className="rounded-full border border-accent/40 px-3.5 py-1.5 font-mono text-xs text-accent"
                  >
                    {degree}
                  </li>
                ))}
              </ul>
            </header>

            <p className="m-0 max-w-[620px] text-base leading-[1.6] text-pretty text-soft">
              {edu.description}
            </p>

            <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-px overflow-hidden rounded-2xl bg-ink/10 p-0">
              {edu.points.map((point, index) => (
                <li
                  key={point}
                  className="flex flex-col gap-2.5 bg-bg p-5 text-sm leading-[1.55] text-muted"
                >
                  <span className="font-mono text-[11px] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
