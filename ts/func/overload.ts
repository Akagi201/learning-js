function attr(name:string):string;
function attr(age:number):number;

function attr(nameorage:any):any{
  if(nameorage &&typeof nameorage === "string") {
    console.log("string");
  } else {
    console.log("number");
  }
}

attr("hello");
attr(1);
