var myStarWarsApp = angular.module('myStarWarsApp', []);

myStarWarsApp.controller('myStarWarsController', function ($scope, $http) {
    
    $scope.starDatabase = [];

    $http({
      method: 'GET',
      url: 'http://swapi.co/api/people/'
    })
    .success(function (data, status, headers, config) {
        $scope.starDatabase = data;
    })
    .error(function (data, status, headers, config) {
    // something went wrong :(
        console.log('whoops!');
    });
  

});