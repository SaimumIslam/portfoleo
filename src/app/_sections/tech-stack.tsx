import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BootstrapIcon,
  CssIcon,
  DockerIcon,
  FileTypeReactjsIcon,
  GitIcon,
  JavascriptIcon,
  MaterialuiIcon,
  MongodbIcon,
  MysqlIcon,
  NextjsIcon,
  NodejsIconIcon,
  PostgresqlIcon,
  ReactQueryIconIcon,
  RedisIcon,
  HtmlIcon,
  ShadcnuiIcon,
  TailwindcssIcon,
  TypescriptIcon,
  PythonIcon,
  DjangoIcon,
  DjangoRestIcon,
  ReactNativeIcon,
  AwsIcon,
  LatexIcon,
} from "@/components/icons";

function TechStackSection() {
  const techStack = [
    { name: "Python", icon: PythonIcon },
    { name: "Django", icon: DjangoIcon },
    { name: "Django Rest", icon: DjangoRestIcon },

    { name: "JavaScript", icon: JavascriptIcon },
    { name: "TypeScript", icon: TypescriptIcon },
    { name: "Reactjs", icon: FileTypeReactjsIcon },
    { name: "Nextjs", icon: NextjsIcon },
    { name: "Nodejs", icon: NodejsIconIcon },
    { name: "React Native", icon: ReactNativeIcon },
    { name: "React-Query", icon: ReactQueryIconIcon },

    { name: "Material Ui", icon: MaterialuiIcon },
    { name: "TailwindCSS", icon: TailwindcssIcon },
    { name: "Shadcn Ui", icon: ShadcnuiIcon },

    { name: "Html5", icon: HtmlIcon },
    { name: "CSS", icon: CssIcon },
    { name: "Bootstrap", icon: BootstrapIcon },

    { name: "MySql", icon: MysqlIcon },
    { name: "MongoDB", icon: MongodbIcon },
    { name: "Postgres", icon: PostgresqlIcon },

    { name: "Redis", icon: RedisIcon },
    { name: "Docker", icon: DockerIcon },
    { name: "Git", icon: GitIcon },
    { name: "Aws", icon: AwsIcon },
    { name: "Latex", icon: LatexIcon },
  ];
  return (
    <section className=" z-10 border-x full-line-bottom relative">
      <h2 className="pl-4 text-2xl font-semibold relative full-line-bottom ">
        Tech Stack
      </h2>
      <div className="relative">
        <div className=" absolute size-full [--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center bg-zinc-950/0.75 dark:bg-white/0.75 z-10" />
        <div className="flex flex-wrap gap-4 p-4 ">
          {techStack.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div key={index} className="w-fit z-50">
                <Tooltip>
                  <TooltipTrigger asChild className="cursor-pointer">
                    <IconComponent />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech.name}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
