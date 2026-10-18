import ABOUT from "@/config/about";

import Em from "./em";
import HeroScene from "./hero-scene";

const STATS = [
  { label: "Experience", value: "~6 years" },
  { label: "Strongest in", value: "EdTech" },
  { label: "Platforms", value: "Web · Mobile · Desktop" },
  { label: "Exploring", value: "Applied AI" },
];

export default function Hero() {
  return (
    <>
      <section
        id="top"
        className="wrap relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] items-center gap-6 pt-[clamp(32px,6vw,56px)] pb-10"
      >
        <div className="relative z-[2] flex flex-col gap-7">
          <p className="eyebrow m-0 text-accent">
            Full-Stack Software Engineer
          </p>
          <h1 className="m-0 text-[clamp(48px,7.2vw,96px)] leading-[.96] font-normal tracking-[-.045em] text-balance">
            Building learning products that{" "}
            <Em className="text-accent">think</Em> and scale.
          </h1>
          <p className="m-0 max-w-[520px] text-lg leading-[1.6] text-pretty text-muted">
            I'm {ABOUT.name} — a {ABOUT.currentRole.toLowerCase()} at{" "}
            {ABOUT.currentCompany} in {ABOUT.location}, with nearly six years
            designing and shipping secure, scalable web, desktop and mobile apps
            with React, React Native, Django REST Framework, Koa.js, Rust and
            Kotlin. Most at home in EdTech, increasingly obsessed with AI and
            AWS.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="flex items-center gap-2.5 rounded-full bg-ink px-[22px] py-3.5 text-[15px] font-medium text-bg transition-colors hover:bg-accent"
            >
              View selected work <span aria-hidden="true">→</span>
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink/18 px-[22px] py-3.5 text-[15px] transition-colors hover:border-ink"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative h-full min-h-[clamp(300px,80vw,540px)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[8%] rounded-full bg-[radial-gradient(closest-side,rgba(255,138,61,.16),rgba(255,138,61,0))]"
          />
          <HeroScene />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-3 left-0 flex flex-col gap-1.5 font-mono text-[11px] text-faint"
          >
            <span>{"// drag to rotate"}</span>
            <span>nodes.connect(learners, ideas)</span>
          </div>
        </div>
      </section>

      <div className="wrap">
        <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] gap-x-5 border-y border-ink/10">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1.5 py-6">
              <dt className="font-mono text-[11px] tracking-[.1em] text-faint uppercase">
                {stat.label}
              </dt>
              <dd className="m-0 text-xl tracking-[-.02em]">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
