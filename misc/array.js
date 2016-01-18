var arr = new Array();
console.log(arr);

var arr1 = new Array(3);
console.log(arr1);

var arr2 = new Array('sid', 'chen', false);
console.log(arr2);

var arr3 = Array('sid', 'chen', false);
console.log(arr3);

var arr4 = [];
console.log(arr4);

var arr5 = ['sid', 'chen', false];
console.log(arr5);

console.log(arr5[2]);

arr5[3] = true;

console.log(arr5);

arr5[5] = 'hello';

console.log(arr5);

console.log(typeof arr5);

console.log(arr5 instanceof Array);

console.log(Array.isArray(arr5));

var obj = {
  a:1,
  b:2,
  c:3,
  d:false
};

console.log(obj);

console.log(Object.keys(obj));
console.log(Object.keys(obj).length);

var str = 'I am Sid';

console.log(str.split(' '));

console.log(str.split('am'));

var arr6 = Object.keys(obj);
console.log(arr6.toString());
console.log(arr6.join());
console.log(arr6.join(' '));
console.log(arr6.join(' is '));

var arr7 = [11, 2, 3, 23, 55, 412];
console.log(arr7);
console.log(arr7.sort());
console.log(arr7);
console.log(arr7.reverse());
console.log(arr7);

console.log(arr7.push(100));
console.log(arr7.push(101, 102, 103));
console.log(arr7.pop());

console.log(arr7);

console.log(arr7.shift());
console.log(arr7);

console.log(arr7.unshift(222));
console.log(arr7);

console.log(arr7.unshift(1, 2, 3, 4, 5));
console.log(arr7);

var arr8 = ['a', 'str'];
console.log(arr7.concat(arr8));
console.log(arr7);

console.log(arr7.slice(2, 5));
console.log(arr7.slice(2, -2));

console.log(arr7.splice(1, 1));
console.log(arr7);

console.log(arr7.splice(1, 2));
console.log(arr7);

console.log(arr7.splice(1, 0, false, 'str'));
console.log(arr7);

console.log(arr7.splice(1, 1, true));
console.log(arr7);

console.log(arr7.splice(-2, 1));
console.log(arr7);

console.log(arr7.indexOf(5));
console.log(arr7.indexOf(5222));

console.log(arr7.push(5, 5, 5));
console.log(arr7.indexOf(5));
console.log(arr7.lastIndexOf(5));
