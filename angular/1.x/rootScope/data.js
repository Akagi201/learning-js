angular.module("ezstuff", [])
  .directive("ezNamecard", function() {
    return {
      restrict: "E",
      template: "<div class='namecard'>",
      replace: true,
      link: function(scope, element, attrs) {
        var sb = scope.$eval(attrs.data);
        element.append("<div>name : " + sb.name + "</div>")
          .append("<div>gender : " + sb.gender + "</div>")
          .append("<div>age : " + sb.age + "</div>")
      }
    };
  });
