# Mapa Topológico: "The Invisible Glove"

**Proyecto:** The Invisible Glove - Fine Art Logistics
**Responsable:** @ux-architect
**Estado:** Definido

## 1. Estructura Arborescente (DOM Hierarchy)

- **`<header>`** [ARIA: banner]
  - `Logo` (The Invisible Glove)
  - `Nav` (Anchor links: Servicios, Contacto)
- **`<main>`** [ARIA: main]
  - **Section: Hero** [ID: hero]
    - `H1`: "Logística de Obras de Arte: Pensado por un artista para artistas." (Kinetic reveal)
    - `CTA`: "Solicitar Cuidados" (Anchor to Contacto)
  - **Section: Propuesta de Valor** [ID: value-prop]
    - `H2`: "El cuidado que tu obra merece"
    - `Bento Grid` (Servicios)
      - `Card`: Recepción
      - `Card`: Traslado
      - `Card`: Envío
      - `Card`: Retiro
      - `Card`: Guarda
  - **Section: Contacto** [ID: contacto]
    - `H2`: "Contacto Directo"
    - `Contact Form/Action`: WhatsApp (11.3878.7277) & Correo (ghi779@gmail.com)
- **`<footer>`** [ARIA: contentinfo]
  - `Legal / Copyright`
  - `Social Links`

## 2. Jerarquía Semántica (Hx)

- **H1**: Logística de Obras de Arte: Pensado por un artista para artistas.
- **H2**: El cuidado que tu obra merece
- **H3**: [Nombre del Servicio] (ej. Guarda, Traslado, Recepción)
- **H2**: Contacto Directo

## 3. Estrategia de Navegación (Zero-Leak)

- **One-Page Flow**: Todo el contenido reside en una sola página para máxima retención.
- **Smooth Scroll**: Implementación obligatoria de Lenis coordinado con Anchor Links.
- **Hitboxes**: Mínimo 44x44px en todos los botones y enlaces de navegación.
