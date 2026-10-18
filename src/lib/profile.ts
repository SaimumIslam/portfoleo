import type EXPERIENCES from "@/config/experiences";
import PROJECTS, { type Platform, type Project } from "@/config/projects";

export const PLATFORM_LABELS: Record<Platform, string> = {
  web: "Web",
  desktop: "Desktop",
  android: "Android",
  mobile: "Mobile · Android & iOS",
  cli: "CLI",
  wearos: "Wear OS",
};

export const visibleProjects = PROJECTS.filter((project) => !project.hidden);

export const hasLink = (project: Project) => project.href !== "#";

// "Jul 2026 -- Present" -> "Jul 2026 – Present"
export const formatRange = (range: string) =>
  range.replace(/\s*-{1,2}\s*/g, " – ");

export type Job = (typeof EXPERIENCES)[number];

// "Full-Time | Oct 2021 - Present" -> { type: "Full-time", dates: "Oct 2021 – Present" }
export function jobTerms(job: Job) {
  const [type = "", dates = ""] = job.duration.split("|").map((s) => s.trim());
  return {
    type: type.charAt(0) + type.slice(1).toLowerCase(),
    dates: formatRange(dates),
  };
}
