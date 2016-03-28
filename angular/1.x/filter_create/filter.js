//过滤器对象工厂定义
var ezUCFilterFactory = function() {
  //过滤器对象返回的是一个过滤函数
  var filter = function(input) {
    return input.toUpperCase();
  }
  return filter;
};
angular.module("ezstuff", [])
  //使用模块的filter()接口注册过滤器
  .filter("ezUC", ezUCFilterFactory);
