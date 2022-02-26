module.exports = {
  purge:["./src/**/*.{js,jsx,ts,tsx}",],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#2F3E46',
        secondary: '#FFFFFF'
      }
    },
  },
  plugins: [],
}