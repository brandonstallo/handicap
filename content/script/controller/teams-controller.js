(function() {
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
        vm.createTeam = createTeam;
        vm.populateTeamInfo = populateTeamInfo;

        activate();

        function activate() {
            populateTeamInfo()
            console.log($firebaseArray(ref));

        }

        function createTeam() {
            var numberOfTeams = vm.teams.length;

            var team = {
                id: numberOfTeams + 1,
                name: vm.name,
                player1: vm.player1Name,
                player2: vm.player2Name,

            };

            vm.teams.$add(team);
            //vm.teams.push(team);

            return team
        }

        function populateTeamInfo(team) {
            console.log('pop team');
            //vm.isTeamSelected = true;
            //vm.selectedTeam = team;
        }
    }
}());
