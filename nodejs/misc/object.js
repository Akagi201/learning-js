var obj = new Object();
console.log(obj);

var obj1 = new Object;
console.log(obj1);

var obj2 = {};
console.log(obj2);

var obj3 = {name: 'sid'};
console.log(obj3);
console.log(obj3.name);
console.log(obj3['name']);

var argu = {0: 1, 1: 'sid'};
console.log(argu[0]);

var obj4 = {'family name': 'chen'};
console.log(obj4['family name']);

// 基本包装类型
var rtbol = new Boolean(false);
console.log(rtbol);

var rtbol1 = new Object(false);
console.log(rtbol1);

console.log(typeof rtbol);
console.log(!rtbol);

console.log(rtbol instanceof Boolean);
console.log(rtbol instanceof Object);

var n = 0.0145;

console.log(n.toFixed(3));
console.log(n.toExponential());
console.log(n.toPrecision(2));

var s = 'this is sid';
console.log(s.length);
console.log(s.slice(1, 3));
console.log(s.slice(-3, -1));
console.log(s.slice(-3));
console.log(s.slice(-1, -3));
console.log(s.indexOf('s'));
console.log(s.lastIndexOf('s'));

var str = '  this is sid  ';
console.log(str.trim());
console.log(str.toUpperCase());
console.log(str.toLowerCase());

var s1 = 'this is Sid';
console.log(s.charCodeAt());

console.log(String.fromCharCode(100));
