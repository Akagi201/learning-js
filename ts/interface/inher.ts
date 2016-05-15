interface Shape{
  color:string;
}

interface PenStroke{
  penWidth:number;
}

interface Square extends Shape, PenStroke{
  sideLength:number;
}

var s = <Square>{};
s.color = "blue";
s.penWidth = 10;
s.sideLength = 10;
console.log(s);
