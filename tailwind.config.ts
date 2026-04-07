import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          hover: "oklch(var(--accent-hover) / <alpha-value>)",
        },
        muted: "oklch(var(--muted) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(3rem, 10vw, 8rem)", { lineHeight: "1.1" }],
        h1: ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1.2" }],
        h2: ["clamp(1.5rem, 4vw, 3rem)", { lineHeight: "1.3" }],
        h3: ["clamp(1.25rem, 3vw, 2rem)", { lineHeight: "1.4" }],
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        "2xl": "var(--spacing-2xl)",
      },
    },
  },
  plugins: [],
};

export default config;
