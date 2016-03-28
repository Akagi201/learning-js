angular.module("ezstuff", [])
  .controller("ezCtrl", ["$scope", function($scope) {
    $scope.name = "Mr. Whoami";
  }])
  .directive("ezDialog", function() {
    return {
      restrict: "E",
      replace: true,
      transclude: true,
      template: "<div class='ez-dialog'><div class='header'>alert</div><div class='content' ng-transclude></div></div>"
    };
  });
