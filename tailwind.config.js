module.exports = {
  content: [
    // ... your content config
  ],
  theme: {
    extend: {
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
        }
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],  // Modern, geometric display font
        sans: ['Inter', 'sans-serif'],      // Clean, highly readable body font
        mono: ['JetBrains Mono', 'monospace']  // For code snippets/technical text
      },
    }
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#4f46e5', // indigo-600
          'primary-focus': '#4338ca', // indigo-700
          'primary-content': '#ffffff',
          secondary: '#818cf8', // indigo-400
          accent: '#312e81', // indigo-900
          neutral: '#1e1b4b', // indigo-950
          'base-100': '#ffffff',
          'base-200': '#f3f4f6',
          'base-300': '#e5e7eb',
          'base-content': '#1e1b4b', // indigo-950
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#818cf8', // indigo-400
          'primary-focus': '#6366f1', // indigo-500
          'primary-content': '#1e1b4b', // indigo-950
          secondary: '#4f46e5', // indigo-600
          accent: '#c7d2fe', // indigo-200
          neutral: '#e0e7ff', // indigo-100
          'base-100': '#1e1b4b', // indigo-950
          'base-200': '#312e81', // indigo-900
          'base-300': '#3730a3', // indigo-800
          'base-content': '#e0e7ff', // indigo-100
        }
      }
    ]
  }
}