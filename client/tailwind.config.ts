import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5c0404",        // Industrial Rust
        secondary: "#ebddd7",      // Soft Ivory
        text: "#4A3F35",  
        hoverprimary:"#7a0606",
        hoversecondary:"#d4c4be",
       // Deep Mocha

        // Optional: if you're using CSS variables somewhere
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        exo: ["Exo 2", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
