'use strict';

/**
 * @ngdoc function
 * @name portaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the portaApp
 */
angular.module('portaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
