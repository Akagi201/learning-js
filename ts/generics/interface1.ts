interface Hello<T> {
  (arg:T):T;
}
function myHello<T>(arg:T):T{
  return arg;
}
var mh:Hello<number> = myHello;
console.log(mh(100));
