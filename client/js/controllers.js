'use strict';

angular.module('myApp.controllers', [])
	.controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location',
		function ($scope, $rootScope, $window, $location) {
			$scope.slide = '';
			$rootScope.back = function () {
				$scope.slide = 'slide-right';
				$window.history.back();
			}
			$rootScope.go = function (path) {
				
				$location.url(path);
			}
    }])
	.controller('EmployeeListCtrl', ['$scope', 'Employee',
		function ($scope, Employee) {
			$scope.employees = Employee.query();
    }])
	.controller('EmployeeDetailCtrl', ['$scope', '$routeParams', 'Employee',
		function ($scope, $routeParams, Employee) {
			$scope.employee = Employee.get({
				employeeId: $routeParams.employeeId
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
.directive('fadeBar', function($timeout) {
		return {
			restrict: 'E',
			template: '<div class="fade-bar"></div>',
			replace: true,
			link: function($scope, $element, $attr) {
				$timeout(function() {
					$scope.$watch('sideMenuController.getOpenRatio()', function(ratio) {
						$element[0].style.opacity = Math.abs(ratio);
					});
				});
			}
		}
	})


	.controller('ReportListCtrl', ['$scope', '$routeParams', 'Report',
		function ($scope, $routeParams, Report) {
			$scope.employees = Report.query({
				employeeId: $routeParams.employeeId
			});
    }]);

