module.exports = {
  future: { purgeLayersByDefault: true },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        third: 'var(--third)',
        hover: 'var(--hover)',
        violet: 'var(--violet)',
        pink: 'var(--pink)',
        cyan: 'var(--cyan)',
        blue: 'var(--blue)',
        green: 'var(--green)',
        red: 'var(--red)',
      },
      textColor: {
        base: 'var(--text-base)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      lineHeight: { 'extra-loose': '2.2' },
    },
  },
  variants: {},
  plugins: [],
};
