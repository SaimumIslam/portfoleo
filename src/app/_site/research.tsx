import PUBLICATIONS from "@/config/publications";

import Em from "./em";

export default function Research() {
  return (
    <section
      id="research"
      aria-labelledby="research-title"
      className="wrap pb-[clamp(72px,10vw,112px)]"
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-12 rounded-[28px] bg-ink p-[clamp(32px,6vw,64px)] text-bg">
        <div className="flex flex-col gap-[22px]">
          <p className="eyebrow m-0 text-accent-deep">04 — Publications</p>
          <h2 id="research-title" className="section-title">
            Tools for <Em className="text-accent-deep">Bangla NLP.</Em>
          </h2>
          <p className="m-0 max-w-[420px] text-[17px] leading-[1.6] text-pretty text-paper-muted">
            Research from my MSc on natural language processing — foundational
            lexical resources for the Bangla language, both first-authored and
            published by IEEE.
          </p>
        </div>
        <ul className="m-0 flex list-none flex-col p-0">
          {PUBLICATIONS.map((pub) => (
            <li key={pub.id}>
              <a
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-[1fr_auto] gap-4 border-t border-bg/14 py-[26px] transition-colors hover:text-accent-deep"
              >
                <article className="flex flex-col gap-2">
                  <h3 className="m-0 text-[22px] leading-[1.25] font-medium tracking-[-.02em] text-pretty">
                    {pub.project}
                  </h3>
                  <p className="m-0 font-mono text-xs text-paper-muted">
                    <time dateTime={pub.publishedAt}>{pub.duration}</time> ·{" "}
                    {pub.publisher} · IEEE
                  </p>
                  <p className="m-0 text-sm leading-[1.55] text-paper-muted">
                    {pub.description}
                  </p>
                </article>
                <span aria-hidden="true" className="pt-1 text-lg">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
