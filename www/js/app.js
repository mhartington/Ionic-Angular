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

		//Nested State
		.state('home', {
			url: "/products",
			templateUrl: "templates/list.html",
			controller: 'IndexCtrl'

		})

		//Abstract Menu State
		.state('main', {
			abstract: 'true',
			templateUrl: "templates/main.html"
		})


		//Nested Content State, NO ANIMATION
		.state('main.detail', {
			url: "/products/:petsId",
			views: {
				'content': {
					templateUrl: "templates/detail.html",
					controller: 'DetailCtrl'
				}
			}
		});

		$urlRouterProvider.otherwise("/");

	});