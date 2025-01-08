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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "footer-bg-img": "url('/images/macleod-tartan.png')",
      },
      fontFamily: {
        sans: ['var(--font-morris-roman)']
      }
    },
  },
  plugins: [],
} satisfies Config;
