interface USB{
  name:string;
  age?:number;
}

function printUSB(pu:USB) {
  console.log(pu.name);
  // console.log(pu.age);
}

var my = {name:"ime", c:"aa"};
printUSB(my);
