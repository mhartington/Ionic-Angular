angular.module('starter.directives', [])

//Fadebar Directive
.directive('fadeBar', function ($timeout) {
	return {
		restrict: 'E',
		template: '<div class="fade-bar"></div>',
		replace: true,
		link: function ($scope, $element, $attr) {
			// Run in the next scope digest
			$timeout(function () {
				// Watch for changes to the openRatio which is a value between 0 and 1 that says how "open" the side menu is
				$scope.$watch('$ionicSideMenusController.getOpenRatio()', function (ratio) {
					// Set the transparency of the fade bar
					$element[0].style.opacity = Math.abs(ratio);
				});
			}, 500);
		}
	};
})

//360 Rotator Directive
.directive('imageRotator', function ($timeout) {
	return {
		restrict: 'A',
		link: function ($scope, $element, $attr) {

			$timeout(function () {
				$element.j360();

			});



		}
	};
});