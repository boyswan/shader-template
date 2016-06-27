var webpack = require('webpack');
var path = require('path')

module.exports = {
    debug: true,
    devtool: 'eval',
    entry: [
      'webpack-hot-middleware/client',
      './src/app.js'
    ],
    output: {
      path: path.join(__dirname, '..', 'dist'),
      filename: 'bundle.js'
    },
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
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.ProvidePlugin({
        'Rx': 'rxjs'
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
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass!postcss-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss-loader'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=[path][name].[ext]'
      },
      { test: /\.(glsl|frag|vert)$/, loader: 'raw', exclude: /node_modules/ },
      { test: /\.(glsl|frag|vert)$/, loader: 'glslify', exclude: /node_modules/ }
    ]
  }
}
