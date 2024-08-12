/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ButtonColorPlus:'#9fdbd8',
      ButtonColor: '#FFB2C5',
      customGray: '#313638',
      DarkGray: '#3b4042',
      White:'#ffffff',
      Background:'#f5f5f5',
      Btn_Follow:'#e5e5e5',
      FilterBackground:'#313638',
      CardBackground:'#6FD1CC',
      LinkText:'#3188A3',
      SecondText:'#777d94',
      Btn_Bg:'#f1fbfa',
      Search_Bg: '#505456',

      
    },
    extend: {},
  },
  plugins: [ 
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}