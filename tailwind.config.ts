import type {Config} from "tailwindcss"

const config: Config = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        spinSlow: {
          "0%": {transform: "rotate(0deg)"},
          "100%": {transform: "rotate(360deg)"},
        },
      },
      animation: {
        "spin-slow": "spinSlow 10s linear infinite",
      },
    },
  },
  plugins: [],
}

export default config
