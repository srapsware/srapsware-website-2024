module.exports = {
  trailingSlash: true,
  i18n: {
    locales: ["en", "fr", "hi"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
};
