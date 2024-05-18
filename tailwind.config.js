/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        // base colors
        "brand-primary": "#E8001C",
        "brand-secondary": "#2C2C2C",

        // primary
        "primary-100": "#FACCD2",
        "primary-200": "#F7AAB3",
        "primary-300": "#F3808D",
        "primary-400": "#F05568",
        "primary-500": "#EC2A42",
        "primary-600": "#E8001C",
        "primary-700": "#C10017",
        "primary-800": "#9B0013",
        "primary-900": "#74000E",

        // neutral
        "neutral-100": "#FFFFFF",
        "neutral-200": "#D5D5D5",
        "neutral-300": "#B9B9B9",
        "neutral-400": "#959595",
        "neutral-500": "#727272",
        "neutral-600": "#4F4F4F",
        "neutral-700": "#2C2C2C",
        "neutral-800": "#252525",
        "neutral-900": "#1D1D1D",

        // info
        "info-100": "#CAFCFB",
        "info-200": "#98F3FB",
        "info-300": "#60DDF1",
        "info-400": "#37C0E0",
        "info-500": "#0097CE",
        "info-600": "#0175B2",
        "info-700": "#005995",
        "info-800": "#003E77",
        "info-900": "#002E62",

        // success
        "success-100": "#C9FCD1",
        "success-200": "#97F9AE",
        "success-300": "#61EC8F",
        "success-400": "#38DB7E",
        "success-500": "#03C46B",
        "success-600": "#02A76B",
        "success-700": "#018D68",
        "success-800": "#00715F",
        "success-900": "#015E56",

        // danger
        "danger-100": "#FDD7D6",
        "danger-200": "#FAADB3",
        "danger-300": "#F28396",
        "danger-400": "#E76184",
        "danger-500": "#D6316D",
        "danger-600": "#B82367",
        "danger-700": "#9A1862",
        "danger-800": "#7D0F58",
        "danger-900": "#660950",

        // warning
        "warning-100": "#FFF8CE",
        "warning-200": "#FEEC9A",
        "warning-300": "#FFDE6A",
        "warning-400": "#FFD143",
        "warning-500": "#FEBC04",
        "warning-600": "#DB9C03",
        "warning-700": "#B77D02",
        "warning-800": "#926001",
        "warning-900": "#7A4C00",
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
