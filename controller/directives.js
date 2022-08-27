(() => {
  "use strict";
  const App = angular.module("App.directives", []);

  App.directive("inputtext", function (_$timeout) {
    return {
      restrict: "E",
      replace: true,
      template: '<input type="text"/>',
      scope: {
        //if there were attributes it would be shown here
      },
      link: function (_scope, _element, _attrs, _ctrl) {
        // DOM manipulation may happen here.
      },
    };
  });

  App.directive("version", function (version) {
    return function (_scope, elm, _attrs) {
      elm.text(version);
    };
  });

  // you may add as much directives as you want below
})();
