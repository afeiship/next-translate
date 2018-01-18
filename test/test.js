var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-translate');

describe('next/translate', function () {

  it('nx.translate', function () {
    var arr = ['add','remove','update'];
    var map = {
      'add':'添加',
      'remove':'删除',
      'update':'更新'
    };
    var result = nx.translate(arr, map);

    assert.equal(result[0], '添加');
    assert.equal(result[1], '删除');
    assert.equal(result[2], '更新');
  });

});
