const { i18n } = require('./next-i18next.config');
module.exports = {
  trailingSlash: true,
  i18n,
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
