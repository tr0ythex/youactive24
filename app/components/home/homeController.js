/* jshint esversion: 6 */

angular.module('youactive24')
.controller('homeController', function ($scope, ya24_activities) {
  $scope.activities = ya24_activities;
});
