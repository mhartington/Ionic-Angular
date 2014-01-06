'use strict';

angular.module('myApp.controllers', ['ionic'])
	.controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location',
		function ($scope, $rootScope, $window, $location) {
			$scope.slide = '';
			$rootScope.back = function () {
				$scope.slide = 'slide-right';
				$window.history.back();
			}


			$rootScope.go = function (path) {
				$scope.slide = 'slide-left';
				$location.url(path);
			}
    }])

.controller('ProductListCtrl', ['$scope', 'Product',
	function ($scope, Product) {
		$scope.products = Product.query();
	}])


.controller('ProductDetailCtrl', ['$scope', '$routeParams', 'Product',
	function ($scope, $routeParams, Product) {
		$scope.product = Product.get({
			productId: $routeParams.productId
		});
		$scope.leftButtons = [
			{
				type: 'button-clear',
				content: '<i class="icon ion-navicon-round"></i>',
				tap: function (e) {
					$scope.sideMenuController.toggleLeft();
				}
  }
]
	}])