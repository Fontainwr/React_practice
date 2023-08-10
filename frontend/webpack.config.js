const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
  const { production } = env ? env : { production: false };

  const main = {
    mode: "production",
    entry: "./src/index.jsx",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "build"),
    },
    module: {
      rules: [
        // ... your rules
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: "My React Project",
        template: "./src/index.html",
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  };

  const dev = {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      static: {
        directory: path.resolve(__dirname, "dev"),
      },
      port: process.env.PORT || 4000,
    },
  };

  return production ? main : { ...main, ...dev };
};
