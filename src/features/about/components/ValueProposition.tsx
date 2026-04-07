"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Typography } from "@/shared/components/ui/Typography";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ValueProposition() {
  const container = useRef<HTMLDivElement>(null);
  const textContainer = useRef<HTMLDivElement>(null);
  const imageContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.from(textContainer.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      }).from(
        imageContainer.current,
        {
          clipPath: "inset(100% 0% 0% 0%)",
          scale: 1.1,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=0.7"
      );
    },
    { scope: container }
  );

  return (
    <section ref={container} className="px-6 lg:px-12 py-24 bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Abstract / Monolith Text */}
        <div ref={textContainer} className="space-y-8 order-2 lg:order-1">
          <Typography variant="h2" className="text-foreground">
            De un Artista para Artistas.
          </Typography>
          <Typography variant="body" className="text-muted-foreground leading-relaxed">
            Pensado para colegas que viven fuera de CABA y necesitan enviar sus obras a salones, premios y galerías. No se trata solo de un transporte: es el cuidado de las piezas como lo hace cada creador, garantizando que el trabajo llegue a destino y regrese sano a su lugar de origen.
          </Typography>
        </div>

        {/* Image Container with Structural Brutalism aesthetic */}
        <div ref={imageContainer} className="relative aspect-[4/3] w-full border border-white/10 order-1 lg:order-2 overflow-hidden bg-zinc-950">
          <Image
            src="/assets/images/propuestadevalor.png"
            alt="Cuidado y preservación de obras de arte"
            fill
            className="object-cover"
          />
          {/* Dark Mode Integration Overlay */}
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply transition-opacity duration-500 hover:opacity-20" />
        </div>
      </div>
    </section>
  );
}
