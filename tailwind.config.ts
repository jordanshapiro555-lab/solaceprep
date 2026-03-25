import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "solace-green": "#1A3C34",
        "solace-green-light": "#244D43",
        "solace-gold": "#C9974A",
        "solace-gold-dark": "#B5853A",
        "solace-cream": "#F9F6F1",
        "solace-text": "#2D2D2D",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      backgroundImage: {
        "wave-green":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 80'%3E%3Cpath fill='%231A3C34' d='M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
