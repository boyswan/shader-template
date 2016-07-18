var webpack = require('webpack');
var path = require('path')
var WebpackConfig = require('webpack-config').Config
var base = path.join(__dirname, '..', 'webpack/webpack.config.base.js')

module.exports = new WebpackConfig().extend(base).merge({
  debug: true,
  devtool: 'eval',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
})
