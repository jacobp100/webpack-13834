const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  devServer: {
    port: 3001,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "a",
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
