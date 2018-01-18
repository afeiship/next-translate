(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.translate = function (inArray, inMap) {
    return inArray.map(function (item, index) {
      return inArray[index] = inMap[ item ];
    });
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.translate;
  }

}());
