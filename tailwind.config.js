module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: 'var(--ion-color-primary)',
        secondary: 'var(--ion-color-secondary)',
        tertiary: 'var(--ion-color-tertiary)',
        medium: 'var(--ion-color-medium)',
        "medium-shade": 'var(--ion-color-medium-shade)',
        "medium-tint": 'var(--ion-color-medium-tint)',
        light: 'var(--ion-color-light)',
        dark: 'var(--ion-color-dark)',
        "dark-shade": 'var(--ion-color-dark-shade)',
        "dark-tint": 'var(--ion-color-dark-tint)',
        shade: "var(--ion-background-color-shade)"
      }
    },
    borderRadius: {
      'none': '0',
      default: '0.25rem',
      'md': '0.375rem',
      'lg': '1.0rem',
      'full': '9999px',
      'sm': '0.125rem',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
