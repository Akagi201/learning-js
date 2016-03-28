angular.module("ezstuff", [])
  .controller("ezCtrl", ["$scope", function($scope) {
    $scope.format = "M/d/yy h:mm:ss a";
  }])
  .directive("ezCurrentTime", ["$interval", "dateFilter", function($interval, dateFilter) {
    //定义link函数
    function link(scope, element, attrs) {
      var format,
        timeoutId;

      //更新DOM内容
      function updateTime() {
        element.text(dateFilter(new Date(), format));
      }

      //监听时钟格式
      scope.$watch(attrs.ezCurrentTime, function(value) {
        format = value;
        updateTime();
      });

      //在DOM对象销毁时注销定时器
      element.on("$destroy", function() {
        $interval.cancel(timeoutId);
      });

      //启动定时器
      timeoutId = $interval(function() {
        updateTime(); //update DOM
      }, 1000);
    };

    //返回指令定义对象
    return {
      link: link
    };
  }]);
