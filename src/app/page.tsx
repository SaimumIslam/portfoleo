import { SectionSeparator } from "@/components/ui/separator";

import TopSection from "./_sections/top";
import ProfileSection from "./_sections/profile";
import BioSection from "./_sections/biography";
import SocialLinkSection from "./_sections/social-link";
import AboutSection from "./_sections/about";
import TechStackSection from "./_sections/tech-stack";
import ProjectsSection from "./_sections/project";
import ExperienceSection from "./_sections/experience";
import EducationSection from "./_sections/education";
import PublicationSection from "./_sections/publication";

import ContactMeSection from "./_sections/contact";
import FooterSection from "./_sections/footer";

export default function Home() {
  return (
    <>
      {/* <TopSection /> */}
      <ProfileSection />
      <SectionSeparator className="full-line-bottom" />
      <BioSection />
      <SectionSeparator className="" />
      <SocialLinkSection />
      <SectionSeparator className="full-line-bottom" />
      <AboutSection />
      <SectionSeparator className="full-line-bottom" />
      <TechStackSection />
      <SectionSeparator className="full-line-bottom" />
      <ProjectsSection />
      <SectionSeparator className="full-line-bottom" />
      <PublicationSection />
      <SectionSeparator className="full-line-bottom" />
      <ExperienceSection />
      <EducationSection />
      <SectionSeparator className="full-line-bottom" />
      <ContactMeSection />
      <SectionSeparator className="full-line-bottom" />
      <FooterSection />
      <SectionSeparator className="full-line-bottom" />
    </>
  );
}
