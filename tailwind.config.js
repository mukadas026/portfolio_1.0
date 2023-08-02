/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'main': '#152238',
        'sec': '#66D7EB'
      },
      backgroundImage: {
        'img1': "url('/src/assets/me1.jpg')"
      }
    }
  },
  plugins: []
};