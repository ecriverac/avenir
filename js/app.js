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
      when('/proyectos/pueblo-libre/', {
        templateUrl: 'views/pueblo-libre.html',
        controller: 'PuebloLibreCtrl'
      }).
      when('/contactenos/', {
        templateUrl: 'views/contactenos.html',
        controller: 'ContactenosCtrl'
      }).
      when('/404/', {
        templateUrl: 'views/404.html',
        controller: '404Ctrl'
      }).
      otherwise({
        redirectTo: '/404'
      });
  }]);