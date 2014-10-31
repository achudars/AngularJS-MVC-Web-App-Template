(function() {

  "use strict";

  var App = angular.module("App.services",[]);

  App.service('Model', function() {
  	this.getLinks = function() {
  		return [{
  				id: 1,
  				title: 'Item A'
  			}, {
  				id: 2,
  				title: 'Item B'
  			}, {
  				id: 3,
  				title: 'Item C'
  			}, {
  				id: 4,
  				title: 'Item D'
  			}, {
  				id: 5,
  				title: 'Item E'
  			}, {
  				id: 6,
  				title: 'Item F'
  			}
  	 ]};
  });

}());