"use client";

import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import Header from "./header";

const CONTENT_VARIANTS = {
  hidden: {
    y: 2000,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 30 },
  },
} as const;

function LandingAnimation({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [transition, setTransition] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTransition(true), 500);
    const timer2 = setTimeout(() => setIsLoaded(true), 1000);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      <Header transition={transition} />
      <main
        className={cn(
          isLoaded
            ? "h-dvh max-w-full overflow-x-hidden sm:overflow-x-visible relative w-full mx-auto md:max-w-3xl pt-12 px-4 md:px-0"
            : "h-dvh relative overflow-hidden md:max-w-3xl w-full max-w-full mx-auto pt-12 "
        )}
      >
        <motion.div
          variants={CONTENT_VARIANTS}
          initial="hidden"
          animate={transition ? "visible" : "hidden"}
          className="w-full"
        >
          {children}
        </motion.div>
      </main>
    </>
  );
}

export default LandingAnimation;
