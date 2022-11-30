/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'gradient-check1': 'hsl(236, 72%, 79%)',
        'gradient-check2':'hsl(237, 63%, 64%)',
        'main':'hsl(240, 78%, 98%)',
        'navigasi':'hsl(234, 14%, 74%)',
        'heading-c':'hsl(233, 13%, 49%)',
        'content-c':'hsl(232, 13%, 33%)'
       },
              fontFamily:{
                'Montserrat': ['Montserrat', 'sans-serif','arial'],
              }
    },
  },
  plugins: [],
}
