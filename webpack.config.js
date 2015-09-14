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
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss'] 
  }
};