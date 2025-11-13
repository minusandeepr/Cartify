// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
      // add custom theme tokens here if you want, e.g. colors, spacing
      colors: {
        // example brand color (optional)
        brand: {
          50: "#EEF2FF",
          500: "#6366F1",
          600: "#4F46E5",
        },
      },
    },
  },
  plugins: [
    // Add official plugins as needed. If you add CommonJS-only plugins,
    // import them via ESM at top and reference them (Tailwind v4+ supports ESM style).
    // e.g. // import forms from '@tailwindcss/forms'; then use: plugins: [forms]
  ],
};
