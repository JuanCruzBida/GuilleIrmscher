"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Typography } from "@/shared/components/ui/Typography";
import { Button } from "@/shared/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;

      // Split text into characters manually or using helper
      // For this implementation, we'll target spans if we pre-split
      const chars = textRef.current.querySelectorAll(".char");

      gsap.fromTo(
        chars,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.025,
          ease: "power4.out",
        }
      );
    },
    { scope: container }
  );

  const headline = "Logística de Obras de Arte: Pensado por un artista para artistas.";

  return (
    <section
      ref={container}
      className="relative flex min-h-screen flex-col justify-center px-6 lg:px-12 py-32 bg-background overflow-hidden"
    >
      <Image
        src="/assets/images/hero.png"
        alt="Logística de Obras de Arte"
        fill
        priority={true}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
      <div className="absolute inset-0 bg-background/80" />

      {/* Decorative Grid overlay to maintain brutalist feel over the image */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] mix-blend-overlay" />

      <div className="max-w-[90vw] lg:max-w-7xl">
        <Typography
          as="h1"
          variant="display"
          className="leading-[1] mb-12 text-foreground"
        >
          <span ref={textRef}>
          {headline.split("").map((char, i) => (
            <span
              key={i}
              className={Object.assign(
                {},
                { 
                  display: "inline-block", 
                  whiteSpace: char === " " ? "pre" : "normal" 
                },
                // Concepto clave en amarillo (Pensado por un artista...)
                i > headline.indexOf(":") ? { color: "oklch(var(--accent))" } : {}
              ) ? "char" : ""}
              style={{ 
                display: "inline-block", 
                whiteSpace: char === " " ? "pre" : "normal",
                color: i > headline.indexOf(":") ? "oklch(var(--accent))" : "inherit"
              }}
            >
              {char}
            </span>
          ))}
          </span>
        </Typography>

        <div className="flex mt-8">
          <Button size="lg" className="group z-10 relative" asChild>
            <a href="#contacto">
              Solicitar Servicio
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
