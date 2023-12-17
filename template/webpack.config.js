const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name]-[contenthash:8].js',
    chunkFilename: 'js/[name].c.[contenthash:8].js',
  },

  devServer: {
    compress: true,
    port: 9000,
    hot: true,
    client: {
      overlay: false
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]__[hash:base64:5]', // 指定类名格式
              },
            },
            options: {
              modules: true,
              localIdentName: '[local]_[hash:base64:5]'
            }
          },
          'postcss-loader', "less-loader",
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
};
