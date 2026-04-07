"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@/shared/components/ui/Typography";

export function ValueProposition() {
  return (
    <section className="px-6 lg:px-12 py-24 bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Abstract / Monolith Text */}
        <div className="space-y-8 order-2 lg:order-1">
          <Typography variant="h2" className="text-foreground">
            Cuidado Absoluto.
          </Typography>
          <Typography variant="body" className="text-muted-foreground leading-relaxed">
            Nuestra filosofía es simple: la obra es la única protagonista. Nos encargamos de toda la complejidad logística, el embalaje técnico y el traslado con extrema precaución para que el artista y el coleccionista descansen en la certeza estructural de nuestro servicio.
          </Typography>
        </div>

        {/* Image Container with Structural Brutalism aesthetic */}
        <div className="relative aspect-[4/3] w-full border border-white/10 order-1 lg:order-2 overflow-hidden bg-zinc-950">
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
