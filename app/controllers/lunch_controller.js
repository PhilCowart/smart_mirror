'use strict';

angular.module('smartMirror.lunch', ['ngRoute'])

.controller('lunchCtrl', function($scope, $rootScope, $http, $routeParams) {

	$scope.time = 'Lunch Time';

})