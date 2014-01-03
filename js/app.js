'use strict';

angular.module('myApp', [
	'ionic',
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'myApp.controllers',
    'myApp.memoryServices'
]).
config(['$routeProvider', function ($routeProvider) {
   
    $routeProvider.when('/products', {
		templateUrl: 'partials/product-list.html', 
		controller: 'ProductListCtrl'
		});
   
    $routeProvider.when('/products/:productId', {
		templateUrl: 'partials/product-detail.html',
		controller: 'ProductDetailCtrl'
		});
   
   
    $routeProvider.otherwise({redirectTo: '/products'});
}]);