const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: [
    /* three below required for hot module replacement */
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",

    /* regular entry point */
    "./src/App.jsx"
  ],
  devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/public/" // also required for HMR
  },
  devServer: {
    publicPath: "/public/",
    hot: true, // required for hot module repacement

    // the client and not devServer will worry about routing (?)
    // look cmder "404s will fallback to /index.html"
    // but its justa dev trick
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      //Components: path.resolve(__dirname, "js/pages/components")
    }
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  plugins: [
    /* two below required for HMR */
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  }
};
