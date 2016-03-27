angular.module("ezstuff", []) //创建模块ezstuff
  .directive("ezClock", function() { //在模块上注册指令ezClock的类工厂
    return {
      restrict: "E",
      replace: true,
      template: "<div class='clock'></div>",
      link: function(scope, element, attrs) {
        setInterval(function() {
          //获取当前时间
          var d = new Date();

          //element对应引用该指令的DOM对象的jqLite封装
          element.text(d.toString());
        }, 1000);
      }
    }
  })
