const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const babelLoader = {
  test: /(\.jsx|\.js)$/,
  loader: "babel-loader",
  exclude: /(node_modules(?!\/webpack-dev-server)|bower_components)/,
};

const cssLoader = {
  test: /(\.scss|\.css)/,
  use: [
    { loader: MiniCssExtractPlugin.loader },
    {
      loader: "css-loader",
      options: {
        modules: {
          localIdentName: "kn-[name]__[local]___[hash:base64:5]",
        },
        importLoaders: 1, // Убедитесь, что эта опция используется для правильной работы sass-loader
      },
    },
    { loader: "sass-loader" },
  ],
};

const pngLoader = {
  test: /\.png$/,
  loader: "url-loader?limit=10000&mimetype=image/png",
};

const mdLoader = {
  test: /\.md$/,
  loader: "raw",
};

const jsonLoader = {
  test: /\.json$/,
  loader: "json",
};

const svgLoader = {
  test: /\.svg$/,
  loader: "svg-inline-loader?classPrefix",
};

module.exports = {
  babelLoader,
  cssLoader,
  pngLoader,
  mdLoader,
  jsonLoader,
  svgLoader,
};
