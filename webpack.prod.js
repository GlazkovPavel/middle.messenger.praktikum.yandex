const TerserPlugin = require('terser-webpack-plugin'); // Минификация JavaScript
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new MiniCssExtractPlugin(),],
    splitChunks: { chunks: 'all' },
  },
  output: {
    filename: "[name].[contenthash].js",
  },
};
