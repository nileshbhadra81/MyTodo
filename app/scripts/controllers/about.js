'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodoApp
 */
angular.module('store')
  .controller('AboutCtrl', function ($scope) {
  	angular.element(document).ready(function() { 
	   alert("...view loaded");
	});
  	$scope.$on('$routeChangeSuccess', function () {
	  alert("view loaded...");
	});
	 $scope.$on('$viewContentLoaded', function()
    {
        console.log("blah");
        alert("view loaded");
    });
	
	$scope.viewLoaded = function(){
		alert("finally the solution is here...");
	}
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
