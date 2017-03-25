module.exports = {
  entry: {
    background: './src/background/background',
    popup: './src/popup/popup',
    content: './src/content/content',
  },
  output: {
    path: 'dist/js',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: 'node_modules/'
      },
    ]
  },
  devtool: 'source-map'
};