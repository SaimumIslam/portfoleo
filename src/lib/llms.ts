import ABOUT from "@/config/about";
import EDUCATION from "@/config/educations";
import EXPERIENCES from "@/config/experiences";
import PUBLICATIONS from "@/config/publications";
import SITE from "@/config/site";
import STACK from "@/config/stack";
import {
  formatRange,
  jobTerms,
  PLATFORM_LABELS,
  visibleProjects,
} from "@/lib/profile";

const link = (title: string, href: string) =>
  href === "#" ? title : `[${title}](${href})`;

// Markdown profile for LLMs and AI agents (https://llmstxt.org).
// `full` adds project features, job duties and education detail.
export function buildLlmsTxt({ full = false } = {}) {
  const out: string[] = [];
  const push = (...lines: string[]) => out.push(...lines);

  push(
    `# ${ABOUT.name}`,
    "",
    `> ${ABOUT.name} is a ${ABOUT.currentRole.toLowerCase()} at ${ABOUT.currentCompany} in ${ABOUT.location}, with about six years of experience building EdTech, web, desktop and mobile software. Author of two IEEE-published papers on Bangla natural language processing.`,
    "",
    `Last updated: ${SITE.lastUpdatedAt}`,
    "",
    ABOUT.introduction,
    "",
    "## Profile",
    "",
    `- Website: ${SITE.url}`,
    `- Email: ${ABOUT.email}`,
    `- Location: ${ABOUT.location}`,
    `- Current role: ${ABOUT.currentRole}, ${ABOUT.currentCompany}`,
    `- Résumé (PDF): ${SITE.url}${SITE.resume}`,
    ...Object.entries(ABOUT.socialLinks).map(
      ([name, href]) => `- ${name[0].toUpperCase()}${name.slice(1)}: ${href}`,
    ),
    "",
    "## Tech stack",
    "",
    ...STACK.map((group) => `- ${group.title}: ${group.items.join(", ")}`),
    "",
    "## Experience",
    "",
  );

  for (const job of EXPERIENCES) {
    const { type, dates } = jobTerms(job);
    push(
      `- ${link(job.company, job.href)} — ${job.title} (${type}, ${dates}): ${job.description}`,
    );
    if (full) push(...job.tasks.map((task) => `  - ${task}`));
  }

  push("", "## Projects", "");
  for (const project of visibleProjects) {
    push(
      `- ${link(project.title, project.href)} (${PLATFORM_LABELS[project.platform]}, ${formatRange(project.createdAt)}): ${project.description}`,
    );
    if (full) {
      push(...project.features.map((feature) => `  - ${feature}`));
      push(`  - Stack: ${project.badge.join(", ")}`);
    }
  }

  push("", "## Publications", "");
  for (const pub of PUBLICATIONS) {
    push(
      `- ${link(pub.project, pub.href)} (${pub.publisher}, IEEE, ${pub.publishedAt}): ${pub.description}`,
    );
    if (full) push(...pub.tasks.map((task) => `  - ${task}`));
  }

  push("", "## Education", "");
  for (const edu of full ? EDUCATION : EDUCATION.slice(0, 1)) {
    push(
      `- ${edu.institution} (${formatRange(edu.duration)}): ${edu.description}`,
    );
    if (full) push(...edu.points.map((point) => `  - ${point}`));
  }

  if (!full) {
    push(
      "",
      "## Optional",
      "",
      `- [Full profile](${SITE.url}/llms-full.txt): every project feature, job duty and education detail`,
    );
  }

  return `${out.join("\n")}\n`;
}

export const textResponse = (body: string) =>
  new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
