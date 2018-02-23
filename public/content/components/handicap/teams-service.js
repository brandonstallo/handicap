//(function() {

//    angular
//        .module('app', [])
//        .factory('TeamService', TeamService);

//    TeamService.$inject = ['$http', '$q', '$sce', '$firebaseObject', '$rootScope'];

//    function TeamService($http, $q, $sce, $firebaseObject, $rootScope) {
//        var vm = this;
//        var ref = firebase.database().ref().child('teams');
//        vm.teams = $firebaseArray(ref);

//        return {
//            getTeams: getTeams,
//            //getTeams: getTeams,
//            createTeam: createTeam
//        };

//        function getTeams() {

//        }
//        //var ref = firebase.database().ref();

//        function createTeam() {
//            var numberOfTeams = vm.teams.length;


//            //var ref = firebase.database().ref().child('teams');

//            var team = {
//                id: numberOfTeams + 1,
//                name: vm.name,
//                player1: vm.player1Name,
//                player2: vm.player2Name
//                //var url = $sce.trustAsResourceUrl('https://smgc-1487256758030.firebaseio.com')
//                //var requestUrl = url

//                ////return $http.get(requestUrl)
//                //    return ref

//                //    .then(function(response) {
//                //        var response = 999;

//                //    }).catch(function(response) {
//                //        var exception = {
//                //            message: 'Sorry, we are unable to retrieve your pending documents.',
//                //            type: 'error',
//                //        };
//                //        return $q.reject(exception);
//                //    });

//            };

//            vm.teams.$add(team);
//            //vm.teams.push(team);

//            return team;
//        }



//        //function getTeams() {

//        //}
//    }
//})();