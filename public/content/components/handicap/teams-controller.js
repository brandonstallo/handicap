(function() {

    angular
        .module('app')
        .controller('TeamController', TeamController);

    TeamController.$inject = ['TeamService', '$firebaseArray', '$firebaseObject'];

    function TeamController($firebaseArray, TeamService, $firebaseObject) {
        var vm = this;
        //var ref = firebase.database().ref().child('teams');
        vm.message = 'Calculate Handicap';
        vm.teams = $firebaseArray(ref);
        var ref = firebase.database().ref();
        vm.teams = $firebaseArray(ref.child('teams'));
        vm.scores = $firebaseArray(ref.child('scores'));
        vm.isTeamSelected = false;
        vm.getTeams = getTeams;
        vm.createTeam = createTeam;
        vm.removeTeam = removeTeam;
        vm.populateTeamInfo = populateTeamInfo;
        vm.enterNewScore = enterNewScore;
        vm.submitScore = submitScore;

        activate();

        function activate() {
            populateTeamInfo();
            console.log($firebaseArray(ref));

        }

        function getTeams() {
            console.log('get teams');
        }

        function createTeam() {

            var numberOfTeams = vm.teams.length;

            var team = {
                //id: numberOfTeams + 1,
                handicap: 0,
                scores: [],
                name: vm.name,
                player1: vm.player1Name,
                player2: vm.player2Name

            };

            vm.teams.$add(team);
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

            return team;
            //    });
        }

        function removeTeam(team) {
            var deletedTeam = vm.teams.indexOf(team);
            vm.teams.$remove(team);
        }

        function populateTeamInfo(team) {
            console.log('pop team');
            //vm.isTeamSelected = true;
            //vm.selectedTeam = team;
            vm.isTeamSelected = true;
            vm.selectedTeam = team;

            function enterNewScore() {
                vm.enterNewScore = true;
            }

            function submitScore(score) {

                var teamID = vm.selectedTeam.$id;
                var list = $firebaseArray(ref.child('teams/' + teamID + '/scores'));
                var newScore = parseInt(score);

                list.$add(newScore);

            }
        }

    }
})();
