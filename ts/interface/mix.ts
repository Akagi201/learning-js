interface Counter{
  interval:number;
  reset():void;
  (start:number):string;
}
var c:Counter;
c(10);
c.reset();
