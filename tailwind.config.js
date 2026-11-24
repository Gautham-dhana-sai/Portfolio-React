/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        richBlack: '#0A0A0A',
        charcoal: '#171717',
        darkGrey: '#303030',
        mediumGrey: '#737373',
        lightGrey: '#E5E5E5',
        offWhite: '#F5F5F5',
        pureWhite: '#FFFFFF',
        brand: {
          black: '#0A0A0A',
          charcoal: '#171717',
          darkGrey: '#303030',
          mediumGrey: '#737373',
          lightGrey: '#E5E5E5',
          offWhite: '#F5F5F5',
          white: '#FFFFFF',
          orange: '#FF6B27',
          softOrange: '#FF8A50',
          orangeDark: '#E05514',
          orangeSubtle: '#FFF5F0',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(10, 10, 10, 0.05)',
        'elevated': '0 10px 30px -5px rgba(10, 10, 10, 0.08)',
        'orange-soft': '0 8px 30px -6px rgba(255, 107, 39, 0.2)',
      },
    },
  },
  plugins: [],
}
