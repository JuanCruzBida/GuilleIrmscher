"use client";

import React from "react";
import { ServiceCard } from "./ServiceCard";
import { Package, Truck, Move, ArrowRight, ShieldCheck } from "lucide-react";
import { Typography } from "@/shared/components/ui/Typography";

const services = [
  {
    title: "Recepción",
    description: "Control de calidad y embalaje de alta seguridad para obras de arte.",
    Icon: Package,
    className: "col-span-12 md:col-span-8 lg:col-span-6 row-span-2",
  },
  {
    title: "Traslado",
    description: "Movimiento seguro y especializado de piezas delicadas.",
    Icon: Truck,
    className: "col-span-12 md:col-span-4 lg:col-span-3",
  },
  {
    title: "Envío",
    description: "Coordinación y preparación para despachos nacionales e internacionales.",
    Icon: Move,
    className: "col-span-12 md:col-span-4 lg:col-span-3",
  },
  {
    title: "Retiro",
    description: "Retiro programado en talleres y galerías.",
    Icon: ArrowRight,
    className: "col-span-12 md:col-span-4 lg:col-span-3",
  },
  {
    title: "Guarda",
    description: "Espacios acondicionados en nuestro taller para el resguardo temporal de tus obras.",
    Icon: ShieldCheck,
    variant: "accent" as const,
    image: "/assets/images/servicio_guarda.png",
    className: "col-span-12 md:col-span-8 lg:col-span-9",
  },
];

import Image from "next/image";

export function ServiceGrid() {
  return (
    <section id="servicios" className="px-6 lg:px-12 py-24 bg-background">
      <header className="mb-16 flex justify-between items-end">
        <div>
          <Typography variant="label" className="mb-2">
            Catálogo de Servicios
          </Typography>
          <Typography variant="h2">Expertos en lo Delicado</Typography>
        </div>
        <div className="hidden md:block">
          <Typography variant="body" className="text-muted-foreground text-sm max-w-[300px]">
            Toda obra de arte es única. Nuestra logística está diseñada para ser invisible, dejando que solo importe la obra.
          </Typography>
        </div>
      </header>

      <div className="grid grid-cols-12 auto-rows-fr gap-px bg-zinc-900 border border-zinc-900">
        {services.slice(0, 4).map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
          />
        ))}
        {/* Re-using image in the empty grey square below Delivery */}
        <div className="relative group hidden md:block col-span-12 md:col-span-12 lg:col-span-3 bg-zinc-950 overflow-hidden">
          <Image 
             src="/assets/images/imagen2.png" 
             fill 
             className="object-cover opacity-20 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100" 
             alt="Cuidado de arte" 
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none transition-opacity duration-700 group-hover:opacity-0" />
        </div>
        {services.slice(4).map((service, index) => (
          <ServiceCard
            key={index + 4}
            {...service}
          />
        ))}
        {/* Fill the remaining 3 columns next to Guarda */}
        <div className="relative group hidden lg:block col-span-3 bg-zinc-950 overflow-hidden">
           <Image 
             src="/assets/images/imagen1.png" 
             fill 
             className="object-cover opacity-20 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100" 
             alt="Herramientas" 
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none transition-opacity duration-700 group-hover:opacity-0" />
        </div>
      </div>
    </section>
  );
}
