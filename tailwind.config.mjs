import {transform} from "next/dist/build/swc/generated-native";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeInSlow: "fadeIn 1s ease-in-out",
        slideInDown: "slideInDown 1s ease-in-out 1",
        spinnerGrow: "spinnerGrow 1s ease-in-out 1",
        fadeInUp: "fadeInUp 1s ease-in-out 1",
        fadeInLeft: "fadeInLeft 1s ease-in-out 1",
        fadeInLeftQuick: "fadeInLeft 0.5s ease-in-out 1",
        fadeInRight: "fadeInRight 1s ease-in-out 1",
        fadeInRightQuick: "fadeInRight 0.5s ease-in-out 1",
        flowerAnimationRight: "flowerAnimationRight 3s ease-in-out infinite",
        flowerAnimationLeft: "flowerAnimationLeft 3s ease-in-out infinite",
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
        fadeInLeft: {
          "0%": {opacity: 0, transform: "translate3d(-100%, 0, 0)"},
          "100%": {opacity: 1, transform: "translate3d(0, 0% 0)"},
        },
        fadeInRight: {
          "0%": {opacity: 0, transform: "translate3d(100%, 0, 0)"},
          "100%": {opacity: 1, transform: "translate3d(0, 0% 0)"},
        },
        flowerAnimationRight: {
          "0%": {transform: "rotate(0deg) translateX(0)"},
          "50%": {transform: "rotate(5deg) translateX(15px)"},
          "100%": {transform: "rotate(0deg) translateX(0)"},
        },
        flowerAnimationLeft: {
          "0%": {transform: "rotate(0deg) translateX(0) scaleX(-1)"},
          "50%": {transform: "rotate(-5deg) translateX(-15px) scaleX(-1)"},
          "100%": {transform: "rotate(0deg) translateX(0) scaleX(-1)"},
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
