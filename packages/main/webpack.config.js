const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 3000,
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        a: "a@http://localhost:3001/remoteEntry.js",
        b: "b@http://localhost:3002/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin(),
  ],
};
