require("dotenv").config();

module.exports = {
  reactStrictMode: false,
  env: {
    ENV: process.env.ENV,
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
