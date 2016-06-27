var webpack = require('webpack');
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
      path: path.join(__dirname, '..', 'dist'),
      filename: 'bundle.min.js',
    },
    plugins: [
      new ExtractTextPlugin('style.min.css', { allChunks: true }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      })
    ],

    module: {
      loaders: [
        {
          test: /\.js$|\.jsx$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
            plugins: ['transform-runtime']
          }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!sass?indentedSyntax=true&sourceMap=true!autoprefixer-loader?browsers=last 2 version')
      }
      ]
    },
    postcss: [
      autoprefixer({
        browsers: ['last 2 versions']
      })
    ]
};
