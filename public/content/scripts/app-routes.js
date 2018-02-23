(function() {
    'use strict';
    angular
        .module('app')
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {
        console.log('config');
        $routeProvider
            .when('/', {
                templateUrl: 'home.html'
                //controller: 'mainController'
            })

            .when('/about', {
                templateUrl: 'about.html'
                //controller: 'aboutController'
            })

            .when('/calendar', {
                templateUrl: 'calendar.html'
                //controller: 'contactController'
            })

            .when('/contact', {
                templateUrl: 'contact.html'
                //controller: 'aboutController'
            })
            .when('/directions', {
                templateUrl: 'directions.html'
                //controller: 'aboutController'
            })
            .when('/handicap', {
                templateUrl: 'handicap.html',
                controller: 'handicapController'
            })
            .when('/rates', {
                templateUrl: 'rates.html'
                //controller: 'aboutController'
            })
            .when('/scorecard', {
                templateUrl: 'scorecard.html'
                //controller: 'aboutController'
            })
            .when('/weather', {
                templateUrl: 'weather.html'
                //controller: 'aboutController'
            })
            .otherwise({
                redirectTo: '404.html'
            });


        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    }
}());
