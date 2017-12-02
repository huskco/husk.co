import webpack from 'webpack';
const bourbon = require('bourbon');

export default {
  entry: `${__dirname}/source/index.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.sass$/,
        loaders: ["style-loader", "css-loader", "sass-loader?includePaths[]=" + bourbon.includePaths]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: `file-loader?name=[path][name].[ext]`,
      },
      {
        test: /\.svg$/,
        exclude: [/images\/background-svg/],
        loader: 'svg-inline-loader'
      },
      {
        test: /\.svg$/,
        include: [/images\/background-svg/],
        loader: 'url-loader'
      },
      {
        test: /\.md$/,
        loader: 'markdown-with-front-matter-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: process.argv.indexOf('-p') === -1 ? null : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};
