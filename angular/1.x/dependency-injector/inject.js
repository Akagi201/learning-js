angular.element(document).ready(function() {
  angular.injector(["ng"]).invoke(function($http) {
    //将$http对象转成字符串显示出来
    var e = document.querySelector("#logger");
    angular.element(e).text($http.toString());
  });
});
