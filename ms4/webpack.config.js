const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const extractSASS = new ExtractTextPlugin({
  filename: './css/[name].css',
  allChunks: true
});

var entry = [
  'babel-polyfill',
  './src/index.js'
]

var output = {
  path: path.join(__dirname, 'dist'),
  filename: 'js/[name].js',
  chunkFilename: 'js/[name].js',
  publicPath:'/static/'
}

var rules = [
  {
    use: 'babel-loader',
    include: __dirname,
    exclude:[
      path.resolve(__dirname, "node_modules"),
    ],
    test: /\.js$/
  },
  {
    test: /\.(scss|css)$/,
    use: process.env.NODE_ENV == 'production'
      ? extractSASS.extract({
        fallback: 'style-loader',
        use: [
          { loader: 'css-loader', options: { importLoaders: 1, minimize: true } },
           'sass-loader',
           'postcss-loader'
         ]
      })
      : [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'sass-loader'
      ]
  }
]

if(process.env.NODE_ENV != 'production') entry.push('webpack-hot-middleware/client')

const dev = {
  devtool: 'cheap-module-eval-source-map',
  entry: entry,
  output: output,
  plugins: [
    extractSASS,
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin([
      'dist/js/*.js',
      'dist/css/*.css'
    ])
  ],
  module: {
    rules: rules
  }
}

const prod = {
  entry: entry,
  output: output,
  plugins: [
    extractSASS,
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi]
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    rules: rules
  }
}

module.exports = process.env.NODE_ENV == 'production' ? prod :
                 dev;
