(function() {
    'use strict';
    angular
        .module('handicapApp')
        .factory('TeamService', TeamService);

    TeamService.$inject = ['$http', '$q','$sce', '$firebaseObject', '$rootScope'];

    function TeamService($http, $q, $sce, $firebaseObject, $rootScope) {

        return {
            //getTeams: getTeams,
            createTeam: createTeam,
        }

        //var ref = firebase.database().ref();

        function createTeam() {
     

            //var ref = firebase.database().ref().child('teams');

            //var url = $sce.trustAsResourceUrl('https://smgc-1487256758030.firebaseio.com')
            //var requestUrl = url
            
            ////return $http.get(requestUrl)
            //    return ref

            //    .then(function(response) {
            //        var response = 999;

            //    }).catch(function(response) {
            //        var exception = {
            //            message: 'Sorry, we are unable to retrieve your pending documents.',
            //            type: 'error',
            //        };
            //        return $q.reject(exception);
            //    });



        }



        //function getTeams() {

        //}
    }
})();
