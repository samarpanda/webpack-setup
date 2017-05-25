const {resolve} = require('path')
const webpack = require('webpack')
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')
const {getIfUtils, removeEmpty} = require('webpack-config-utils')

module.exports = env => {
  const {ifProd, ifNotProd} = getIfUtils(env)
  return {
    context: resolve('src'),
    entry: './index.js',
    output: {
      path: resolve('dist'),
      filename: 'bundle.js',
      publicPath: '/dist/',
      pathinfo: ifNotProd(),
    },
    devtool: env.prod ? 'source-map' : 'eval',
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['babel-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          loaders: ['style-loader','css-loader', 'sass-loader'],
          exclude: /node_modules/
        }
      ]
    },
    plugins: removeEmpty([
      new ProgressBarWebpackPlugin()
    ])
  }
}