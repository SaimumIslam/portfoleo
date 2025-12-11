import ABOUT from "@/config/about";

function AboutSection() {
  return (
    <section className="px-4 border-x full-line-bottom relative">
      <h2 className="text-2xl font-semibold relative full-line-bottom">
        About
      </h2>
      <div className="flex flex-col gap-4 py-4 font-mono text-sm">
        {ABOUT.descriptions.map((text, idx) => (
          <p key={idx} className="tracking-wide">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
