const webpack = require('webpack');

module.exports = {
  // 1
  entry: './src/index.js',
  // 2
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      } ,
      {
        test: /\.css$/,
        use: [
            { loader: 'style-loader', options: { injectType: 'singletonStyleTag' } },
            { loader: 'css-loader', options: { importLoaders: 1, sourceMap: true } }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  // 3
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }

};

