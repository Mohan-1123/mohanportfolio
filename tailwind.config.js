/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#020B18',
        surface: '#0D1F35',
        'surface-elevated': '#112240',
        'border-color': '#1E3A5F',
        accent: '#00D4FF',
        'accent-purple': '#7B2FBE',
        'text-primary': '#E6F1FF',
        'text-secondary': '#8892B0',
        'text-muted': '#495670',
        success: '#64FFDA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 212, 255, 0.35)',
        'glow-lg': '0 0 40px rgba(0, 212, 255, 0.2)',
        'glow-purple': '0 0 20px rgba(123, 47, 190, 0.45)',
        card: '0 4px 30px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #00D4FF, #7B2FBE)',
      },
      animation: {
        'gradient-shift': 'gradient-shift 4s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(0, 212, 255, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 10px rgba(0, 212, 255, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(0, 212, 255, 0)' },
        },
      },
    },
  },
  plugins: [],
}

