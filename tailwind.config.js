/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        neutral: {
          "off-white": "hsl(36, 100%, 99%)",
          'cyan': "#36C4C5",
          'red': "#F52257",
          'grey': "#545454",
        },
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Rokkitt: ["Rokkitt", "sans-serif"],
      },
      backgroundImage: {
        "hero-img": "url('../images/bg_header.jpg')",
        "nuage-img": "url('../images/bg_nuage.jpg')",
        "news-img": "url('../images/bg_newsletter.jpg')",
        "photo-img": "url('../images/bg_appareil_photo.jpg')",
      },
    },
  },
  plugins: [],
};
