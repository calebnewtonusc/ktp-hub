import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        zinc: { 950: "#09090b" },
        gold: { DEFAULT: "#F5C518", light: "#FFD86E", dark: "#C49A10" },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.5s ease both",
        "slide-down": "slide-down 0.55s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-left": "fade-left 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-left": {
          "0%": { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
      },
    },
  },
  safelist: [
    ...Array.from({ length: 8 }, (_, i) => `delay-${i}`),
    "animate-fade-up",
    "animate-fade-in",
    "animate-slide-down",
    "animate-fade-left",
  ],
  plugins: [],
};

export default config;
