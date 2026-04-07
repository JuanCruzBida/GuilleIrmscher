import React from "react";
import { cn } from "@/shared/lib/utils";

type TypographyProps = {
  variant?: "display" | "h1" | "h2" | "h3" | "body" | "label";
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

const variants = {
  display: "text-display font-display font-bold uppercase tracking-tighter",
  h1: "text-h1 font-display font-bold uppercase tracking-tight",
  h2: "text-h2 font-display font-bold uppercase",
  h3: "text-h3 font-display font-semibold uppercase",
  body: "text-base font-sans font-normal normal-case",
  label: "text-sm font-sans font-medium uppercase tracking-widest text-muted",
};

export function Typography({
  variant = "body",
  as: Component = "p",
  className,
  children,
}: TypographyProps) {
  return (
    <Component className={cn(variants[variant], className)}>
      {children}
    </Component>
  );
}
