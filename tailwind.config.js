module.exports = {
  purge:["./src/**/*.{js,jsx,ts,tsx}",],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#2F3E46',
        primarytooltip: '#00515769',
        containerprimary:'#56A0A5A3',
        secondary: '#FFFFFF',
        textprimary:'#8CF7FF',
        textsecondary:'#FFFFFF',
        iconprimary: '#0C99A3',
        iconsecondary: '#15CDD9'
      },
      height:{
        topbar:"80px" 
      },
      width:{
        sidebar:"80px", 
        icon:"85%"
      },
      keyframes: {
        enter: {
          '0%': { transform: 'translateX(-10rem)' },
          '100%': { transform: 'none' }
        }
      },
      animation: {
        enter: 'enter 0.5s ease-in-out',
      },

      fontSize: {
        'xs': '.70rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      }
    },
  },
  plugins: [],
}