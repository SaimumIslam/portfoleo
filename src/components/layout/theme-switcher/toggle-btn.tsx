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
        <SunnyOut className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
};

export default ThemeToggleButton;

export const SunnyOut = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <g
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="0.6s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.6s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="0.9s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.9s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <mask
      xmlns="http://www.w3.org/2000/svg"
      id="lineMdMoonAltToSunnyOutlineLoopTransition0"
    >
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="12" cy="12" r="8">
        <animate fill="freeze" attributeName="r" dur="0.4s" values="8;4" />
      </circle>
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate fill="freeze" attributeName="cx" dur="0.4s" values="18;22" />
        <animate fill="freeze" attributeName="cy" dur="0.4s" values="6;2" />
        <animate fill="freeze" attributeName="r" dur="0.4s" values="12;3" />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate fill="freeze" attributeName="cx" dur="0.4s" values="18;22" />
        <animate fill="freeze" attributeName="cy" dur="0.4s" values="6;2" />
        <animate fill="freeze" attributeName="r" dur="0.4s" values="10;1" />
      </circle>
    </mask>
    <circle
      xmlns="http://www.w3.org/2000/svg"
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonAltToSunnyOutlineLoopTransition0)"
    >
      <animate fill="freeze" attributeName="r" dur="0.4s" values="10;6" />
    </circle>
  </svg>
);
