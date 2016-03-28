angular.module("ezstuff", [])
  .controller("ezCtrl", function($scope, numberFilter, currencyFilter) {
    $scope.total = currencyFilter(numberFilter(123, 2));
  });
