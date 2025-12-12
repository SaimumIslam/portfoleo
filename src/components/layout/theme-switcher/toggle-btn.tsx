"use client";

import { useCallback } from "react";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type StartPosition =
  | "center"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

interface Props {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  start?: StartPosition;
  className?: string;
}

const ThemeToggleButton = (props: Props) => {
  const { theme, setTheme, start = "top-left", className } = props;
  // Generate animation CSS based on variant
  const positions = {
    center: "center",
    "top-left": "top left",
    "top-right": "top right",
    "bottom-left": "bottom left",
    "bottom-right": "bottom right",
  };

  const cx = start === "center" ? "50" : start.includes("left") ? "0" : "100";
  const cy = start === "center" ? "50" : start.includes("top") ? "0" : "100";
  const css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) { 
            animation: none;
          }
          ::view-transition-new(root) {
            animation: circle-blur-expand 0.5s ease-out;
            transform-origin: ${positions[start]};
            filter: blur(0);
          }
          @keyframes circle-blur-expand {
            from {
              clip-path: circle(0% at ${cx}% ${cy}%);
              filter: blur(4px);
            }
            to {
              clip-path: circle(150% at ${cx}% ${cy}%);
              filter: blur(0);
            }
          }
        }
      `;

  const startTransition = useCallback((updateFn: () => void) => {
    if ("startViewTransition" in document) {
      (document as any).startViewTransition(updateFn);
    } else {
      updateFn();
    }
  }, []);

  const handleClick = useCallback(() => {
    const styleId = `theme-transition-${Date.now()}`;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = css;

    document.head.appendChild(style);

    // Clean up animation styles after transition
    setTimeout(() => {
      const styleEl = document.getElementById(styleId);
      if (styleEl) {
        styleEl.remove();
      }
    }, 3000);

    startTransition(() => {
      setTheme(theme);
    });
  }, [start, theme]);

  return (
    <Button
      variant="outline"
      size={"icon"}
      onClick={handleClick}
      className={cn("relative overflow-hidden transition-all", className)}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
};

export default ThemeToggleButton;
