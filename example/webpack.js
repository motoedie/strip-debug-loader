module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'dist/index.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'strip-debug' }
    ]
  }
};
