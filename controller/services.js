(() => {
  "use strict";
  const App = angular.module("App.services", []);

  App.value("version", "0.1");

  // here is a declaration of simple utility function to know if an given param is a String.
  App.service("UtilSrvc", function () {
    return {
      isAString: (o) =>
        typeof o == "string" ||
        (typeof o == "object" && o.constructor === String),

      helloWorld: function (name) {
        let result = "Hum, Hello you, but your name is too weird...";
        if (this.isAString(name)) {
          result = "Hello, " + name;
        }
        return result;
      },
    };
  });
})();
