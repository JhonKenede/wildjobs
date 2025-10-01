// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "wildjobs.es" }],
        destination: "https://www.wildjobs.es/:path*",
        permanent: true,
      },
    ];
  },
};
