"use client";

import React, { useRef } from "react";
import { ServiceCard } from "./ServiceCard";
import { Package, Truck, Move, ArrowRight, ShieldCheck } from "lucide-react";
import { Typography } from "@/shared/components/ui/Typography";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Recepción en Taller",
    description: "Recepción de obra en nuestro taller (La Paternal) y envío coordinado al destino final en CABA.",
    Icon: Package,
    className: "service-card-anim col-span-12 md:col-span-8 lg:col-span-6 row-span-2",
  },
  {
    title: "Retiro en Terminales",
    description: "Retiro desde expresos y encomiendas, con entrega en CABA (retiro sin cargo en expresos zonales).",
    Icon: Truck,
    className: "service-card-anim col-span-12 md:col-span-4 lg:col-span-3",
  },
  {
    title: "Retiro, Embalaje y Retorno",
    description: "Retiramos de galerías o salones, embalamos de forma 100% segura y despachamos por expreso hacia el interior.",
    Icon: ArrowRight,
    className: "service-card-anim col-span-12 md:col-span-4 lg:col-span-3",
  },
  {
    title: "Embastado Integral",
    description: "Recibimos la obra enrollada, la embastamos en partnership con Talleres Turk, y luego la re-enviamos en tubo rígido.",
    Icon: Move,
    className: "service-card-anim col-span-12 md:col-span-4 lg:col-span-3",
  },
  {
    title: "Guarda Temporal",
    description: "Servicio de depósito seguro en taller (desde 15 días hasta 6 meses) para coordinar perfectamente los tiempos de logística.",
    Icon: ShieldCheck,
    variant: "accent" as const,
    image: "/assets/images/servicio_guarda.png",
    className: "service-card-anim col-span-12 md:col-span-8 lg:col-span-9",
  },
];

import Image from "next/image";

export function ServiceGrid() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".service-card-anim");
      
      gsap.from(cards, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <section id="servicios" ref={container} className="px-6 lg:px-12 py-24 bg-background">
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
