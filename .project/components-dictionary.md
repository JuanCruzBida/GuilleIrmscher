# Diccionario de Componentes: "The Invisible Glove"

**Proyecto:** The Invisible Glove - Fine Art Logistics
**Responsable:** @ux-architect
**Estado:** Definido

## 1. Componentes Core (Atómos)

| Componente | Tipo | Función | Propiedades |
| :--- | :--- | :--- | :--- |
| **Typography** | Atom | Texto con sistema modular | `variant` (H1, H2, H3, Body), `color` (Accent, Contrast) |
| **Button** | Atom | Gatillo de acción | `variant` (Solid, Ghost, Terminal), `href` |
| **Icon** | Atom | Representación visual | `name` (Lucide-React: Package, Truck, Move, ArrowRight, ShieldCheck) |
| **Background** | Atom | Lienzo base | `color` (oklch(0.15 0.02 250)) |

## 2. Componentes Funcionales (Moléculas)

### C-01: Hero Section (RSC)
- **Propósito:** Captar la atención inmediata con el claim principal.
- **Estructura:** H1 Kinetic + CTA.
- **Animación:** Revelación letra por letra (GSAP).

### C-02: Service Card (Client Component)
- **Propósito:** Presentar cada uno de los 5 servicios.
- **Estructura:** Icono + H3 + Descripción corta.
- **Física:** Reacción al hover con resortes (Springs), sin desplazar layout colindante.

### C-03: Contact Block (Client Component)
- **Propósito:** Conversión directa.
- **Estructura:** H2 + Action Buttons (WhatsApp/Mail).
- **Estilo:** Estilo terminal sólido.

## 3. Componentes de Orquestación (Organismos / Layout)

### L-01: Bento Grid
- **Propósito:** Contenedor de las 5 Service Cards.
- **Estructura:** Grilla geométrica asimétrica (Layout Brutalista).

### L-02: Smooth Scroll Shell (Client)
- **Propósito:** Envolver toda la aplicación para inyectar Lenis.
- **Parámetro:** `lerp: 0.05`.
