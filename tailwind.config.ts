import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#0F172A",
        surface: "#F8FAFC",
        border: "#E2E8F0",
        muted: {
          DEFAULT: "#94A3B8",
          foreground: "#475569",
        },
        primary: {
          DEFAULT: "#0F2A4A",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#2563EB",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#0EA5E9",
          foreground: "#FFFFFF",
        },
        success: "#059669",
        warning: "#D97706",
        error: "#DC2626",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        heading: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      fontVariantNumeric: {
        tabular: "tabular-nums",
      },
    },
  },
  plugins: [],
} satisfies Config;
