import ABOUT from "@/config/about";
import EDUCATION from "@/config/educations";
import PUBLICATIONS from "@/config/publications";
import SITE from "@/config/site";
import STACK from "@/config/stack";
import { hasLink, PLATFORM_LABELS, visibleProjects } from "@/lib/profile";

const PERSON_ID = `${SITE.url}/#person`;
const WEBSITE_ID = `${SITE.url}/#website`;

const OPERATING_SYSTEMS: Record<string, string> = {
  mobile: "Android, iOS",
  android: "Android",
  desktop: "macOS, Windows, Linux",
  web: "Web browser",
  cli: "macOS, Linux",
  wearos: "Wear OS",
};

export function buildJsonLd() {

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        inLanguage: "en",
        publisher: { "@id": PERSON_ID },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE.url}/#profile`,
        url: SITE.url,
        name: SITE.title,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
        mainEntity: { "@id": PERSON_ID },
        dateModified: SITE.lastUpdatedAt,
        inLanguage: "en",
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: ABOUT.name,
        url: SITE.url,
        image: `${SITE.url}/og.webp`,
        email: `mailto:${ABOUT.email}`,
        jobTitle: ABOUT.currentRole,
        description: ABOUT.introduction,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Khulna",
          addressCountry: "BD",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: EDUCATION[0].institution,
          url: "https://ku.ac.bd",
        },
        knowsAbout: [
          ...STACK.flatMap((group) => group.items),
          "Natural Language Processing",
          "Machine Learning",
          "Retrieval-Augmented Generation",
          "EdTech",
        ],
        sameAs: Object.values(ABOUT.socialLinks),
      },
      ...PUBLICATIONS.map((pub) => ({
        "@type": "ScholarlyArticle",
        "@id": pub.href,
        headline: pub.project,
        url: pub.href,
        datePublished: pub.publishedAt,
        description: pub.description,
        keywords: pub.badge.join(", "),
        author: { "@id": PERSON_ID },
        publisher: { "@type": "Organization", name: "IEEE" },
      })),
      {
        "@type": "ItemList",
        "@id": `${SITE.url}/#projects`,
        name: `Software projects by ${ABOUT.name}`,
        itemListElement: visibleProjects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: project.title,
            description: project.description,
            applicationCategory: PLATFORM_LABELS[project.platform],
            operatingSystem: OPERATING_SYSTEMS[project.platform],
            keywords: project.badge.join(", "),
            author: { "@id": PERSON_ID },
            ...(hasLink(project) && { url: project.href }),
          },
        })),
      },
    ],
  };
}
