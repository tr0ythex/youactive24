/* jshint esversion: 6 */

angular.module('youactive24')
  .config($routeProvider => {
    $routeProvider
      .when('/', {
        templateUrl: 'app/components/home/homeView.html',
        // controller: 'homeController',
        // controllerAs: 'home'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
