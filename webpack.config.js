const path = require('path');

module.exports = {
  mode: 'production',

  entry: './src/index.ts',

  target: 'node',

  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.ts'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};