(function() {

  "use strict";

  var App = angular.module("App.services",[]);

  App.value('version', '0.1');

  // here is a declaration of simple utility function to know if an given param is a String.
  App.service("UtilSrvc", function () {
    return {
      isAString: function(o) {
          return typeof o == "string" || (typeof o == "object" && o.constructor === String);
      },
      helloWorld : function(name) {
      	var result = "Hum, Hello you, but your name is too weird...";
      	if (this.isAString(name)) {
      		result = "Hello, " + name;
      	}
      	return result;
      }
    }
  });

}());