import { About, Stack } from "./_site/about";
import Contact from "./_site/contact";
import Education from "./_site/education";
import Experience from "./_site/experience";
import Header from "./_site/header";
import Hero from "./_site/hero";
import Projects from "./_site/projects";
import Research from "./_site/research";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Research />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
