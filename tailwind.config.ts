import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#0A0A0A",
        "off-white": "#E8E6E3",
        "signal-red": "#C1121F",
      },
      fontFamily: {
        display: ["Monumental", "Monument Extended", "MonumentExtended", "PP Monument Extended", "Arial Black", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["IBM Plex Mono", "SFMono-Regular", "Consolas", "monospace"],
      },
    },
  },
};

export default config;
