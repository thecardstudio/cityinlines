/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // ── Brand colours ──────────────────────────────────────
      colors: {
        ink: {
          950: "#0f0e0c", // page background (dark)
          900: "#1a1915", // card bg
          800: "#242320", // hover / elevated
          700: "#2e2c28", // border
          600: "#3d3a34", // border light
          400: "#8a8470", // muted text
          100: "#f0ebe0", // primary text (dark mode)
          50:  "#f7f4ed", // page background (light)
        },
        amber: {
          400: "#e8bc6a", // accent hover
          500: "#d4a853", // accent (dark mode)
          700: "#8b5e1a", // accent (light mode)
          800: "#a06e22", // accent hover (light mode)
        },
      },
      // ── Typography ─────────────────────────────────────────
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body:    ["'DM Sans'", "sans-serif"],
        mono:    ["'DM Mono'", "monospace"],
      },
      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1rem" }],
        "xs":  ["0.75rem", { lineHeight: "1.125rem" }],
      },
      letterSpacing: {
        widest2: "0.2em",
        wider2:  "0.15em",
        wide2:   "0.12em",
      },
      // ── Spacing ────────────────────────────────────────────
      maxWidth: {
        prose2: "54ch",
      },
      // ── Animations ─────────────────────────────────────────
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up":   "fadeUp 0.6s ease forwards",
        "fade-in":   "fadeIn 0.4s ease forwards",
      },
      // ── Aspect ratios ──────────────────────────────────────
      aspectRatio: {
        "4/5": "4 / 5",
        "3/4": "3 / 4",
      },
    },
  },
  plugins: [],
};
