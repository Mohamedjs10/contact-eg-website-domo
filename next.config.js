/** @type {import('next').NextConfig} */

module.exports = {
  // output: "export",
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "ar",
    localeDetection: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
