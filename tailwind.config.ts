import type { Config } from 'tailwindcss'
const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
    ...defaultColors,
    ...{
      "bright-orange": {
        "100" : "hsl(31, 77%, 52%)"},
      "dark-cyan": {
        "100" :  "hsl(184, 100%, 22%)"},
      "very-dark-cyan": {
        "100" : "hsl(179, 100%, 13%)"}
    },
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : colors,
      fontFamily: {
        lexend: ['Lexend Deca'],
        big:['Big Shoulders Display']

      },
    },
  },
  plugins: [],
}
export default config
