var config = {
    entry: './src/index.js',
    output: {
      path: __dirname,
      filename: 'block.build.js',
    },
    devServer: {
      contentBase: './Carousel'
    },

    module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              loader: 'babel-loader',
              exclude: /(node_modules)/
          }
      ]
  }
  };
  module.exports = config;

