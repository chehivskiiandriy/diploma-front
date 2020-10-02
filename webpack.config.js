const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const DEV = 'development';
const PROD = 'production';

const BUILD_FOLDER = './build';
const PUBLIC_FOLDER = './public';

const NODE_ENV = process.env.NODE_ENV || DEV;
const APP_FOLDER = process.cwd();
const { ANALYZE } = process.env;

const __DEV__ = NODE_ENV === DEV;
const __PROD__ = NODE_ENV === PROD;

const DIST_FOLDER = path.join(APP_FOLDER, PUBLIC_FOLDER);

const plugins = [
  new webpack.DefinePlugin({
    __DEV__: JSON.stringify(__DEV__),
    __PROD__: JSON.stringify(__PROD__),
  }),
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    template: `${BUILD_FOLDER}/index.ejs`,
    inject: true,
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
  }),
];

if (ANALYZE) {
  plugins.push(new BundleAnalyzerPlugin({ generateStatsFile: true }));
}

if (__PROD__) {
  plugins.push(new CompressionPlugin());
}

const CONFIG = {
  mode: NODE_ENV,
  output: {
    path: DIST_FOLDER,
    publicPath: '/',
    chunkFilename: '[name].js',
    filename: '[name].js',
  },
  target: 'web',
  entry: {
    app: path.join(APP_FOLDER, BUILD_FOLDER, 'app'),
  },
  watch: false,
  devtool: __DEV__ ? 'source-map' : false,
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 1000000,
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
        commons: {
          name: 'vendors',
          chunks: 'all',
          minChunks: 5,
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          symbolId: '[name].[hash]',
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

if (__DEV__) {
  CONFIG.devServer = {
    contentBase: './public',
    host: 'localhost',
    port: 4000,
    disableHostCheck: true,
    historyApiFallback: true,
  };
}

module.exports = CONFIG;
