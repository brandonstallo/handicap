(function () {
    'use strict';

    angular
        .module('handicapApp')
        .controller('TeamController', TeamController);

    TeamController.$inject = ['$firebaseArray'];

    function TeamController(
        $firebaseArray) {
        var vm = this;
        var ref = firebase.database().ref().child('teams');
        vm.message = 'Calculate Handicap';
        vm.teams = $firebaseArray(ref);
        vm.isTeamSelected = false;
        vm.myFunc = myFunc;
        vm.populateTeamInfo = populateTeamInfo;

        activate();

        function activate() {
            myFunc();
            //populateTeamInfo()

        };

        function myFunc() {
            console.log('hello');
        };

        function populateTeamInfo(team) {
            vm.isTeamSelected = true;
            vm.selectedTeam = team;
        };


    }
}());
