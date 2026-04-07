import { Hero } from "@/features/hero/components/Hero";
import { ValueProposition } from "@/features/about/components/ValueProposition";
import { ServiceGrid } from "@/features/services/components/ServiceGrid";
import { ContactSection } from "@/features/contact/components/ContactSection";
import { Typography } from "@/shared/components/ui/Typography";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header / Logo (Floating variant) */}
      <nav className="absolute top-0 left-0 w-full z-50 px-6 lg:px-12 py-8 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto">
          <Typography variant="label" className="font-bold text-foreground">
            Guille Irmscher
          </Typography>
        </div>
        <div className="hidden md:flex gap-8 pointer-events-auto">
          <a href="#servicios" className="text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">
            Servicios
          </a>
          <a href="#contacto" className="text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">
            Contacto
          </a>
        </div>
      </nav>

      {/* Main Sections */}
      <Hero />
      <ValueProposition />
      <ServiceGrid />
      <ContactSection />

      {/* Footer */}
      <footer className="px-6 lg:px-12 py-12 bg-background border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
        <Typography variant="label" className="text-[10px]">
          © 2024 Guille Irmscher. Todos los derechos reservados.
        </Typography>
        <div className="flex gap-12">
          <Typography variant="label" className="text-[10px] text-muted-foreground">
            LOGÍSTICA PARA EL MUNDO DEL ARTE
          </Typography>
          <Typography variant="label" className="text-[10px] text-muted-foreground">
            BUENOS AIRES, AR
          </Typography>
        </div>
      </footer>
    </main>
  );
}
