import EXPERIENCES from "@/config/experiences";
import { jobTerms } from "@/lib/profile";

import Em from "./em";

function Entry({
  title,
  meta,
  open,
  children,
}: {
  title: string;
  meta: string;
  open?: boolean;
  children: React.ReactNode;
}) {
  return (
    <details open={open} className="group border-t border-ink/10">
      <summary className="grid cursor-pointer grid-cols-[1fr_auto] items-center gap-4 py-[26px]">
        <div className="flex flex-col gap-1.5">
          <h3 className="m-0 text-[22px] font-normal tracking-[-.02em]">
            {title}
          </h3>
          <span className="font-mono text-xs text-muted">{meta}</span>
        </div>
        <span
          aria-hidden="true"
          className="grid size-8 place-items-center rounded-full border border-ink/18 text-base text-accent after:content-['+'] group-open:after:content-['−']"
        />
      </summary>
      <div className="flex max-w-[680px] flex-col gap-[18px] pb-8">
        {children}
      </div>
    </details>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-sm leading-[1.55] text-muted">
      {items.map((item) => (
        <li key={item} className="grid grid-cols-[16px_1fr] gap-2">
          <span aria-hidden="true" className="text-accent">
            →
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="wrap flex flex-wrap gap-[clamp(24px,4vw,48px)] pb-[clamp(72px,10vw,112px)]"
    >
      <div className="flex flex-[1_1_280px] flex-col gap-[18px]">
        <p className="eyebrow m-0 text-faint">05 — Experience</p>
        <h2 id="experience-title" className="section-title">
          Where I've <Em>worked.</Em>
        </h2>
      </div>

      <div className="flex min-w-0 flex-[999_1_min(100%,560px)] flex-col">
        {EXPERIENCES.map((job, index) => {
          const { type, dates } = jobTerms(job);
          return (
            <Entry
              key={job.id}
              title={job.company}
              meta={`${job.title} · ${type} · ${dates}`}
              open={index === 0}
            >
              <p className="m-0 text-base leading-[1.6] text-pretty text-soft">
                {job.description}
              </p>
              <Bullets items={job.tasks} />
              <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
                {job.badge.map((tag) => (
                  <li key={tag} className="chip bg-ink/6 text-soft">
                    {tag}
                  </li>
                ))}
              </ul>
            </Entry>
          );
        })}
      </div>
    </section>
  );
}
