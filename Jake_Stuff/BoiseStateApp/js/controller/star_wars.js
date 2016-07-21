var myStarWarsApp = angular.module('myStarWarsApp', []);

myStarWarsApp.controller('myStarWarsController', function ($scope, $http) {
    
    // making the data available to the markup (index.html)
    
    $scope.data = {
        starDatabase: {
            results: []
        },
        currentIndex: "0"        
    };
    
    // helper function to filter the $index
    
    $scope.toInt = function toInt(paramNumber) {
        return parseInt(paramNumber, 10);
    }
    
    // making an http request to the SW api

    $http({
      method: 'GET',
      url: 'http://swapi.co/api/people/'
    })
    .success(function (data, status, headers, config) {
        $scope.data.starDatabase = data;
    })
    .error(function (data, status, headers, config) {
    // something went wrong :(
        console.log('whoops!');
    });
  

});