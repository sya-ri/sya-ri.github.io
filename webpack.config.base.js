/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { DefinePlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { GitRevisionPlugin } = require('git-revision-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');

const gitRevisionPlugin = new GitRevisionPlugin({
  commithashCommand: 'rev-parse --short HEAD',
});

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  target: ['web', 'es5'],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: 'static' }],
    }),
    new DefinePlugin({
      COMMIT_HASH: `"${gitRevisionPlugin.commithash()}"`,
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [['optipng']],
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new HtmlMinimizerPlugin()],
  },
};
