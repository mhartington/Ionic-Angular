angular.module('starter', ['ionic',
                           'starter.services',
                           'starter.controllers',
                           'starter.directives'
                          ])


.config(function ($stateProvider, $urlRouterProvider, $sceProvider) {

    $sceProvider.enabled(false);

    $stateProvider

    .state('intro', {
        url: "/",
        templateUrl: "templates/intro.html",
        controller: 'IntroCtrl'
    })


    .state('home', {
        url: "/pet",
        templateUrl: "templates/list.html",
        controller: 'PetIndexCtrl'
    })

    .state('detail', {
        url: "/pet/:petsId",
        templateUrl: "templates/detail.html",
        controller: 'PetDetailCtrl'
    });

    $urlRouterProvider.otherwise("/");

});