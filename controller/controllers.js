'use strict';

App.controller("MyCtrl1" ,function ($scope, UtilSrvc) {
    $scope.aVariable = 'anExampleValueWithinScope';
    $scope.valueFromService = UtilSrvc.helloWorld("User");
});

App.controller("MyCtrl2" ,function ($scope) {

});

// you may add more controllers below