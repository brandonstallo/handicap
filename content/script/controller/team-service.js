(function() {
    'use strict';
    angular
        .module('handicapApp')
        .factory('TeamService', TeamService);

    HandicapService.$inject = ['$firebaseObject'];

    function TeamService($firebaseObject) {
        //var ref = firebase.database().ref();
        var vm = this;
        var ref = firebase.database().ref().child('teams');
        vm.teams = $firebaseArray(ref);


        return {
            getTeams: getTeams,
            createTeam: createTeam,
        }

        function getTeams() {

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
    }
})();
