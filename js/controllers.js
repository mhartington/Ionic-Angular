angular.module('starter.controllers', [])

//Intro Controller
.controller('IntroCtrl', function ($scope, $state) {
    // Called to navigate to the main app
    $scope.startApp = function () {
        $state.go('main');

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


.controller('IndexCtrl', function ($scope, PetService) {
    // "Pets" is a service returning mock data (services.js)
    $scope.pets = PetService.all();
    $scope.enableBackButton = false;

    $scope.travle = function () {
        $state.go('menu.detail');
    };


    $scope.toggleMenu = function () {
        $scope.sideMenuController.toggleLeft();
    };
})


.controller('DetailCtrl', function ($scope, $stateParams, PetService,$ionicActionSheet) {

    $scope.pet = PetService.get($stateParams.petsId);

    $scope.toggleMenu = function () {
        $scope.sideMenuController.toggleLeft();
    };

    $scope.show = function() {

    // Show the action sheet
    $ionicActionSheet.show({

      // The various non-destructive button choices
      buttons: [
        {text: 'Manual'},
        { text: 'See on Site' },
      ],



      // The text of the cancel button
      cancelText: 'Close',

      // Called when the sheet is cancelled, either from triggering the
      // cancel button, or tapping the backdrop, or using escape on the keyboard
      cancel: function() {
      },

      // Called when one of the non-destructive buttons is clicked, with
      // the index of the button that was clicked. Return
      // "true" to tell the action sheet to close. Return false to not close.
      buttonClicked: function(index) {
         
       
      },

      // Called when the destructive button is clicked. Return true to close the
      // action sheet. False to keep it open
      destructiveButtonClicked: function() {
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
})


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
});