import type { Config } from "tailwindcss";



const config: Config = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: 'var(--font-robot)',
        dancing: 'var(--font-dancing)'
      },
      animation: {
        'fadein': 'fadeIn 0.5s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          'from': {opacity: '0'} ,
          'to': {opacity: '1'}
        }
      }
    },
  },
  plugins: [],
};
export default config;
