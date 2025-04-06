import animate from "tailwindcss-animate";
import { setupInspiraUI } from "@inspira-ui/plugins";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      colors: {
        indigo: {
          '50': '#eef2ff',
          '100': '#e0e7ff',
          '200': '#c7d2fe',
          '300': '#a5b4fc',
          '400': '#818cf8',
          '500': '#6366f1',
          '600': '#4f46e5',
          '700': '#4338ca',
          '800': '#3730a3',
          '900': '#312e81',
          '950': '#1e1b4b',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      textColor: {
        DEFAULT: 'hsl(var(--indigo-950))',
      },
    },
  },
  plugins: [animate, setupInspiraUI, require('daisyui')],
  daisyui: {
    themes: [{
      light: {
        primary: '#4f46e5',
        'primary-focus': '#4338ca',
        'primary-content': '#ffffff',
        secondary: '#818cf8',
        accent: '#312e81',
        neutral: '#1e1b4b',
        'base-100': '#ffffff',
        'base-200': '#f3f4f6',
        'base-300': '#e5e7eb',
        'base-content': '#1e1b4b',
      },
      dark: {
        primary: '#818cf8',
        'primary-focus': '#6366f1',
        'primary-content': '#ffffff',
        secondary: '#4f46e5',
        accent: '#a5b4fc',
        neutral: '#e0e7ff',
        'base-100': '#1e1b4b',
        'base-200': '#312e81',
        'base-300': '#3730a3',
        'base-content': '#e0e7ff',
      }
    }]
  }
};
