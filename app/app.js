'use strict';


// Declare app level module which depends on views, and components
angular.module('smartMirror', [
  'ngRoute',
  'smartMirror.morning',
  'smartMirror.lunch',
  'smartMirror.dinner',
  'smartMirror.night',
])


.config(['$routeProvider', function($routeProvider, $rootScope) {
	
    $routeProvider

	.when('/', {
		templateUrl: 'views/morning.html',
		controller: 'morningCtrl',
	})

	.when('/morning', {
		templateUrl: 'views/morning.html',
		controller: 'morningCtrl',
	})

	.when('/lunch', {
		templateUrl: 'views/lunch.html',
		controller: 'lunchCtrl',
	})

	.when('/dinner', {
		templateUrl: 'views/dinner.html',
		controller: 'dinnerCtrl',
	})

	.when('/night', {
		templateUrl: 'views/night.html',
		controller: 'nightCtrl',
	})

	.otherwise({
		redirectTo: '/'
	})

}])


.controller ('ApplicationCtrl', function($scope, $rootScope, $http) {


});
