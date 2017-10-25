const path = require("path");
// const webpack = require("webpack"); // HMR isnt quite usefull for aframe anyway

module.exports = {
  // into
  entry: "./src/Index.jsx",
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  output: {
    path: path.join(__dirname, "public"),
    publicPath: "/public/",
    filename: "bundle.js"
  },

  // dev
  devtool: "inline-source-map",
  devServer: {
    publicPath: "/public/",
    port: 8080,
    historyApiFallback: false
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
