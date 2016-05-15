interface Hello{
  <T>(arg:T):T;
}
function myHello<T>(arg:T):T{
  return arg;
}

var MH:Hello = myHello;
console.log(MH("Hello"));
console.log(MH<string>("Hello"));
