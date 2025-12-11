"use client";

import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    letterSpacing: "-0.5em",
  },
  visible: {
    opacity: 1,
    letterSpacing: "normal",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const sizes = {
  sm: "text-xl",
  lg: "text-4xl",
  xl: "text-5xl",
};

const AnimatedLogo = ({
  draw = false,
  size = "sm",
  className,
  containerClassName,
}: {
  containerClassName?: string;
  draw?: boolean;
  size?: keyof typeof sizes;
  className?: string;
}) => {
  return (
    <div className={cn("relative font-bold px-6 md:px-0", containerClassName)}>
      <motion.h1
        initial={draw ? "hidden" : undefined}
        animate={draw ? "visible" : undefined}
        variants={draw ? textVariants : undefined}
        className={cn(
          "font-mono text-muted-foreground font-medium",
          sizes[size],
          className
        )}
      >
        Saimum
      </motion.h1>
    </div>
  );
};

export default AnimatedLogo;
