module.exports = {
  theme: {
    extend: {
      size: {
        sm: '0.75rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        bluePrincipal: {
          'light': '#5f73ff',
          'medium': '#232f83',
          'dark': '#161e54',
        },
        gray: {
          light: '#E0E0E0',
          medium: '#D9D9D9',
          dark: '#9E9E9E',
        },
        grayBluish: {
          light: '#A2B4C5',
          medium: '#8B9AAE',
          dark: '#5f73ff',
        }
      },
    },
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
}