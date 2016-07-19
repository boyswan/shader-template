var webpack = require('webpack');
var path = require('path')
var WebpackConfig = require('webpack-config').Config

module.exports = new WebpackConfig().merge({
  entry: ['./src/app.js'],
  resolve: {
    root: path.join(__dirname, '../../'),
    alias: {
      src: 'src',
      public: 'public',
      helpers: 'src/helpers'
    },
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.ProvidePlugin({
      'Rx': 'rx',
      'THREE': 'three'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /node_modules/, loader: 'ify' },
      { test: /\.(glsl|frag|vert)$/, loader: 'raw', exclude: /node_modules/ },
      { test: /\.(glsl|frag|vert)$/, loader: 'glslify', exclude: /node_modules/ }
    ],
    postLoaders: [
      {
        test: /\.js$/,
        loader: 'ify'
      }
    ]
  }
})
