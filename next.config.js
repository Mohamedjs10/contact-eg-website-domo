/** @type {import('next').NextConfig} */

module.exports = {
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "ar",
    localeDetection: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
