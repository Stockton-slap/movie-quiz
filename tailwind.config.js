/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "360px",
      md: "768px",
      lg: "1440px",
    },
    colors: {
      white: "#fff",
      black: "#000",
      orange: "#fdbc42",
      brown: "#711414",
    },
    fontSize: {
      xs: ["14px", "1.2"],
      sm: ["16px", "1.2"],
      base: ["18px", "1.2"],
      lg: ["20px", "1.2"],
      xl: ["24px", "1.2"],
      "2xl": ["28px", "1.2"],
      "3xl": ["32px", "1.2"],
      h6: ["42px", "1.2"],
      h5: ["44px", "1.2"],
      h4: ["48px", "1.2"],
      h3: ["56px", "1.2"],
      h2: ["64px", "1.2"],
      h1: ["70px", "1.2"],
    },
    fontWeight: {
      semibold: "500",
      bold: "700",
      regular: "400",
    },
    fontFamily: {},
    boxShadow: {
      none: "0 0 #0000",
      mainShadow: "0px 6px 20px 0px rgba(92, 121, 123, 0.15)",
      cardsShadow: "0px 6px 13px 0px rgba(92, 121, 123, 0.20)",
      btnShadow: "0px 4px 4px 0px rgba(168, 168, 168, 0.25)",
    },
    extend: {
      backgroundImage: {
        hero: 'url("./media/images/background/welcome-background.png")',
      },
    },
  },
  plugins: [],
};
