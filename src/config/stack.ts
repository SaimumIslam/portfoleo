export type StackGroup = {
  code: string;
  title: string;
  items: string[];
};

const STACK: StackGroup[] = [
  {
    code: "LANG",
    title: "Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Go",
      "Kotlin",
      "Swift",
      "Rust",
      "HTML",
      "CSS",
    ],
  },
  {
    code: "WEB",
    title: "Frontend & Mobile",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Jetpack Compose",
      "SwiftUI",
      "Tailwind",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    code: "API",
    title: "Backend & Data",
    items: [
      "Django REST",
      "NestJS",
      "Koa.js",
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
    items: ["AWS", "Docker", "GitHub Actions", "Git", "Tauri", "LaTeX"],
  },
];

export default STACK;
