const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: 'bundle.min.js'
    },
    devServer: {
      contentBase: './build',
    },
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
        },
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader"
            }
          ]
        },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader"
        },
        {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
        },
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve('./index.html'),
        }),
      ]
  };