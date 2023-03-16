/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

// const nextConfig = {
//   i18n,
//   reactStrictMode: true,
// };

module.exports = {
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
