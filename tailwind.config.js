/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        B612Mono: "B612 Mono, monospace",
        Roboto: "Roboto, sans-serif",
      },
      backgroundImage: {
        "white-papper":
          "url('https://ninetheme.com/themes/html-templates/agrikon/assets/images/shapes/ripped-paper-header-1.png')",
        "white-papper1": "url(`./src/assets/bg-img/1.png`)",
        "contact-bg": "url(`./src/assets/New/intro-bg-1.jpg`)",
        "grey-papper":
          "url('https://ninetheme.com/themes/html-templates/agrikon/assets/images/shapes/ripped-paper-gray-up.png')",
        "header-papper":
          "url('https://ninetheme.com/themes/html-templates/agrikon/assets/images/shapes/ripped-paper-base-2.png')",
        "yellow-papper":
          "url('https://ninetheme.com/themes/html-templates/agrikon/assets/images/shapes/ripped-paper-primary-up.png')",
      },
      colors: {
        "primary-green": "#305946",
        "primary-yellow": "#f3c25a",
        "primary-offWhite": "#f6f5f2",
      },
    },
  },
  plugins: [],
};
