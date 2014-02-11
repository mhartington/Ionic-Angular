angular.module('starter', ['ionic',
                           'starter.services',
                           'starter.controllers',
                           'starter.directives'
                          ])

.config(function ($stateProvider, $urlRouterProvider, $sceProvider) {

    $sceProvider.enabled(false);

    $stateProvider

    //Full State
    .state('intro', {
        url: "/",
        templateUrl: "templates/intro.html",
        controller: 'IntroCtrl'
    })

    //Full State
    .state('main', {
        url: "/main",
        templateUrl: "templates/main.html",
        controller: 'IndexCtrl'
    })

    //Abstract Menu State
    .state('menu', {
        url: "/product",
        templateUrl: "templates/menu.html",
        controller: 'MenuCtrl'
    })

    //Nested Content State, NO ANIMATION
    .state('menu.detail', {
        url: "/:petsId",
        views: {
            'content': {
                templateUrl: "templates/detail.html",
                controller: 'DetailCtrl'
            }
        }
    });

    $urlRouterProvider.otherwise("/");

});