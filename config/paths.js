const path = require('path');

module.exports = {
  dev: path.join(__dirname, '../src/index.js'),
  prod: path.join(__dirname, '../src/lib'),
  build: path.join(__dirname, '../build'),
};
