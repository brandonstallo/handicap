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
                controller: 'HomeController',
                templateUrl: 'home.html',
                title: 'Home',
                description: 'Salisbury Golf Course is great 9 hole public golf course located in Salisbury, MO.',
                pageClass: 'home',
                mainImage: '8'

            })

            .when('/about', {
                templateUrl: 'about.html',
                title: 'About Us',
                description: 'Salisbury Golf Course is great 9 hole public golf course located in Salisbury, MO.',
                pageClass: 'about-us',
                mainImage: '7'

            })

            .when('/calendar', {
                templateUrl: 'calendar.html',
                title: 'Calendar of Events',
                description: 'Salisbury Golf Course is great 9 hole public golf course located in Salisbury, MO.',
                pageClass: 'calendar',
                mainImage: '8'

            })

            .when('/contact', {
                templateUrl: 'contact.html',
                title: 'Contact Us',
                description: 'Salisbury Golf Course is great 9 hole public golf course located in Salisbury, MO.',
                pageClass: 'contact-us',
                mainImage: '8'

            })
            .when('/directions', {
                templateUrl: 'directions.html',
                title: 'Directions',
                description: 'Salisbury Golf Course is great 9 hole public golf course located in Salisbury, MO.',
                pageClass: 'directions',
                mainImage: '8'

            })
            .when('/handicap', {
                title: 'Handicap',
                pageClass: 'handicap',
                templateUrl: 'handicap.html',
            })
            .when('/rates', {
                templateUrl: 'rates.html',
                title: 'Rates',
                description: 'Salisbury Golf Course is great 9 hole public golf course located in Salisbury, MO.',
                pageClass: 'rates',
                mainImage: '8'

            })
            .when('/sitemap', {
                templateUrl: 'sitemap.html',
                title: 'Site Map',
                description: 'Salisbury Golf Course is great 9 hole public golf course located in Salisbury, MO.',
                pageClass: 'sitemap',

            })
            .when('/scorecard', {
                templateUrl: 'scorecard.html',
                title: 'Scorecard',
                description: 'Salisbury Golf Course is great 9 hole public golf course located in Salisbury, MO.',
                pageClass: 'scorecard'
            })
            .when('/weather', {
                templateUrl: 'weather.html',
                title: 'Weather',
                description: 'Salisbury Golf Course is great 9 hole public golf course located in Salisbury, MO.',
                pageClass: 'weather'

            })
            .otherwise({
                title: 'OOPS!',
                pageClass: '404',
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
            $rootScope.pageClass = current.pageClass;

        });
    }

    function init() {
        console.log('routes ran');
    }
    init();
}());
