const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const {getIfUtils, removeEmpty} = require('webpack-config-utils')

module.exports = env => {
  const {ifProd, ifNotProd} = getIfUtils(env)
  const config = {
    context: resolve('src'),
    entry: {
      app: './index.js',
      vendor: ['./app.scss']
    },
    output: {
      filename: ifProd('bundle.[name].[chunkhash].js', 'bundle.[name].js'),
      path: resolve('dist'),
      // publicPath: '/dist/',
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
          test: /\.(scss|sass|css)$/,
          use: ifProd(
            ExtractTextPlugin.extract(
            {
              fallback: 'style-loader',
              use: [{loader: 'css-loader'}, {loader:'sass-loader'}]
            }),
            ['style-loader','css-loader', 'sass-loader']
          ),
          exclude: /node_modules/
        },
        {
          test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          loader: 'file-loader?name=fonts/[name].[ext]'
        }
      ]
    },
    plugins: removeEmpty([
      new ProgressBarWebpackPlugin(),
      ifProd(new ExtractTextPlugin('styles.[name].[chunkhash].css')),
      ifProd(new InlineManifestWebpackPlugin()),
      ifProd(new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor', 'manifest']
      })),
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'head',
      }),
      new OfflinePlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: ifProd('"production"', '"development"')
        }
      })
    ]),
  }
  if(env.debug){
    console.log(config)
    debugger
  }
  return config
}