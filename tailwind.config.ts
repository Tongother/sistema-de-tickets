import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        sans: ['Open Sans', 'sans-serif'],
        tilt: ['Tilt Warp', 'sans-serif'],
        pop: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        carrousel: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-163.4px * 9))" },
        },
      },
      animation: {
        carrousel: "carrousel 25s linear infinite",
      }
    },
  },
  plugins: [],
};
export default config;
