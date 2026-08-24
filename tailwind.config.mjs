/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a',
          primary: '#dc2626',
          accent: '#2563eb',
          muted: '#64748b',
          surface: '#1e293b'
        }
      }
    },
  },
  plugins: [],
}
