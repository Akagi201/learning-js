function doCalc() {
  var injector = angular.injector(["ezstuff"]),
    mycalculator = injector.get("ezCalculator"),
    ret = mycalculator.add(3, 4);

  document.querySelector("#result").textContent = ret;
}

var ezCalculatorClass = function() {
  this.add = function(a, b) {
    return a + b;
  };
  this.subtract = function(a, b) {
    return a - b;
  };
  this.multiply = function(a, b) {
    return a * b;
  };
  this.divide = function(a, b) {
    return a / b;
  };
};

angular.module("ezstuff", [])
  .service("ezCalculator", ezCalculatorClass);
