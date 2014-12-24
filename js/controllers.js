var avenirControllers = angular.module('avenirControllers', []);


avenirControllers.controller('HomeCtrl',['$scope', '$http',
  function ($scope, $http) {
    console.log("Home");
  }]);

avenirControllers.controller('QuienesSomosCtrl',['$scope', '$http',
  function ($scope, $http) {
    console.log("Quienes somos");
  }]);

avenirControllers.controller('ValleHermosoCtrl',['$scope', '$http',
  function ($scope, $http) {
    console.log("Valle Hermoso");
  }]);

avenirControllers.controller('ContactenosCtrl',['$scope', '$http',
  function ($scope, $http) {
    console.log("Contactenos");
  }]);

avenirControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);

avenirControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);