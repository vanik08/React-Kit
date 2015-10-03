var path = require('path');

var webpackConfig  = {
  entry: {
    app: ["webpack/hot/dev-server", "./app/main.js"]
  },
  output: {
    path: "./build",
    filename: "bundle.js"
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }

    ],
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.jsx|.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /.scss$/,
        loader: 'style!css!sass!'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },
  resolve: {
    root: path.join(__dirname, "app"),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.json', '.scss']
  },
  eslint: {
    configFile: path.join(__dirname, './.eslintrc'),
    failOnError: true
  }
};
module.exports = webpackConfig;
module.exports.test = webpackConfig;
