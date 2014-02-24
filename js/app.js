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


	//Abstract Menu State
	.state('main', {
		abstract: 'true',
		templateUrl: "templates/main.html",
		controller: 'MenuCtrl'
	})

	//Nested State
	.state('main.home', {
		url: "/products",
		views: {
			'content': {
				templateUrl: "templates/list.html",
				controller: 'IndexCtrl'
			}
		}
	})


	//Nested Content State, NO ANIMATION
	.state('main.detail', {
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