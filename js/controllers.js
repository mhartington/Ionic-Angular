angular.module('starter.controllers', [])

//Intro Controller
.controller('IntroCtrl', function ($scope, $state) {
        // Called to navigate to the main app
        var startApp = function () {
            $state.go('home');

            // Set a flag that we finished the tutorial
            window.localStorage.didTutorial = true;
        };

        // Check if the user already did the tutorial and skip it if so
//        if (window.localStorage.didTutorial === "true") {
//            startApp();
//            return;
//        }

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
                    startApp();
                }
    }
  ];

  // Bind the left and right buttons to the scope
  $scope.leftButtons = leftButtons;
  $scope.rightButtons = rightButtons;


  // Called each time the slide changes
  $scope.slideChanged = function(index) {

    // Check if we should update the left buttons
    if(index > 0) {
      // If this is not the first slide, give it a back button
      $scope.leftButtons = [
        {
          content: 'Back',
          type: 'button button-clear',
          tap: function(e) {
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
    if(index == 2) {
      $scope.rightButtons = [
        {
          content: 'Start',
          type: 'button button-clear',
          tap: function(e) {
            startApp();
          }
        }
      ];
    } else {
      // Otherwise, use the default buttons
      $scope.rightButtons = rightButtons;
    }
  };
})

// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function ($scope, PetService) {
    // "Pets" is a service returning mock data (services.js)
    $scope.pets = PetService.all();
    $scope.enableBackButton = false;

    $scope.toggleMenu = function () {
        $scope.sideMenuController.toggleLeft();
    };
})

// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function ($scope, $stateParams, PetService) {
        // "Pets" is a service returning mock data (services.js)
        $scope.pet = PetService.get($stateParams.petsId);
        
        

        $scope.toggleMenu = function () {
            $scope.sideMenuController.toggleLeft();

        };

    $scope.enableBackButton = false;
    $scope.leftButtons = [
        {
            type: 'button-clear',
            content: '<i class="icon ion-navicon"></i>',
            tap: $scope.toggleMenu
  }
];


    $scope.rightButtons = [
        {
            type: 'button-clear',
            content: '<i class="icon ion-ios7-upload-outline"></i>',
            tap: function (e) {
                window.open($scope.pet.manual, '_blank', 'transitionstyle=fliphorizontal');
            }
  }
];
});