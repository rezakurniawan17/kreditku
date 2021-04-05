module.exports = {
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#2468e6',
        'heading': '#3f3f46',
        'title': '#52525b',
        'captions': '#71717a',
      },
      boxShadow: {
        'primary': '0px 18px 40px -12px rgba(36, 104, 230, 0.35)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens')
  ],
}
