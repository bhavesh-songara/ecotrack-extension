const { theme } = require("./src/constants/theme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: theme.colors,
      boxShadow: {
        xs: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        sm: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
        md: "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
        lg: "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
        xl: "0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)",
        "2xl": "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
        "3xl": "0px 32px 64px -12px rgba(16, 24, 40, 0.14)",
      },
      borderWidth: {
        6: "6px",
        10: "10px",
      },
      borderRadius: {
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
