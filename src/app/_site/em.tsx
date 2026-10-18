import { cn } from "@/lib/utils";

// Instrument Serif italic accent used inside headings
export default function Em({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("font-serif italic tracking-[-.01em]", className)}>
      {children}
    </span>
  );
}
