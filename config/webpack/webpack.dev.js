const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");
const { definePlugin, ignorePlugin } = require("./plugins");

module.exports = merge(common, {
  plugins: [definePlugin("dev"), ignorePlugin], // Добавляем ignorePlugin
  devtool: "inline-source-map",
});
