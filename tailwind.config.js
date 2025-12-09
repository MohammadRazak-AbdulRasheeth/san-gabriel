/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          500: '#1e3a5f',
          600: '#1a3252',
          900: '#0f1c2e'
        },
        accent: {
          500: '#f97316',
          600: '#ea580c'
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          600: '#4b5563',
          900: '#111827'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}