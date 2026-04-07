# 📚 Antigravity Framework - Knowledge Base & Post-Mortems
**Status:** REQUIRED READING FOR ALL AGENTS BEFORE SPRINT PLANNING.
**Purpose:** Prevent critical architectural failures, UX degradation, and AI hallucinations in Next.js 15 + GSAP environments.

---

## 🛑 TRAUMA 1: El "Efecto Simulacro" (Hallucinated Code)
* **El Problema:** Los agentes de código reportaban haber implementado soluciones complejas o refactorizaciones, pero en realidad dejaban comentarios `// TODO: Implementar lógica` o simplemente no escribían el archivo en el disco.
* **La Solución (Regla Estricta):** PROHIBICIÓN TOTAL DE PLACEHOLDERS. Toda refactorización o creación de componentes debe usar la herramienta `write_file` con el código 100% funcional. Si el PM detecta código simulado, debe rechazarlo internamente.

## 🛑 TRAUMA 2: El "Divorcio" de GSAP y Next.js 15
* **El Problema:** Las animaciones no se ejecutaban porque GSAP buscaba selectores globales (`.card`) que el Virtual DOM de React 19/Next.js ocultaba o hidrataba tarde.
* **La Solución (Arquitectura Motion):** - Obligatorio usar `@gsap/react`.
  - Prohibido el uso de selectores globales. 
  - Toda animación DEBE estar envuelta en un `useGSAP` inyectando un `ref` de contenedor estricto: `useGSAP(() => { ... }, { scope: containerRef });`.

## 🛑 TRAUMA 3: El Asesino Silencioso (`prefers-reduced-motion`)
* **El Problema:** La regla de accesibilidad W3C abortaba completamente la inicialización de GSAP en usuarios de Windows con animaciones reducidas, rompiendo el layout o dejando el sitio "invisible" (si usaban `opacity-0` inicial).
* **La Solución (Graceful Degradation):** NUNCA abortar GSAP con un `if` temprano. En su lugar, si hay reducción de movimiento, las variables de distancia (`y: 100`) deben pasar a `0`, y la opacidad debe ser rápida, pero los `ScrollTriggers` deben mantenerse vivos para garantizar que el DOM se hidrate correctamente.

## 🛑 TRAUMA 4: El Secuestro de Scroll (Scroll Hijacking)
* **El Problema:** Atar componentes narrativos (como Stories de IG o Videos) estrictamente al scroll del usuario (`scrub: true` + `pin: true`) generaba fricción. Si el usuario scrolleaba hacia arriba, se veía obligado a "rebobinar" toda la animación, matando la conversión.
* **La Solución (UX Cinética - "Play Sensor"):** - Para bloques narrativos o explicativos: Usar `ScrollTrigger` con `once: true` y auto-play basado en tiempo (ej. duraciones de 3s por slide). El scroll debe quedar LIBRE.
  - Reservar `scrub: true` y pines ÚNICAMENTE para secciones declaradas como "Parallax 3D Inmersivo".

## 🛑 TRAUMA 5: Colapsos Geométricos y CSS Junior
* **El Problema:** Textos masivos (`10vw`) superponiéndose con la NavBar, carruseles horizontales rompiéndose en bloques verticales masivos, y tarjetas de testimonios asimétricas.
* **La Solución (CSS Defensivo Obligatorio):**
  - **Grillas y Cards:** Toda card debe tener `h-full flex flex-col`. El footer de la card (autor, botones) debe llevar `mt-auto` para forzar la simetría sin importar la cantidad de texto superior.
  - **Scroll Horizontal:** Los hijos de un flex/grid horizontal deben tener `width` geométrico estricto (`w-[80vw]` o `shrink-0`).
  - **Tipografía:** Prohibido usar `vw` para titulares sin usar `text-wrap: balance` y revisar el `z-index` respecto al layout global.

## 🛑 TRAUMA 6: Entornos "Sucios" y Fallos de Compilación
* **El Problema:** Next.js se confundía de ruta raíz debido a archivos `package-lock.json` huérfanos en carpetas superiores del usuario, rompiendo las rutas de JavaScript de cliente. Warnings por configuraciones experimentales (`reactCompiler`) inválidas.
* **La Solución:** Asegurar que `next.config.ts` no contenga flags experimentales inválidas para la versión actual y mantener el entorno libre de lockfiles externos. El servidor de desarrollo debe levantar sin warnings críticos antes de testear motion.