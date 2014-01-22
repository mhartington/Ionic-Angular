angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function ($scope, PetService) {
    // "Pets" is a service returning mock data (services.js)
    $scope.pets = PetService.all();
    $scope.enableBackButton = false;
})



// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function ($scope, $stateParams, PetService) {
    // "Pets" is a service returning mock data (services.js)
    $scope.pet = PetService.get($stateParams.petsId);

    
    $scope.leftButtons = [
        {
            type: 'button-clear',
            content: '<i class="icon ion-navicon-round"></i>',
            tap: function (e) {
                $scope.sideMenuController.toggleLeft();
            }
  }
]


   $scope.rightButtons = [
        {
            type: 'button-clear',
            content: '<i class="icon ion-ios7-upload"></i>',
            tap: function (e) {
				var url = $scope.pet;
				
               window.open(url.manual, '_blank');
            }
  }
]


})




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


.directive('imageRotator', function ($timeout) {
    return {
        restrict: 'A',
        link: function ($scope, $element, $attr) {

            $timeout(function () {
                $element.j360()
            });



        }
    };
});