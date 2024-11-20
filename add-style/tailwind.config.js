/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        photo: "url('./assets/images/work.jpg')",
      },
      colors:{
        primary: '#9a3412',
      secondary: '#f87171',

      },
      screens:{
        mobile:"425px",
        tablet: '640px',
        laptop:'1024px',
        desktop:'1280px',
      }
    },
  },
  plugins: [],
}

