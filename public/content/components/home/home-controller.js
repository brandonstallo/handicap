(function() {

    angular
        .module('app')
        .controller('HomeController', HomeController);

    function HomeController() {
        var vm = this;
        this.pageTitle = "Homes"

        activate();


        function activate() {
            console.log('home-controllersddss');
            vm.message = "home";
        }

    }



})();