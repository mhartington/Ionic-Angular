angular.module('starter.directives', ['ionic.service.gesture'])

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
                $scope.$watch('sideMenuController.getOpenRatio()', function (ratio) {
                    // Set the transparency of the fade bar
                    $element[0].style.opacity = Math.abs(ratio);
                });
            });
        }
    };
})

//Cancel Directive - Nothing Yet
.directive('cancel', function ($timeout) {
    return {
        restrict: 'A',
        link: function ($scope, $element, $attr) {
            $timeout(function () {
                $element.on('tap', function () {
                    $('input').blur().val('');
                });
            });
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
})

.directive('noDragRight', ['$ionicGesture',
    function ($ionicGesture) {

        return {
            restrict: 'A',
            link: function ($scope, $element, $attr) {

                $ionicGesture.on('dragright', function (e) {
                    e.gesture.srcEvent.preventDefault();
                }, $element);
            }
        };
}])

.directive('shrink', function($timeout) {
    return {
        restrict: 'A',
        link: function($scope, $element, $attr) {
            // Run in the next scope digest
            $timeout(function() {
                // Watch for changes to the x var which is a value between 0 and 275
                $scope.$watch('sideMenuContentTranslateX', function(x) {
                    if (x === 275) {
                        $element[0].style.webkitTransform += ' scaleY(0.6) scaleX(0.6) translateX(-140px)';// skewY(-20deg)';
                    }
                });
            });
        }
    };
});