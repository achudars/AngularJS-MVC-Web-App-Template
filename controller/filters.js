(function () {

  "use strict";

  var App = angular.module("App.filters",[]);

  App.filter('interpolate', function (version) {
    return function(text) {
       return String(text).replace(/\%VERSION\%/mg, version);
     }
  });

  // just copy paste the example above to add more filters

}());