var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var PS_DIR = path.resolve(__dirname, 'src/client/app/pubsub');

var config = {
  entry: {
      'app': APP_DIR + '/control-panel.jsx',
      'pubsub': PS_DIR + '/main.js'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;