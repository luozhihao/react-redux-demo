/* eslint-disable */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
          // edit this for additional asset file types
          test: /\.(png|jpg|gif)$/, 
          loader: 'url-loader?limit=819200'
      },
      {
          test: /\.js$/,
          // excluding some local linked packages.
          // for normal use cases only node_modules is needed.
          exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
          loader: 'babel'
      },
      {   test: /\.css$/, 
          loader: 'style-loader!css-loader?sourceMap' 
      },
      { 
          test: /\.(woff|svg|eot|ttf)\??.*$/,
          loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      }
    ]
  }
}



// This will make the redux-simpler-router module resolve to the
// latest src instead of using it from npm. Remove this if running
// outside of the source.
var src = path.join(__dirname, '..', '..', 'src')
var fs = require('fs')
if (fs.existsSync(src)) {
  // Use the latest src
  module.exports.resolve = { alias: { 'react-router-redux': src } }
  module.exports.module.loaders.push({
    test: /\.js$/,
    loaders: ['babel'],
    include: src
  });
}
