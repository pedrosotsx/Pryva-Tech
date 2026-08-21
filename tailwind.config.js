/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pryva: {
          blue: '#2563EB',
          purple: '#7C3AED',
          surface: '#0F172A',
          slate: '#94A3B8',
          background: '#020617', // Fundo principal super escuro para profundidade
        }
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'xl': '1rem', // Arredondamento suave para os cards
      }
    },
  },
  plugins: [],
}