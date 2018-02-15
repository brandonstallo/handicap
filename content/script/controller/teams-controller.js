(function() {
    'use strict';

    angular
        .module('handicapApp')
        .controller('TeamController', TeamController);

    TeamController.$inject = ['TeamService', '$firebaseArray', '$firebaseObject'];

    function TeamController(TeamService, $firebaseArray, $firebaseObject) {
        var vm = this;
        var ref = firebase.database().ref();
        vm.teams = $firebaseArray(ref.child('teams'));
        vm.isTeamSelected = false;
        vm.createTeam = createTeam;
        vm.removeTeam = removeTeam;
        vm.populateTeamInfo = populateTeamInfo;
        vm.enterNewScore = enterNewScore;
        vm.submitScore = submitScore;
        vm.deleteScore = deleteScore;

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

            vm.teams.$add(team).then(function(ref) {
                var id = ref;
                console.log("added record with id " + id);
                console.log(vm.teams.$indexFor(id)); // returns location in the array
            });


            //TeamService.createTeam()
            //    .then(function(response) {
            //        console.log(response);
            //    }).catch(function(exception) {

            //    }).finally(function() {

            //    });
        }

        function removeTeam(team) {
            var deletedTeam = vm.teams.indexOf(team);
            vm.teams.$remove(team);
        }

        function populateTeamInfo(team) {
            vm.isTeamSelected = true;
            vm.selectedTeam = team;
        }

        function enterNewScore() {
            vm.enterNewScore = true;
        }

        function submitScore(score) {


            var teamID = vm.selectedTeam.$id
            var teamScores = $firebaseArray(ref.child('teams/' + teamID + '/scores'));
            var newScore = parseInt(score);

            teamScores.$add(newScore);

        }

        function deleteScore(index) {
            console.log(list);
            var list = [];
            ref.on('value', function(snap) { list = snap.val(); });
            console.log(list);




            //var teamScores = $firebaseArray(ref.child('teams/' + teamID + '/scores'));
            //console.log(index);
            //var teamID = vm.selectedTeam.$id

            //var list = $firebaseArray(ref.child('teams/' + teamID + '/scores'));
            //console.log(list)

            //var item = list[index];


            //console.log(teamID);

            //var team = $firebaseArray(ref.child('teams/' + teamID));

            //console.log(team);



            //console.log(teamScores);


            //teamScores.$remove(index)

            //var teamScores = Object.values(vm.selectedTeam.scores);
            //console.log(deletedScore);
            //console.log(scoreID);
            //console.log(score);
            //console.log(vm.teams)
            //console.log(vm.selectedTeam);
            //console.log(teamScores);

            //console.log(Object.values(teamScores));
            //console.log(teamScores.indexOf(score));


            //console.log(teamID);

            //var list = $firebaseArray(ref.child('teams/' + teamID + '/scores'));
            //var deletedScoreID = score.$id;

            //var deletedScore = list.indexOf(score);

            //console.log(list);
            //console.log(deletedScoreID);

            //console.log(deletedScore);
        }

    }
}());