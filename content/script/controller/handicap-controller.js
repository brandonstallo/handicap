(function () {
    'use strict';

    angular
        .module('handicapApp')
        .controller('HandicapController', HandicapController);

    HandicapController.$inject = ['$firebaseArray'];

    function HandicapController(
        $firebaseArray) {
        var vm = this;
        var ref = firebase.database().ref().child('teams');
        vm.message = 'Calculate Handicap';
        vm.teams = $firebaseArray(ref);
        vm.isTeamSelected = false;
        vm.enterNewScore = false;
        vm.myFunc = myFunc;
        vm.holes = getData();
        vm.populateTeamInfo = populateTeamInfo;
        vm.enterNewScore = enterNewScore;
        vm.scoreToPar = scoreToPar;
        vm.calculateTotal = calculateTotal;
        vm.courseInfo = courseInfo;
        vm.submitScore = submitScore
        vm.calculateHandicap = calculateHandicap;

        activate();

        function activate() {
            //myFunc();
            //populateTeamInfo()
            //enterNewScore();
            //scoreToPar();
            //calculateTotal();
            //submitScore();
            //calculateHandicap();

        };

        function myFunc() {
            console.log('hello');
        };

        function courseInfo(name, par, yardage, slope, rating) {
            vm.name = name;
            vm.par = par;
            vm.yardage = yardage;
            vm.holes = getData();
            vm.slope = slope;
            vm.rating = rating;
        };

        function populateTeamInfo(team) {
            vm.isTeamSelected = true;
            vm.selectedTeam = team;
        };

        function enterNewScore() {
            vm.enterNewScore = true;
        };

        function scoreToPar() {
            //var score2Par = 0;
            //var birdies = 0;
            //var bogeys = 0;

            //angular.forEach(hole, function (hole) {
            //    if (hole.score > 0) {
            //        var againstPar = hole.score - hole.par;
            //        score2Par += parseInt(againstPar);
            //    }

            //    if (hole.score > hole.par) {
            //        bogeys += 1;

            //        return bogeys;
            //    } else if (hole.score < hole.par) {
            //        birdies += 1;

            //        return birdies;
            //    }
            //});

            //return score2Par;
        };

        function calculateTotal() {
            //var total = 0;

            //angular.forEach(hole, function (hole) {
            //    if (hole.score > 0) {
            //        total += parseInt(hole.score);
            //    }
            //});

            //return total;
        };

        function submitScore() {
            var total = 0;

            angular.forEach(hole, function (hole) {
                total += parseInt(hole.score);
            });

            team.scores.push(total);
        };

        function calculateHandicap(team) {
            var total = 0;

            angular.forEach(team.scores,
                function (score) {
                    total += parseInt(score);
                });

            var numberOfScores = team.scores.length;
            var newHandicap = (total / numberOfScores) - vm.coursePlayed.par;
            var roundedHandicap = (parseFloat(newHandicap).toFixed(0));
            var newHandicapElement = angular.element($document.querySelector('#id'));

            newHandicapElement.text(roundedHandicap);

            return roundedHandicap;
        };

        function getData() {
            return [
                {
                    hole: 1,
                    par: 4,
                    yardage: 315,
                },
                {
                    hole: 2,
                    par: 4,
                    yardage: 325,
                },
                {
                    hole: 3,
                    par: 4,
                    yardage: 418,

                },
                {
                    hole: 4,
                    par: 3,
                    yardage: 178,

                },
                {
                    hole: 5,
                    par: 4,
                    yardage: 375,

                },
                {
                    hole: 6,
                    par: 3,
                    yardage: 170,

                },
                {
                    hole: 7,
                    par: 5,
                    yardage: 475,

                },
                {
                    hole: 8,
                    par: 4,
                    yardage: 295,

                },
                {
                    hole: 9,
                    par: 4,
                    yardage: 390,
                },
            ];
        }
    }
}());
