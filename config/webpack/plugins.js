const path = require("path");
const webpack = require("webpack");

const definePlugin = (env) =>
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(env),
    },
  });

const ignorePlugin = new webpack.IgnorePlugin({
  resourceRegExp: /^\.\/locale$/, // Игнорирование всех файлов, которые начинаются с ./locale
  contextRegExp: /moment$/, // Для пакета moment
});

module.exports = {
  definePlugin,
  ignorePlugin,
};
