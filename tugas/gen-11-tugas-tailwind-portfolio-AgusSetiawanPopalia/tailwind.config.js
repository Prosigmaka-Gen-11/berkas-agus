/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      'extra':'30px',
      'max' : '30%',
    },
    extend: {
      colors:{
        'primary': '#E6DED7',
        'primary-trans': 'rgb(230,222,215,0.5)',
        'secondary' : '#F8F4F0',
        'tertiary' : 'rgb(198,130,89)'
      },
      spacing: {
        'almost-screen': '80vh',
      }
    },
  },
  plugins: [],
}
