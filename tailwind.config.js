/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          light: '#FAF8F5', // refined warm off-white canvas
          dark: '#0D0D0E',  // deep cinematic obsidian
        },
        ink: {
          light: '#1A1918', // rich charcoal near-black typography
          dark: '#F5F5F7',  // soft off-white typography
          muted: {
            light: '#6C6A65',
            dark: '#A1A1A6',
          },
        },
        signature: {
          DEFAULT: '#D97706', // warm amber / copper editorial signature accent
          dark: '#F59E0B',
          hover: '#B45309',
        },
        card: {
          light: '#F2EFE9', // warm off-white card background
          dark: '#161618',
        },
        border: {
          light: '#E4DFD7', // subtle warm off-white border
          dark: '#27272A',
        }
      },
      fontFamily: {
        display: ['"Syne"', '"Cabinet Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};
