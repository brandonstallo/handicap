(function() {

    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);



    function HomeController() {

        var vm = this;
        this.pageTitle = "Home";


        activate();

        function activate() {

            console.log('Home controller');
        }

    }

})();