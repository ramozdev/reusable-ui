/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "img.reservoir.tools",
      "i.pinimg.com",
      "assets.coingecko.com",
    ],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },
};

export default config;
