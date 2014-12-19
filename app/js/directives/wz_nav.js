angular.module("app").directive("wzNav", function() {
  return {
    restrict: 'E',
    scope: {
      start: '=',
      step: '=',
      stepIdKey: '=',
      finish: '=',
      prev: '=',
      next: '='
    },
    templateUrl: 'wz_nav.html',
    link: function ($scope) {
      $scope.getPrev = function getPrev() {
        var routeParams = {};
        routeParams[$scope.stepIdKey] = $scope.prev;
        return routeParams;
      };
      $scope.getNext = function getNext() {
        var routeParams = {};
        routeParams[$scope.stepIdKey] = $scope.next;
        return routeParams;
      };
    }
  };
});
