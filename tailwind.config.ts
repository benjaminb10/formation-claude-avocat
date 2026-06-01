import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        surface: '#F5F6FA',
        ink: '#0C0E1A',
        text: '#3A3F5C',
        muted: '#858BA6',
        accent: {
          DEFAULT: '#DA7756',
          hover: '#C4440A',
          light: '#FFF0EB',
        },
        blue: {
          DEFAULT: '#1A3EF5',
          light: '#EEF0FE',
        },
        border: '#E3E5EE',
        dark: '#0C0E1A',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        h1: ['56px', { lineHeight: '1.06', letterSpacing: '-0.02em' }],
        h2: ['38px', { lineHeight: '1.12' }],
        h3: ['19px', { lineHeight: '1.3' }],
        eyebrow: ['11px', { lineHeight: '1', letterSpacing: '0.12em' }],
      },
      borderRadius: {
        DEFAULT: '8px',
        card: '12px',
        pill: '6px',
      },
      maxWidth: {
        wrap: '1140px',
      },
      boxShadow: {
        nav: '0 2px 16px rgba(12,14,26,0.08)',
        mockup: '0 30px 60px -20px rgba(12,14,26,0.35)',
        card: '0 8px 32px rgba(12,14,26,0.1)',
        'card-hover': '0 14px 44px rgba(12,14,26,0.08)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        blink: 'blink 0.53s step-end infinite',
        'fade-in-up': 'fade-in-up 0.64s ease-out forwards',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config
