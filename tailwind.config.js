module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:'#3B82F6',
        secondary:'#D1D5DB',
        error:'#EF4444',
        success:'#6EE7B7',
        warning:'#FBBF24',
        info:'#60A5FA'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
