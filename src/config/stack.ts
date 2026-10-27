export type StackGroup = {
  code: string;
  title: string;
  items: string[];
};

const STACK: StackGroup[] = [
  {
    code: "LANG",
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Go", "Rust", "HTML", "CSS"],
  },
  {
    code: "WEB",
    title: "Frontend & Mobile",
    items: ["React", "Next.js", "Koa.js", "Tailwind", "Shardcn", "Material UI"],
  },
  {
    code: "API",
    title: "Backend & Data",
    items: [
      "Django REST",
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "SQLite",
    ],
  },
  {
    code: "OPS",
    title: "Infra & Tools",
    items: ["AWS", "Docker", "LaTeX", "Git", "Claude", "Slack", "Jira"],
  },
];

export default STACK;
