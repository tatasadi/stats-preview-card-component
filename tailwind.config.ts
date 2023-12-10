import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "very-dark-blue": "hsl(233, 47%, 7%)",
        "dark-desaturated-blue": "hsl(244, 38%, 16%)",
        "soft-violet": "hsl(277, 64%, 61%)",
        "transparent-white-60": "hsla(0, 0%, 100%, 0.6)",
        "transparent-white-75": "hsla(0, 0%, 100%, 0.75)",
      },
    },
  },
  plugins: [],
}
export default config
