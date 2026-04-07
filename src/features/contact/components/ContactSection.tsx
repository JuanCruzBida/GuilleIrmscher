"use client";

import React from "react";
import { Typography } from "@/shared/components/ui/Typography";
import { Button } from "@/shared/components/ui/Button";
import { Phone, Instagram, Send, ExternalLink } from "lucide-react";
import Image from "next/image";

export function ContactSection() {
  return (
    <section id="contacto" className="px-6 lg:px-12 py-32 bg-background border-t border-zinc-900">
      <div className="max-w-4xl">
        <Typography variant="label" className="mb-4">
          Conexión Directa
        </Typography>
        <Typography variant="h2" className="mb-12">
          Hablemos de tu Próximo Traslado
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="space-y-12">
            <Typography variant="body" className="w-full text-muted-foreground leading-relaxed">
              Trabajo de forma personalizada con artistas y coleccionistas. Si necesitas una cotización o asesoría sobre el manejo de tus obras, contáctame directamente por los siguientes canales.
            </Typography>

            <div className="flex flex-col gap-4">
              <a 
                href="https://wa.me/5491138787277" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-between p-6 bg-zinc-950 border border-zinc-800 hover:border-accent transition-all shadow-[4px_4px_0px_0px_rgba(245,224,94,0.1)] hover:shadow-[4px_4px_0px_0px_rgba(245,224,94,0.3)]"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <Typography variant="label" className="text-[10px] text-accent/60">WhatsApp</Typography>
                    <Typography variant="body" className="font-mono text-lg">+11 3878 7277</Typography>
                  </div>
                </div>
                <Send className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a 
                href="https://instagram.com/guille.irmscher" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-between p-6 bg-zinc-950 border border-zinc-800 hover:border-accent transition-all shadow-[4px_4px_0px_0px_rgba(245,224,94,0.1)] hover:shadow-[4px_4px_0px_0px_rgba(245,224,94,0.3)]"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Instagram className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <Typography variant="label" className="text-[10px] text-accent/60">Instagram</Typography>
                    <Typography variant="body" className="font-mono text-lg">@guille.irmscher</Typography>
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          <div className="relative group overflow-hidden border border-zinc-900 bg-zinc-950 flex flex-col justify-center p-12 order-first md:order-last">
             <Image 
               src="/assets/images/contacto.png" 
               alt="Taller de artista y herramientas"
               fill
               className="object-cover absolute inset-0 z-0 opacity-30 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-50"
             />
             <div className="absolute inset-0 bg-black/60 mix-blend-multiply z-0" />
             <div className="absolute top-0 left-0 w-full h-1 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 z-10" />
             <Typography variant="display" className="text-muted/10 absolute -bottom-8 -right-8 pointer-events-none select-none text-9xl z-0">
               ART
             </Typography>
             
             <div className="relative z-10">
               <Typography variant="h3" className="mb-6">Atención Prioritaria</Typography>
             <Typography variant="body" className="mb-8 text-sm text-muted-foreground">
               Todas las consultas son respondidas en menos de 24 horas hábiles. La seguridad de tu obra es mi compromiso personal.
             </Typography>
             <Button variant="terminal" className="w-fit" asChild>
                <a href="mailto:ghi779@gmail.com">ghi779@gmail.com</a>
             </Button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
