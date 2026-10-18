import STACK from "@/config/stack";

import Em from "./em";

const TRAITS = ["Fast learner", "Organized", "Dedicated", "Honest"];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="wrap flex flex-wrap gap-[clamp(24px,4vw,48px)] py-[clamp(72px,12vw,120px)]"
    >
      <h2 id="about-title" className="eyebrow m-0 flex-[1_1_240px] text-faint">
        01 — About
      </h2>
      <div className="flex min-w-0 flex-[999_1_min(100%,560px)] flex-col gap-10">
        <p className="m-0 text-[clamp(26px,3vw,38px)] leading-[1.28] tracking-[-.025em] text-pretty">
          I write <Em className="text-accent">clean, maintainable,</Em>{" "}
          standards-compliant code — and I care just as much about the people
          using it. From learning platforms to financial tools, I take products
          from schema to server to screen.
        </p>
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 p-0">
          {TRAITS.map((trait, index) => (
            <li key={trait} className="flex flex-col gap-2.5 bg-bg p-[22px]">
              <span className="font-mono text-[11px] text-accent">
                /{String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[17px]">{trait}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-title"
      className="wrap flex flex-col gap-10 pb-[clamp(72px,10vw,112px)]"
    >
      <div className="flex flex-col gap-[18px]">
        <p className="eyebrow m-0 text-faint">02 — Tech stack</p>
        <h2 id="stack-title" className="section-title">
          Tools I <Em>reach for.</Em>
        </h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-px overflow-hidden rounded-[20px] border border-ink/10 bg-ink/10">
        {STACK.map((group) => (
          <div
            key={group.code}
            className="flex flex-col gap-5 bg-panel-2 p-[26px]"
          >
            <div className="flex items-center justify-between">
              <h3 className="m-0 text-[17px] font-medium tracking-[-.01em]">
                {group.title}
              </h3>
              <span
                aria-hidden="true"
                className="font-mono text-[11px] text-accent"
              >
                {group.code}
              </span>
            </div>
            <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
              {group.items.map((item) => (
                <li key={item} className="chip bg-ink/6 text-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
