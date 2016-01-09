'use strict';
// Global 对象:
// 属性: Infinity / NaN / undefined / null
// 方法: eval() / isFinite() / isNaN() / parseFloat() / parseInt() / decodeURI() / decodeURIComponent() / encodeURI() / encodeURIComponent()

var gA = 'gA';

function testGlobal() {
  gB = 'gB';
  console.log('gA: ', gA);
}

testGlobal();
console.log('gB: ', gB);
