(function() {
    'use strict';
    angular
        .module('handicapApp')
        .factory('HandicapService', HandicapService);

    HandicapService.$inject = ['$firebaseObject'];

    function HandicapService($firebaseObject) {
        var ref = firebase.database().ref();

        return {
            getTeams: getTeams,
        }
        
    }
})();
