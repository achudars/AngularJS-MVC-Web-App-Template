(() => {
  "use strict";
  const App = angular.module("App.controllers", []);

  App.controller("MyCtrl1", [
    "$scope",
    function ($scope, UtilSrvc) {
      $scope.aVariable = "anExampleValueWithinScope";
      $scope.valueFromService = UtilSrvc.helloWorld("User");
    },
  ]);

  App.controller("MyCtrl2", [
    "$scope",
    function (_$scope) {
      // if you have many controllers, it's better to separate them into files
    },
  ]);
})();
