var ezControllerClass = function($scope) {
  //view model
  $scope.vm = {
    sb: {
      name: "Jason Stantham",
      gender: "male",
      age: 48,
      career: "actor",
      photo: "http://b.hiphotos.baidu.com/baike/w%3D268/sign=a03742145bee3d6d22c680cd7b176d41/359b033b5bb5c9eae4c45250d739b6003af3b34a.jpg"
    }
  };
};
angular.module("ezstuff", [])
  .controller("ezController", ezControllerClass);
