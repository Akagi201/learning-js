class HelloNumber<T>{
  Ten:T;
  add:(x:T, y:T) => T;
}

var myHelloNumber = new HelloNumber<number>();
myHelloNumber.Ten = 10;
myHelloNumber.add = function (x, y) {
    return x + y;
}

console.log(myHelloNumber.Ten);
console.log(myHelloNumber.add(10, 10));
