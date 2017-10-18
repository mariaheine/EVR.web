const path = require("path");
// const webpack = require("webpack"); // HMR isnt quite usefull for aframe anyway

module.exports = {
  entry: "./src/Index.jsx",
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: path.join(__dirname, "public"),
    publicPath: "/public/",
    filename: "bundle.js"
  },
  devServer: {
    publicPath: "/public/"
  }
};
