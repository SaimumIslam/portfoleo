export type StackGroup = {
  code: string;
  title: string;
  items: string[];
};

const STACK: StackGroup[] = [
  {
    code: "LANG",
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Go", "HTML", "CSS"],
  },
  {
    code: "WEB",
    title: "Frontend & Mobile",
    items: ["React", "Next.js", "Tailwind", "Shardcn", "Material UI"],
  },
  {
    code: "API",
    title: "Backend & Data",
    items: [
      "Django REST",
      "Koa.js",
      "Express.js",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    code: "OPS",
    title: "Infra & Tools",
    items: ["AWS", "Docker", "Git", "Claude", "Slack", "Jira", "LaTeX"],
  },
];

export default STACK;
