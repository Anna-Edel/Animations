
const path = require('node:path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist', // Указывает папку со статическими файлами
    open: true,       // Автоматическое открытие браузера
    port: 8080,       // Порт для разработки
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    })
  ],
};