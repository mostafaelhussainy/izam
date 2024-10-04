import "@fontsource/inter/400.css"; // Regular weight
import "@fontsource/inter/600.css"; // Regular weight
import "@fontsource/inter/700.css"; // Bold weight
import "@fontsource/inter/800.css"; // Extra bold weight

const typography = {
  fontFamily: "Inter, sans-serif",
  fontStyle: "normal",

  h1: {
    fontSize: "1.75rem", // 28px
    fontWeight: 800,
    // Use for main page titles
  },
  h2: {
    fontSize: "1.5rem", // 24px
    fontWeight: 800,
    // Use for secondary titles
  },
  h3: {
    fontSize: "1.375rem", // 22px
    fontWeight: 800,
    // Use for section headings
  },
  subtitle1: {
    fontSize: "1rem", // 16px
    fontWeight: 700,
  },
  body1: {
    fontSize: "1rem", // 16px
    fontWeight: 400,
    // Use for main body text
  },
  body2: {
    fontSize: "0.875rem", // 14px
    fontWeight: 400,
    // Use for secondary body text
  },
  button: {
    fontSize: "0.875rem", // 14px
    fontWeight: 700,
    // Use for button text
  },
  input: {
    fontSize: "0.875rem", // 14px
    fontWeight: 400,
    // Add any other styles for input elements
  },
};

export default typography;
