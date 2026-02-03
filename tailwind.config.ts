import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#6366f1", dark: "#4f46e5", light: "#818cf8" },
        surface: { DEFAULT: "#0f0f23", card: "#1a1a3e", hover: "#252550" },
        accent: { cyan: "#22d3ee", green: "#10b981", orange: "#f59e0b", red: "#ef4444" },
      },
      backdropBlur: { glass: "16px" },
      boxShadow: { glass: "0 8px 32px rgba(99, 102, 241, 0.1)" },
    },
  },
  plugins: [],
};
export default config;
