var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var assetsPath = path.join(__dirname, 'public/js');
module.exports = {
    resolve: {
    extensions: ['.js']
    },
    entry: {
      app: path.join(assetsPath, 'index.js')
    },
    output: {
      path: path.join(__dirname, 'public/js'),
      publicPath: '/',
      filename: '[name].bundle.js'
    },
    module: {

        loaders: [
            {
              test: /.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                presets: ['es2015', 'react']
              }
            }
        ]
        
    },
    plugins: [
    ]
};
