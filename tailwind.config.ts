import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rob: ['Roobert, sans-serif'],
        ava: [
          'CANAVAR, sans-serif',
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32'
          }
        ]
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      colors: {
        prime: {
          100: '#6700CE',
          200: ' #5E0585'
        },
        alt: {
          100: '#C8304D',
          200: '#DE374B',
          300: '#00A478',
          400: '#00945F',
          500: '#F78430',
          600: '#FF1616'
        },
        grey: {
          100: '#DFDFDF',
          200: '#333333',
          300: '#222222',
          400: 'rgb(30, 30, 30)'
        }
      },
      boxShadow: {
        badge: '16px 18px 8px rgba(0, 0, 0, 0.25)'
      },
      backgroundImage: {
        body: "url('/assets/bg-blur-circles.svg')",
        'banner-frame': "url('/assets/bg-illu.png')",
        // body: ' linear-gradient(315deg, rgba(30, 30, 30, 1) 81%, rgba(83, 24, 111, 1) 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
} satisfies Config;
