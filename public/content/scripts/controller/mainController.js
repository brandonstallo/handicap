(function() {

    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    function MainController() {

        var vm = this;
        this.pageTitle = "Home"


        activate();

        function activate() {

            console.log('main controller');
        }

    }

})();