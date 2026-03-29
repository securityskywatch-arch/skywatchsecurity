/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        /** Aligned with max-w-7xl (80rem) for consistent professional width */
        page: "80rem",
      },
      colors: {
        primary: "#C48100",
        secondary: "#F9F1D1",
        accent: "#FFCC00",
        base: "#1A1A1A",
        sage: "#BDB28E",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        lift: "0 20px 40px -12px rgba(26, 26, 26, 0.35)",
        "lift-gold": "0 24px 48px -12px rgba(196, 129, 0, 0.25)",
        /** Inset highlight: cream card reads like logo (light lift on top edge) */
        "card-inset-light":
          "inset 0 1px 0 0 rgba(255, 255, 255, 0.65), inset 0 -1px 0 0 rgba(26, 26, 26, 0.06)",
        "card-inset-dark":
          "inset 0 1px 0 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 0 rgba(0, 0, 0, 0.35)",
      },
      keyframes: {
        /** Slow gold wash — matches primary/accent; honour motion-reduce on elements */
        "brand-ambient": {
          "0%, 100%": {
            opacity: "0.42",
            transform: "translate(0%, 0%) scale(1)",
          },
          "50%": {
            opacity: "0.78",
            transform: "translate(4%, 3%) scale(1.06)",
          },
        },
      },
      animation: {
        "brand-ambient": "brand-ambient 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
