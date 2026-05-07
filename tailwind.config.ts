import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      colors: {
        violet: "var(--violet)",
        "violet-foreground": "var(--violet-foreground)",
        earth: "var(--earth)",
        "earth-foreground": "var(--earth-foreground)",
        cream: "var(--cream)",
        "ocean-mid": "var(--ocean-mid)",
      },
    },
  },
  plugins: [],
};

export default config;
