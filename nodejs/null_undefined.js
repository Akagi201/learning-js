
// null是一个表示"无"的对象，转为数值时为0；undefined是一个表示"无"的原始值，转为数值时为NaN。
// 但是，这样的区分在实践中很快就被证明不可行。目前，null和undefined基本是同义的，只有一些细微的差别。
if (!undefined) {
    console.log('undefined is false');
}

if (!null) {
    console.log('null is false');
}

if (undefined == null) {
    console.log('undefined == null');
}

console.log(Number(null)); // 0

console.log(5 + null); // 5

console.log(Number(undefined)); // NaN

console.log(5 + undefined); // NaN

var i;

console.log(i); // undefined

function f(x) {console.log(x)}
console.log(f()); // undefined

var o = new Object();
console.log(o.p); // undefined

var x = f();
console.log(x); // undefined

console.log(typeof null); // object
