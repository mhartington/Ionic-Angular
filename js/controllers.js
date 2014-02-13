angular.module('starter.controllers', [])

//Intro View Controller
.controller('IntroCtrl', function ($scope, $state) {
    // Called to navigate to the main app
    $scope.startApp = function () {
        $state.go('main');

        // Set a flag that we finished the tutorial
        // Set a flag that we finished the tutorial
        window.localStorage['didTutorial'] = true;
    };

    //No this is silly
    // Check if the user already did the tutorial and skip it if so
    if (window.localStorage['didTutorial'] === "true") {
        console.log('Skip intro');
        $scope.startApp();
    }
    // Move to the next slide
    $scope.next = function () {
        $scope.$broadcast('slideBox.nextSlide');
    };


    // Our initial right buttons
    var rightButtons = [
        {
            content: 'Next',
            type: 'button button-clear',
            tap: function (e) {
                // Go to the next slide on tap
                $scope.next();
            }
    }
  ];

    // Our initial left buttons
    var leftButtons = [
        {
            content: 'Skip',
            type: 'button button-clear',
            tap: function (e) {
                // Start the app on tap
                $scope.startApp();
            }
    }
  ];

    // Bind the left and right buttons to the scope
    $scope.leftButtons = leftButtons;
    $scope.rightButtons = rightButtons;


    // Called each time the slide changes
    $scope.slideChanged = function (index) {

        // Check if we should update the left buttons
        if (index > 0) {
            // If this is not the first slide, give it a back button
            $scope.leftButtons = [
                {
                    content: 'Back',
                    type: 'button button-clear',
                    tap: function (e) {
                        // Move to the previous slide
                        $scope.$broadcast('slideBox.prevSlide');
                    }
        }
      ];
        } else {
            // This is the first slide, use the default left buttons
            $scope.leftButtons = leftButtons;
        }

        // If this is the last slide, set the right button to
        // move to the app
        if (index == 2) {
            $scope.rightButtons = [
                {
                    content: 'Start',
                    type: 'button button-clear',
                    tap: function (e) {
                        $scope.startApp();
                    }
        }
      ];
        } else {
            // Otherwise, use the default buttons
            $scope.rightButtons = rightButtons;
        }
    };
})

//Main View Controller
.controller('IndexCtrl', function ($scope, PetService) {
    // "Pets" is a service returning mock data (services.js)
    $scope.pets = PetService.all();
    $scope.enableBackButton = false;

})

//Menu Controller
.controller('MenuCtrl', function ($scope) {
    $scope.toggleMenu = function () {
        $scope.sideMenuController.toggleLeft();
    };
    $scope.enableBackButton = true;
    $scope.leftButtons = [
        {
            type: 'button-clear',
            content: '<i class="icon ion-navicon"></i>',
            tap: $scope.toggleMenu
  }
];
})

//Menu Detail Controller
.controller('DetailCtrl', function ($scope, $stateParams, PetService, $ionicActionSheet) {

    $scope.pet = PetService.get($stateParams.petsId);

    $scope.toggleMenu = function () {
        $scope.sideMenuController.toggleLeft();
    };

    $scope.show = function () {

        // Show the action sheet
        $ionicActionSheet.show({


            buttons: [
                {
                    text: 'Manual',
                }
                    ,
 //                {
 //                    text: 'See on Site'
 //                },
      ],




            cancelText: 'Close',


            cancel: function () {},


            buttonClicked: function (index) {
                if (index === 0) { // Manual Button

                    var location;
                    var phoneModel = device.platform;
                    if (phoneModel === 'Android') {
                        location = '_system';
                    } else if (phoneModel === 'iOS') {
                        location = '_blank';

                    } else {
                        location = "_blank"
                    }

                    window.open($scope.pet.manual, location, 'transitionstyle=fliphorizontal');
                } else if (index === 1) {

                }

                return true;
            },

            destructiveButtonClicked: function () {
                return true;

            }
        });

    };



    $scope.rightButtons = [
        {
            type: 'button-clear',
            content: '<i class="icon ion-ios7-upload-outline"></i>',
            tap: function (e) {
                $scope.show();

            }
          }
];

    $scope.enableBackButton = true;
});