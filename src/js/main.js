'use strict'
//MODULE
const app = angular.module('houseCash', ['ngRoute', 'ngResource']);

// ROUTES
app.config(($routeProvider) => {
  $routeProvider

  .when('/', {
    templateUrl: './partials/home.html',
    controller: 'mainCtrl'
  })

});

// CONTROLLER
app.controller('mainCtrl', ['$scope', function($scope) {
    $scope.invoice = {
        items: [{
            company: '',
            amount: '',
            people: 2
          }]
    };

    $scope.addItem = function() {
        $scope.invoice.items.push({
            company: '',
            amount: 0,
            people: 2
        });
    },

    $scope.removeItem = function(index) {
        $scope.invoice.items.splice(index, 1);
    },

    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.invoice.items, function(item) {
            total += item.amount / item.people;
        })

        return total;
    }
}]);

