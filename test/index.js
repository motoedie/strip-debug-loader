var expect = require('chai').expect;
var stripDebugLoader = require('../src/index');

describe('strip-debug-loader', function() {
  it('should remove debug code', function() {
    expect(stripDebugLoader('function foo(){console.log("foo");alert("foo");debugger;}'))
      .to.equal('function foo(){void 0;void 0;}');
  });
});
