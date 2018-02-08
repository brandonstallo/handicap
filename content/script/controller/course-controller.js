(function() {
    'use strict';

    angular
        .module('handicapApp')
        .controller('CourseController', CourseController);

    //TeamController.$inject = ['TeamService', '$firebaseArray'];

    function CourseController(
        //TeamService,
        //$firebaseArray
    ) {
        var vm = this;

        activate();

        function activate() {
        }

        function createTeam() {

            var numberOfTeams = vm.teams.length;

            var team = {
                id: numberOfTeams + 1,
                handicap: 0,
                scores: [],
                name: vm.name,
                player1: vm.player1Name,
                player2: vm.player2Name
            };

            vm.teams.$add(team);
  
        }
    }
}());
    