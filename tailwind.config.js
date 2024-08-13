module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,astro,mdx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'main-bg': '#282C33',
        'column-bg': '#3A3F47',
        'primary-text': '#FFFFFF', // custom white
        'secondary-text': '#ABB2BF', // Custom secondary text color
        'navigation': '#729CEE',
      },
      fontSize: {
        'title': '2rem', // Custom title font size
        'normal': '1rem', // Custom normal font size
      },
    },
  },
  plugins: [],
};