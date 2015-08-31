module.exports = {
  entry: {
    app: ["webpack/hot/dev-server", "./app/main.js"]
  },
  output: {
    path: "./build",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, 
        loader: 'babel-loader',
        exclude: /node_modules/ 
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss'] 
  }
};