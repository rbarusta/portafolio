'use strict';

/**
 * @ngdoc function
 * @name portaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portaApp
 */
angular.module('portaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
