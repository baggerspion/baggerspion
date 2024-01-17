/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      'sm': '0.85rem',
      'header': '2.75rem',
      'subheading': '1.375rem',
      'leader': '1.75rem',
      'arrow': '2rem',
      'about': '1.225rem',
    },
    extend: {
      colors: {
        'overlay': '#191919ED',
        'subheading': '#FFFFFF4D',
        'about': '#0000004D',
      },
      screens: {
        'md': '890px',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(0px - 50% - 25px))' },
        }
      },
      animation: {
        'slider': 'scroll 20s infinite linear',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
