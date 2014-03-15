var dependancies = [];

angular.module('angulert', dependancies).
provider('$angulert', [function () {

  var _config = {};

  var $angulertProvider = {
    $get: ['$rootScope', '$q', '$http', '$templateCache', '$controller',
    function ($rootScope, $q, $http, $templateCache, $controller) {

      var _history = [];
      var _alerts = [];

      var angulertService = {
        addAlert: function(alert) {

        },
        deleteAlert: function(id) {

        },
        getAlert: function(id) {

        },
        updateAlert: function(alert) {

        },
        getHistory: function() {
          return _history;
        },
        deleteHistory: function() {
          _history = [];
        }
      };

      return angulertService;
    }];
  };
}]).
directive('angulert', [function () {
  return {
    restrict: 'EA',
    link: function (scope, element, attrs) {

    }
  };
}]);