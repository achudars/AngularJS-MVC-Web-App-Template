var newConfig = function($routeProvider) { 
	$routeProvider
		.when('', {
			templateUrl: 'view/about.html'
		})
		.otherwise({redirectTo : ''})
	;
};

var App = angular.module('App',[]).config(newConfig);

