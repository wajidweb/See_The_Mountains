import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // User Specified Palette (No Green)
        teal: {
          DEFAULT: "#3D7070",
          50: "#f2f7f7",
          100: "#dce7e7",
          200: "#bcd2d2",
          300: "#98b9b9",
          400: "#6a9797",
          500: "#3D7070", // Primary Buttons: Dark Teal
          600: "#335e5e",
          700: "#2a4d4d",
          800: "#223d3d",
          900: "#1b3030",
          950: "#0f1c1c",
        },
        coral: {
          DEFAULT: "#E89A87",
          50: "#fdf6f4",
          100: "#faeae5",
          200: "#f5d4cb",
          300: "#efb9ac",
          400: "#ea9d8d",
          500: "#E89A87", // Secondary Buttons: Sunset Coral
          600: "#cf5940", // Rich, vibrant sunset coral hover
          700: "#b5442d",
          800: "#943926",
          900: "#7b3223",
        },
        mint: {
          DEFAULT: "#BCDDD2",
          50: "#f7fbf9",
          100: "#edf6f2",
          200: "#BCDDD2", // Alternate Sections: Ice Mint
          300: "#a3cfc1",
          400: "#86bead",
          500: "#6ba997",
          600: "#528a7b",
          700: "#426e62",
          800: "#375950",
          900: "#2f4a43",
        },
        charcoal: {
          DEFAULT: "#404947",
          50: "#f6f7f7",
          100: "#e2e5e4",
          200: "#c5cac8",
          300: "#a1a9a6",
          400: "#7c8683",
          500: "#606a67",
          600: "#4d5553",
          700: "#404947", // Headings: Charcoal
          800: "#363d3c",
          900: "#2f3534",
          950: "#1a1e1d",
        },
        peach: {
          DEFAULT: "#EBB49A",
          50: "#fdf8f6",
          100: "#faeee9",
          200: "#f5ddd1",
          300: "#efc7b3",
          400: "#EBB49A", // Highlight Elements: Warm Peach
          500: "#e29c7a",
          600: "#d37f57",
          700: "#b0623d",
          800: "#8e5035",
        },
        sand: {
          DEFAULT: "#E0C6A8",
          50: "#faf7f2",
          100: "#f4ede3",
          200: "#E0C6A8", // Cards / Subtle Backgrounds: Sand Beige
          300: "#d1af8a",
          400: "#c2976c",
          500: "#b38153",
          600: "#9d6b41",
          700: "#7f5336",
          800: "#694530",
        },
        // Re-themed WhatsApp to Dark Teal (no green)
        whatsapp: {
          DEFAULT: "#3D7070",
          dark: "#2a4d4d",
          hover: "#335e5e",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
