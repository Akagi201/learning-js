angular.module("ezstuff", [])
  .controller("ezCtrl", ["$scope", function($scope) {
    $scope.Emmy = {
      name: "Emmy",
      address: "1600 Amphitheatre"
    };
    $scope.Edison = {
      name: "Edison",
      address: "2500 Amphitheatre"
    };
  }])
  .directive("ezCustomer", function() {
    return {
      restrict: "E",
      replace: true,
      scope: {
        customer: "=sb",
      },
      template: "<div>Name: {{customer.name}} Address: {{customer.address}}</div>"
    };
  });
