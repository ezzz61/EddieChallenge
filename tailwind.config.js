module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      // xxl: "1536px",
    },
    colors: {
      white: {
        normal: "#FFFFFF",
      },
      green: {
        light: "#27AE60",
      },
      red: {
        normal: "#B91C1C",
        light: "#EB5757",
      },
      white: {
        normal: "#F2F2F2",
      },
      blue: {
        normal: "#1b8ccc",
        light: "#2D9CDB",
        dark: "#100E1D",
      },
      gray: {
        normal: "#333333",
        medium: "#E0E0E0",
        light: "#4F4F4F",
        lighter: "#828282",
        lightest: "#F2F2F2",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      heebo: ["Heebo", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
