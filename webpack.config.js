const path = require('path');
const appPath = path.join(__dirname, './app');
const distPath = path.join(__dirname, './dist');
const pkg = require('./package.json');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: path.join(appPath, 'index.js'),
  output: {
    path: path.join(distPath),
    filename: 'bundle-[hash:10].js'
  },
  module: {
    rules: [
      { test: /\.html$/, use: 'file-loader?name=templates/[name]-[hash:10].html' },
      { test: /\.(js|jsx)$/, exclude: /(node_modules)/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: [/fontawesome-webfont\.svg/, /fontawesome-webfont\.eot/, /fontawesome-webfont\.ttf/, /fontawesome-webfont\.woff/, /fontawesome-webfont\.woff2/], use: 'file-loader?name=fonts/[name].[ext]' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(appPath, 'index.ejs') }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  devServer: {
    compress: true,
    open: true,
    host: "GACDTL001SS369k", // Your Machine Name
    port: 8080
  },
  devtool: "source-map"
};

module.exports = config;