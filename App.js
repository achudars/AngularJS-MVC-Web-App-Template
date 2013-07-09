var newConfig = function($routeProvider) { 
	$routeProvider
		.when('/view1', {
			 templateUrl: 'view/view1.html'
		})
		.when('/view2', {
			 templateUrl: 'view/view2.html'
		})
		.otherwise({redirectTo : 'view1'})
	;
};

var App = angular.module('App',[]).config(newConfig);

