/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        // base colors
        "brand-primary": "#d2b48c",
        "brand-secondary": "#2C2C2C",

      },
      boxShadow: {
        sm: "0px 1px 2px 0px rgba(0, 0, 0, 0.08)",
        md: "0px 2px 4px -2px rgba(0, 0, 0, 0.05), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)",
        lg: "0px 2px 4px -2px rgba(0, 0, 0, 0.05), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)",
        xl: "0px 4px 6px 0px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
        "2xl":
          "0px 10px 10px 0px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)",
        "3xl": "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      fontSize: {
        base: "14px",
        sm: "12px",
        xs: "10px",
        lg: "16px",
        xl: "20px",
      }
    },
  },
  plugins: [],
};
