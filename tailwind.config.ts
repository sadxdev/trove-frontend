import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Indigo-900
        secondary: "#F59E0B", // Amber-500
        accent: "#10B981", // Emerald-500
        background: "#F9FAFB", // Gray-50
        text: "#111827", // Gray-900
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
