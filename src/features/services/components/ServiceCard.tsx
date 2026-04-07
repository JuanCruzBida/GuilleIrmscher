"use client";

import React, { useRef } from "react";
import { cn } from "@/shared/lib/utils";
import { Typography } from "@/shared/components/ui/Typography";
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  className?: string;
  variant?: "default" | "accent";
  image?: string;
}

export function ServiceCard({
  title,
  description,
  Icon,
  className,
  variant = "default",
  image,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!cardRef.current) return;

      const card = cardRef.current;
      const icon = iconRef.current;

      const onMouseEnter = () => {
        // Spring-based physics hover
        gsap.to(card, {
          y: -8,
          duration: 0.4,
          ease: "elastic.out(1, 0.5)",
          backgroundColor: variant === "accent" ? "oklch(var(--accent-hover))" : "oklch(0.18 0.02 250)",
        });
        
        if (icon) {
          gsap.to(icon, {
            scale: 1.2,
            rotate: 15,
            duration: 0.5,
            ease: "back.out(2)",
          });
        }
      };

      const onMouseLeave = () => {
        gsap.to(card, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          backgroundColor: variant === "accent" ? "oklch(var(--accent))" : "oklch(0.15 0.02 250)",
        });

        if (icon) {
          gsap.to(icon, {
            scale: 1,
            rotate: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      };

      card.addEventListener("mouseenter", onMouseEnter);
      card.addEventListener("mouseleave", onMouseLeave);

      return () => {
        card.removeEventListener("mouseenter", onMouseEnter);
        card.removeEventListener("mouseleave", onMouseLeave);
      };
    },
    { scope: cardRef }
  );

  const isAccent = variant === "accent";

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative flex flex-col p-8 transition-colors overflow-hidden border border-zinc-900 h-full",
        isAccent ? "bg-accent text-background" : "bg-background text-foreground",
        className
      )}
    >
      <div ref={iconRef} className="mb-6 w-fit">
        <Icon className={cn("h-10 w-10", isAccent ? "text-background" : "text-accent")} />
      </div>

      <Typography
        variant="h3"
        className={cn("mb-4", isAccent ? "text-background" : "text-foreground")}
      >
        {title}
      </Typography>

      <Typography
        variant="body"
        className={cn("text-sm relative z-10", isAccent ? "text-background" : "text-muted-foreground")}
      >
        {description}
      </Typography>

      {image && (
        <div className="absolute inset-0 z-0 overflow-hidden mix-blend-overlay opacity-20 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-30">
           <Image src={image} fill alt={title} className="object-cover grayscale pointer-events-none" />
        </div>
      )}
    </div>
  );
}
