# strip-debug-loader

Removed debug statements from your code using webpack.

Alerts and console.log() will be removed from your code.

Use especially for production build.

## Usage
```javascript
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
```