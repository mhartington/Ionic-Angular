angular.module('starter.controllers', [])

//Intro View Controller
.controller('IntroCtrl', ['$scope', '$state',
  function ($scope, $state) {
        'use strict';
        $scope.startApp = function () {
            $state.go('home');
            window.localStorage.didTutorial = true;
        };

        if (window.localStorage.didTutorial === 'true') {
            $scope.startApp(function () {});

        } else {
            console.log('Need to do into');
            navigator.splashscreen.hide();

        }



        $scope.next = function () {
            $scope.$broadcast('slideBox.nextSlide');
        };
        $scope.previous = function () {
            $scope.$broadcast('slideBox.prevSlide');
        };

        // Called each time the slide changes
        $scope.slideChanged = function (index) {
            $scope.slideIndex = index;
        };



  }
])

//Main View Controller
.controller('IndexCtrl', function ($scope, PetService) {
    // 'Pets' is a service returning mock data (services.js)
    $scope.pets = PetService.all();
    $scope.enableBackButton = false;

    setTimeout(function () {
        navigator.splashscreen.hide();
    }, 750);
})


//Menu Detail Controller
.controller('DetailCtrl', function ($scope, $stateParams, PetService, $ionicActionSheet) {

    $scope.pet = PetService.get($stateParams.petsId);

    $scope.options = function () {
        console.log("show Action Sheet");
        // Show the action sheet
        $ionicActionSheet.show({


            buttons: [
                {
                    text: 'Manual',
         }
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
                        location = '_blank';
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

    $scope.enableBackButton = false;
});