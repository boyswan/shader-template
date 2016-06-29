var webpack = require('webpack');
var path = require('path')
var WebpackConfig = require('webpack-config').Config

module.exports = new WebpackConfig().merge({
  resolve: {
    root: path.join(__dirname, '..'),
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
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime']
        }
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=[path][name].[ext]'
      },
      { test: /\.(glsl|frag|vert)$/, loader: 'raw', exclude: /node_modules/ },
      { test: /\.(glsl|frag|vert)$/, loader: 'glslify', exclude: /node_modules/ }
    ]
  }
})
