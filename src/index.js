var stripDebug = require('strip-debug');

module.exports = function(source) {
  return stripDebug(source).toString();
};
