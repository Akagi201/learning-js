
function Hello<T>(arg:T):T{
  return arg;
}

var output = Hello<string>("Hello ime");
console.log(output);

function Hello1<T>(str:T[]):T[]{
  console.log(str.length);
  return str
}
var list:Array<string> = Hello1<string>(["1", "2", "3"]);
for (var i = 0; i < list.length; i++) {
  console.log(list[i]);
}

var myHello:<K>(arg:K)=>K = Hello;
console.log(myHello("hello"));

var myHello1:{<T>(arg:T):T} = Hello;
console.log(myHello("hello1"));
