/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '0px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {
      width: {
        'iframe': '568px',
      }, 
      height: {
        'technologies': 'calc(100vh - 264px)',
        'lg-continue': 'calc(100vh - 336px)',
        'md-continue': 'calc(50vh - 268px)',
        'iframe': '443px'
      },
      maxHeight: {
        'technologies': '600px',
        'description_card': '400px',
        '144': '576px',
        '192': '768px',
      },
      minHeight: {
        'md-continue': 'calc(60vh - 268px)',
        'lg-aboutMe': '800px'
      },
      maxWidth: {
        'technologies2': '1280px',
      },
      padding: {
        'technologies': '0 calc(50% - 592px / 2)',
        'technologies2': '0 3%',
      },
      borderWidth: {
        '6': '6px' 
      },
      invert: {
        '5': 'invert(50%)',
        '30': 'invert(30%)',
      },
      fontFamily: {
        'Mooli': 'Mooli, sans-serif;'
      },
    },
  },
  plugins: [],
}