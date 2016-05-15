var people = {
  name:["iwen", "ime", "if", "bean"],
  getName:function(){
    return() => {
      var i = Math.floor(Math.random()*4);
      return {
        n:this.name[i]
      }
    }
  }
}
var myName = people.getName();
console.log(myName().n);
