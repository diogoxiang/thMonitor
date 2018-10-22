const path = require('path');
const webpack = require('webpack');


const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    thmonitor: __dirname + '/src/index.js'
  },
  output: {
    path: __dirname + '/build',
    filename: "[name].js"
  },
  devtool: '#source-map',
  resolve: {
    extensions: ['.js', '.vue', '.json'], //import引入时，无需写扩展名的文件
    //  alias: {
    //    'vue$': 'vue/dist/vue.esm.js' //完整版本的vue
    //  }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }, ]
  },
  watch: true,
  watchOptions: { //不监听目录
    ignored: [/node_modules/, '/static/']
  },
  plugins: [
    // new UglifyJsPlugin()
    new HtmlWebpackPlugin({
      title: 'bl_resolve',
      filename: 'index.html',
      template: 'template.html'
    })
  ]
}