"use client";

import { useTheme } from "next-themes";

import ThemeToggleButton from "./toggle-btn";

interface Props {
  className?: string;
}

const ThemeSwither = ({ className }: Props) => {
  const { theme, setTheme } = useTheme();
  const newMode = theme === "dark" ? "light" : "dark";

  return (
    <>
      <ThemeToggleButton
        theme={newMode}
        setTheme={setTheme}
        className={className}
      />
    </>
  );
};
export default ThemeSwither;
