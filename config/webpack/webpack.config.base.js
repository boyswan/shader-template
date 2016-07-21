var webpack = require('webpack');
var path = require('path')
var WebpackConfig = require('webpack-config').Config

module.exports = new WebpackConfig().merge({
  context: path.join(__dirname, './src'),
  entry: {
    app: 'app.js'
  },
  resolve: {
    extensions: ['', '.js'],
    modules: [
      path.resolve('./src'),
      path.resolve('./public'),
      path.resolve('./src/helpers'),
      'node_modules'
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'Rx': 'rx',
      'THREE': 'three'
    })
  ],
  module: {
    loaders: [
      { test: /\.html$/, loader: 'file', query: { name: '[name].[ext]' } },
      { test: /\.js$|\.jsx$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'file' },
      { test: /node_modules/, loader: 'ify' },
      { test: /\.(glsl|frag|vert)$/, loader: 'raw', exclude: /node_modules/ },
      { test: /\.(glsl|frag|vert)$/, loader: 'glslify', exclude: /node_modules/ }
    ],
    postLoaders: [
      { test: /\.js$/, loader: 'ify' }
    ]
  }
})
