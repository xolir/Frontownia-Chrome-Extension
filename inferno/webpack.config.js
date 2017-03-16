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
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?name=../img/[name].[ext]',
          'image-webpack?bypassOnDebug&opting.optimizationLevel=7&gfsicle.interlaced=false'
        ]
      }
    ]
  },
  devtool: 'source-map'
};