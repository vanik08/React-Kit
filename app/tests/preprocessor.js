import _ from 'lodash';
import babelJest from 'babel-jest';
import path from 'path';
import webpackAlias from 'jest-webpack-alias';
// Change these to point to your source and test directories
let dirs = ['../', './__tests__'].map(function(dir) {
  return path.resolve(__dirname, dir);
});

function matches(filename) {
  return _.find(dirs, (dir) => {
    return filename.indexOf(dir) === 0;
  });
}

module.exports = {
  process: function(src, filename) {
    if (matches(filename)) {
      src = babelJest.process(src, filename);
      src = webpackAlias.process(src, filename);
    }
    return src;
  }
};
