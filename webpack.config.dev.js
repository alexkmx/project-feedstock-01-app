// Dependencies
import webpack from 'webpack';
import path from 'path';

//path
const PATHS = {
  index: path.join(__dirname, 'src/index');
  build: path.join(__dirname, '/dist'),
  base:path.join(__dirname, 'src')
}

//Webpack Config
export default {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    PATH.index
  ]
  output: {
    path: PATH.build,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new.webpack.HotModuleReplacementPlugin(),
    new.webpack.NoEmiOnErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel-loader'],
      include: PATH.src
    },
    {
      test: /(/.css)$/,
      loaders: ['style-loader', 'css-loader']
    }]
  }
};
