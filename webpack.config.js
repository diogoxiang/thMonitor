// const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    thmonitor: __dirname + '/src/index.js',
  },
  output: {
    path: __dirname + '/example/build',
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
}