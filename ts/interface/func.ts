interface SearchFunc {
    (source:string, subString:string):boolean;
}

var mySearch:SearchFunc;
mySearch = function(src:string, sub:string) {
  var result = src.search(sub);
  if (result != -1) {
    return true;
  } else {
    return false;
  }
}
