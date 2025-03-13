const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: ['web' , 'es5'],
  // enntry file
  entry: {
    app : [
      '@babel/polyfill',
      './src/js/index.js',
      './src/sass/index.scss'
    ],
  },
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, 'asset'),
    filename: 'js/[name].js',
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  plugins: [
    // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
    new MiniCssExtractPlugin({ filename: 'css/shop/[name].css' })
  ],
  mode : "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'css/shop/fonts/[hash][ext][query]'
        }
      },
      {
        test: /\.(png|jpg|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/shop/[hash][ext][query]'
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map'
};
