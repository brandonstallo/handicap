(function() {
    'use strict';
    angular
        .module('app')
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {
        console.log('config');
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeController',
                title: 'Home',
                mainImage: '8.1'

            })

            .when('/about', {
                title: 'About Us',
                templateUrl: 'about.html',
                controller: 'aboutController'
            })

            .when('/calendar', {
                title: 'Calendar of Events',
                templateUrl: 'calendar.html'
                //controller: 'contactController'
            })

            .when('/contact', {
                title: 'Contact Us',
                templateUrl: 'contact.html'
                //controller: 'aboutController'
            })
            .when('/directions', {
                title: 'Directions',
                templateUrl: 'directions.html'
                //controller: 'aboutController'
            })
            .when('/handicap', {
                title: 'Handicap',
                templateUrl: 'handicap.html',
                controller: 'handicapController'
            })
            .when('/rates', {
                title: 'Rates',
                templateUrl: 'rates.html'
                //controller: 'aboutController'
            })
            .when('/scorecard', {
                title: 'Scorecard',
                templateUrl: 'scorecard.html',
                controller: 'ScorecardController'
            })
            .when('/weather', {
                title: 'Weather',
                templateUrl: 'weather.html'
                //controller: 'aboutController'
            })
            .otherwise({
                title: 'OOPS!',
                redirectTo: '404.html'
            });


        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    }

    run.$inject = ['$rootScope'];

    function run($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function(event, current) {
            $rootScope.pageTitle = current.title;
            $rootScope.mainImage = current.mainImage;

        });
    }
}());
