# General Development Rules

- **Server Components by Default**: Use RSC as the default state.
- **Client Components Opt-in**: Use 'use client' only when interactivity is needed.
- **Strict TypeScript**: Never use 'any'.
- **FSD Architecture**: Respect the Feature-Sliced Design layers.
- **Performance**: Optimize for LCP and CLS.
- **Network Boundary**: Define explicit boundaries between FE and BE using Server Actions and Zod validation.
- **State management**: Use URL (nuqs) for state that should survive reloads.
- **Validation**: Every IO boundary must be validated with Zod.
