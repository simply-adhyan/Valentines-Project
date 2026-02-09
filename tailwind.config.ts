import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        // Design system roles (2025-level)
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        surface: 'hsl(var(--surface))',
        muted: 'hsl(var(--muted))',
        error: 'hsl(var(--error))',
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        handwritten: ['var(--font-caveat)', 'var(--font-dancing-script)', 'cursive'],
        caveat: ['var(--font-caveat)', 'cursive'],
        dancing: ['var(--font-dancing-script)', 'cursive'],
        indie: ['var(--font-indie-flower)', 'cursive'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        slideIn: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(1.05)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.05)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(236, 72, 153, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(236, 72, 153, 0.7)' },
        },
        'sway': {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'ripple': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        slideIn: 'slideIn 0.6s ease-out',
        wiggle: 'wiggle 1s ease-in-out infinite',
        heartbeat: 'heartbeat 1.5s ease-in-out infinite',
        'spin-slow': 'spin-slow 3s linear infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'slide-in': 'slide-in 0.6s ease-out',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'glow': 'glow 2.5s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite',
        'ripple': 'ripple 2s ease-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-valentine': 'linear-gradient(135deg, #fce7f3 0%, #fecaca 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        xs: '0.25rem',
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'glow-pink': '0 0 30px rgba(236, 72, 153, 0.4)',
        'glow-red': '0 0 30px rgba(239, 68, 68, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(255, 255, 255, 0.2)',
        'elevation-sm': '0 1px 2px rgba(0,0,0,0.06)',
        'elevation-md': '0 2px 8px rgba(0,0,0,0.08)',
        'elevation-lg': '0 8px 24px rgba(0,0,0,0.10)',
      },
      transitionDuration: {
        150: '150ms',
        200: '200ms',
        250: '250ms',
      },
    },
  },
  plugins: [],
}
export default config
