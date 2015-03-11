angular.module('store')
 
.directive('headMast', function() {
  return {
      restrict: 'A',
      replace: 'true',
      templateUrl: '../../views/header.html'
  };
});