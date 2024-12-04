/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700',
        secondary: '#1a1a2e',
        accent: '#4a4a6a',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom, #000000, #0a192f)',
      },
    },
  },
  plugins: [],
}