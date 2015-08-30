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
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.coffee'] 
  }
};