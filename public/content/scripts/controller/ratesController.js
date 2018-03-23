(function() {

    'use strict';

    angular
        .module('app')
        .controller('RatesController', RatesController);



    function RatesController() {

        var vm = this;
        this.pageTitle = "Rates";


        activate();

        function activate() {

            console.log('Rates controller');
        }

    }

})();