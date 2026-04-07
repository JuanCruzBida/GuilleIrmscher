import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { SmoothScrollProvider } from "@/shared/lib/lenis-provider";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guille Irmscher | Logística de Obras de Arte",
  description: "Servicios especializados en traslado, guarda y embalaje de obras de arte. Soluciones diseñadas por artistas para la preservación absoluta de tus obras.",
  keywords: ["logística de arte", "traslado de obras", "guarda de arte", "embalaje de cuadros", "Guille Irmscher", "fine art logistics"],
  robots: "index, follow",
  openGraph: {
    title: "Guille Irmscher | Expertos en lo Delicado",
    description: "Servicios de logística premium para el mundo del arte en Buenos Aires.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable} dark antialiased`}>
      <body className="selection:bg-accent selection:text-base-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Guille Irmscher - Logística de Obras de Arte",
              "description": "Servicios expertos en traslado, recepción y guarda de obras de arte en Buenos Aires.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Buenos Aires",
                "addressCountry": "AR"
              },
              "url": "https://guilleirmscher.com"
            })
          }}
        />
        <Suspense fallback={null}>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </Suspense>
      </body>
    </html>
  );
}
