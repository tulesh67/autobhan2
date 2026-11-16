/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#060912',
        darker: '#04070e',
        card: '#0c1220',
        cardHover: '#101830',
        borderDark: '#141b2e',
        borderSubtle: '#232c44',
        borderBright: '#2a3452',
        racing: '#ff6a2b',
        racingDark: '#e5581e',
        racingGlow: 'rgba(255, 90, 31, 0.38)',
        textMain: '#f4f6fb',
        textMuted: '#c3cadb',
        textSubtle: '#a9b1c6',
        charcoal: '#0e1526',
        silver: '#a9b1c6',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
