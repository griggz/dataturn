require("dotenv").config();

module.exports = {
  reactStrictMode: false,
  env: {
    ENV: process.env.ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    AUTH_SECRET: process.env.AUTH_SECRET,
    JWT_SECRET: process.env.JWT_SECRET,
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
