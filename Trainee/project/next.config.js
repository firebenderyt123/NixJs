const path = require("path");

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.resolve.extensions.push(".ts", ".tsx", ".js", ".scss");
    config.resolve.alias["@components"] = path.join(
      __dirname,
      "src/components"
    );
    config.resolve.alias["@images"] = path.join(__dirname, "src/assets/images");
    config.resolve.alias["@fonts"] = path.join(__dirname, "src/assets/fonts");
    config.resolve.alias["@pages"] = path.join(__dirname, "src/pages");
    config.resolve.alias["@core"] = path.join(__dirname, "src/core");
    config.resolve.alias["@config"] = path.join(__dirname, "src/core/config");
    config.resolve.alias["@store"] = path.join(__dirname, "src/core/store");
    config.resolve.alias["@utils"] = path.join(__dirname, "src/core/utils");
    config.resolve.alias["@styles"] = path.join(__dirname, "src/styles");

    return config;
  },
};
