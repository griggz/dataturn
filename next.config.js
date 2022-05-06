require("dotenv").config();

module.exports = {
  reactStrictMode: false,
  env: {
    ENV: process.env.ENV,
    BACKEND_URL: process.env.BACKEND_URL,
    BACKEND_ACCESS_TOKEN: process.env.BACKEND_ACCESS_TOKEN,
  },
  images: {
    domains: ["images.unsplash.com", "source.unsplash.com"],
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};
