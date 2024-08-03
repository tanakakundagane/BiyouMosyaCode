/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        primeColor: '#1e90ff',
        blueLight: '#e0ffff',
        darkBlue: '#191970',
        black: '#000'
      },
      fontFamily: {
        title:["Noto Serif", "sans-serif"],
      },
      transitionDuration: {
        '3000': '3000ms',
        '5000': '5000ms',
        '7000': '7000ms',
        '9000': '9000ms',
      },
      animation: {
        'scale-in': 'scaleIn 10s ease-in-out forwards',
      },
      keyframes: {
        scaleIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}
