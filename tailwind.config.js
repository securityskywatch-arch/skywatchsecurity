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
      },
    },
  },
  plugins: [],
};
