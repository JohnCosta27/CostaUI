const path = require('path');
const pkg = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'test')],
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 8008,
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    (config.entry = path.join(__dirname, 'test', 'index.js')), (config.mode = 'development');
    config.plugins = [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'test', 'index.html'),
      }),
      //new BundleAnalyzerPlugin(),
    ];
  }

  if (argv.mode === 'production') {
    (config.entry = path.join(__dirname, 'src', 'index.js')), (config.mode = 'production');
    config.output.library = pkg.name;
    config.output.libraryTarget = 'umd';
  }

  return config;
};
