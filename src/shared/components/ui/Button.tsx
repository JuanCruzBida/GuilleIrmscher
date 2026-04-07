import * as React from "react";
import { cn } from "@/shared/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "terminal";
  size?: "default" | "sm" | "lg" | "icon" | "full";
  asChild?: boolean;
}

export function Button({
  className,
  variant = "primary",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest active:scale-95";

  const variants = {
    primary: "bg-accent text-background font-bold hover:bg-accent-hover",
    secondary: "bg-muted text-foreground hover:bg-zinc-800",
    outline: "border border-accent bg-transparent text-accent hover:bg-accent hover:text-background",
    ghost: "hover:bg-accent hover:text-background",
    terminal: "bg-zinc-900 border border-zinc-700 text-foreground font-mono hover:border-accent hover:text-accent shadow-[4px_4px_0px_0px_rgba(245,224,94,0.3)]",
  };

  const sizes = {
    default: "h-12 px-8",
    sm: "h-9 px-4 text-xs",
    lg: "h-14 px-10 text-lg",
    icon: "h-12 w-12",
    full: "h-12 w-full px-8",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
