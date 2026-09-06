import { cn } from "@/lib/utils";

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
    <div className={cn("relative font-bold", containerClassName)}>
      <span
        className={cn(
          "block font-mono text-muted-foreground font-medium",
          draw && "cd-logo-draw",
          sizes[size],
          className
        )}
      >
        Saimum
      </span>
    </div>
  );
};

export default AnimatedLogo;
