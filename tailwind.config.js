/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['var(--bowlby_one-font)', 'cursive']
      },
      colors: {
        fortnite: {
          yellow: '#FFFF00',
          blue: {
            100: '#00D5FF',
            300: '#0080FF',
            500: '#0055FE',
            700: '#0C3791',
            900: '#122D89'
          }
        }
      }
    },
  },
  plugins: [],
}
