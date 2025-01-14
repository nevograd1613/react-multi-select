const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { babelLoader, cssLoader } = require("./loaders");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(process.cwd(), "dist"),
    library: "@kenshooui/react-multi-select-18",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [babelLoader, cssLoader],
  },
};

/** TODO: migrate to webpack 5
  output: {
    filename: "index.js",
    clean: true,
    library: {
      name: "@kenshooui/react-multi-select-18",
      type: "commonjs2",
    },
  },*/
