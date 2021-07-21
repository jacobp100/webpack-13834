const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  devServer: {
    port: 3002,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "b",
      filename: "remoteEntry.js",
      exposes: {
        ".": "./src/index.js",
      },
      shared: {
        react: {
          shareScope: "react",
        },
      },
    }),
  ],
};
