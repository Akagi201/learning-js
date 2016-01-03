function sum(numA, numB, numC, numD) {
  console.log('sum: ', numA + numB);
}

var sum2 = new Function(
  'numA',
  'numB',
  'console.log("sum2: ", numA + numB);'
);

var sum3 = function (numA, numB) {
  console.log('sum3: ', numA + numB);
};

sum(1, 2);
sum2(1, 2);
sum3(1, 2);

console.log("sum length: ", sum.length)
