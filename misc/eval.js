'use strict';
var strEval = 'console.log("Hello, eval");';

eval(strEval);

var numTemp = 1;
console.log('init numTemp: ', numTemp);
eval('var numTemp = 2; console.log("numTemp in eval: ", numTemp);');
console.log('after eval, numTemp: ', numTemp);

var testFunc = function () {
  console.log("testFunc");
}

var testFunc2 = function () {
  console.log("testFunc2");
}

var name = 'testFunc';

eval(name + '()');
