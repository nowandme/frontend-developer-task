module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  media: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#4A96FF',
      background: '#131319',
      surface: '#27292D',
      border: '#35373B',
      gray: '#191920',
      white: '#fff',
      black: '#000',
      text: '#C5C7CA',
      muteText: '#7F8084',
      grayText: '#6B6C70'
    },
    fontFamily: {
      sora: ['Inter', 'sans-serif']
    },
    fontSize: {
      // '3xs': '0.675rem',
      // '2xs': '.775rem',
      sm: '0.75rem',
      base: '.875rem',
      // base: '1rem',
      lg: '1rem',
      xl: '1.125rem',
      '2xl': '1.75rem'
      // '3xl': '1.875rem',
      // '4xl': '2.25rem',
      // '5xl': '3rem',
      // '6xl': '4rem',
      // '7xl': '5rem'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
