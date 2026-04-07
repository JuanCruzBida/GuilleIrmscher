DOCUMENTO MAESTRO: BRIEF ANTIGRAVITY V4.0.15
Proyecto: "The Invisible Glove" - Fine Art Logistics (Landing Page de Alta Conversión)
Punto de Entrada: @pm-orquestador

1. Project DNA & Constraints
Type: Landing Page (One-Page FSD) orientada a servicios logísticos para artistas.

Primary KPI: LCP < 2.5s y Construcción de Autoridad Visual.

Design Lock: Dark Mode Absolute. Cero alternancias de tema.

Color Space (OKLCH Exclusivo):

Base/Fondo: oklch(0.15 0.02 250) (Negro Carbón profundo).

Acento/Energía: oklch(0.85 0.21 95) (Amarillo Vibrante).

Texto/Contraste: oklch(0.98 0 0) (Blanco Técnico).

Dirección de Arte (CERO ASSETS): No existen imágenes, fotografías ni archivos SVG externos. El escuadrón debe resolver la interfaz mediante Diseño Tipográfico Brutalista/Elegante, uso de grillas geométricas, contraste de color extremo y micro-interacciones.

2. Reglas de Ejecución Agéntica (Anti-Alucinación)
@pm-orquestador: Tienes prohibido simular o escribir las respuestas de otros nodos. Debes invocar las Skills de cada especialista y esperar su ejecución en disco antes de avanzar a la siguiente fase.

Si se requieren íconos para los 5 servicios (Recepción, Traslado, Envío, Retiro, Guarda), utilizar exclusivamente librerías basadas en código (ej. lucide-react) coloreadas con la variable de acento amarillo. Prohibido inventar rutas en /public.

3. Topological DOM & Semantic Map
ARIA Landmarks: banner (Hero), main (Servicios y Propuesta de Valor), contentinfo (Contacto y Footer).

Jerarquía de Encabezados (H1-H6):

H1 (Kinetic - sr-only real): "Logística de Obras de Arte: Pensado por un artista para artistas."

H2: "El cuidado que tu obra merece" (Propuesta de valor).

H3: Servicios individuales ("Guarda", "Traslado", "Recepción").

H2: "Contacto Directo".

4. Kinetic & Motion Blueprint
Global Scroll: Implementación de Lenis (lerp: 0.05). El scroll debe sentirse con "peso", simulando la inercia de mover una escultura.

Hero Reveal: Texto revelado letra por letra. stagger: 0.05s, duration: 1.5s. Inicia en blanco y resuelve en amarillo el concepto clave.

GSAP Scoping: Uso obligatorio de @gsap/react con el hook useGSAP y scope refs. Prohibidos los selectores globales.

5. Component Dictionary (FSD)
C-01 (Hero Section): RSC. Fuerte enfoque tipográfico con el claim principal y botón de ancla.

C-02 (Service Grid): Client Component. Grilla bento para los 5 servicios. Las tarjetas reaccionan al hover con físicas de resortes (Springs), sin modificar el layout.

C-03 (Contact Action): Client Component. Integración de botón estilo terminal o sólido que apunte a un enlace de WhatsApp (11.3878.7277) y un correo de texto plano (ghi779@gmail.com).

6. The Oracle’s Gatekeeping (QA)
Contraste WCAG AA: Verificar matemáticamente que el Amarillo oklch(0.85 0.21 95) sobre el Negro supera el ratio de 4.5:1.

Tipado: Todo prop de los componentes FSD debe estar tipado explícitamente. Cero tolerancia a any.

*** Directiva para el PM: Inicia la Fase 1 (Topología) llamando explícitamente a @ux-architect.