var showUserName = function() {
  var injector = angular.injector(["ezstuff"]),
    username = injector.get("ezUserName");
  document.querySelector("#result").textContent = username;
};

angular.module("ezstuff", [])
  .value("ezUserName", "whoami");
