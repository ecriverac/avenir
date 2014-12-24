var avenirApp = angular.module('avenirApp', [
  'ngRoute',
  'avenirControllers'
]);

avenirApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      }).
      when('/quienes-somos/', {
        templateUrl: 'views/quienes-somos.html',
        controller: 'QuienesSomosCtrl'
      }).
      when('/proyectos/valle-hermoso/', {
        templateUrl: 'views/valle-hermoso.html',
        controller: 'ValleHermosoCtrl'
      }).
      when('/contactenos/', {
        templateUrl: 'views/contactenos.html',
        controller: 'ContactenosCtrl'
      }).
      otherwise({
        redirectTo: '/404'
      });
  }]);