(function() {

    angular
        .module('app')
        .controller('ScorecardController', ScorecardController);

    function ScorecardController() {
        var vm = this;
        this.pageTitle = "Scorecard";

        activate();


        function activate() {
            console.log('scorecard-controllersddss');
            vm.message = "scorecard";
        }

    }



})();