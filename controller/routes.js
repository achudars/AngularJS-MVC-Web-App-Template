var newConfig = function($routeProvider) { 
    $routeProvider
        .when('/view1', {
            controller: 'controllers',
            templateUrl: 'view/view1.html'
        })
        .otherwise({
            controller: 'controllers',
            templateUrl: 'view/view2.html'
        })
    ;
};

var SeedApp = angular.module('SeedApp',[]).config(newConfig);

