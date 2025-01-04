import {transform} from "next/dist/build/swc/generated-native";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        slideInDown: "slideInDown 1s ease-in-out 0.25s 1",
        spinnerGrow: "spinnerGrow 1s ease-in-out 0.25s 1",
        fadeInUp: "fadeInUp 1s ease-in-out 0.25s 1",
      },
      keyframes: {
        fadeIn: {
          "0%": {opacity: 0},
          "100%": {opacity: 1},
        },
        slideInDown: {
          "0%": {visibility: "visible", transform: "translate3d(0,-100%,0)"},
          "100%": {transform: "translate3d(0,0%,0)"},
        },
        spinnerGrow: {
          "0%": {transform: "scale(0)"},
          "100%": {transform: "none", opacity: 1},
        },
        fadeInUp: {
          "0%": {opacity: 0, transform: "translate3d(0, 100%, 0)"},
          "100%": {opacity: 1, transform: "translate3d(0, 0% 0)"},
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
