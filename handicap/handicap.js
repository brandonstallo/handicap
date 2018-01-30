(function() {
    'use strict';

    angular
        .module('handicapApp')
        .controller('HandicapController', HandicapController);


    function HandicapController($document) {
        var vm = this;
        vm.message = 'Calculate Handicap';
        vm.isTeamSelected = false;
        vm.enterNewScore = false;


        var Course = function(name, par, yardage, slope, rating) {
            var vm = this;
            vm.name = name;
            vm.par = par;
            vm.yardage = yardage;
            vm.holes = getData();
            vm.slope = slope;
            vm.rating = rating;
        };

        // make this be dynamic based on selection from the user
        var coursePlayed = new Course('Salisbury Golf Course', 35, 2963, 9);

        // console.log('course', coursePlayed.name);
        // console.log('par', coursePlayed.par);
        // console.log('yardage', coursePlayed.yardage);
        // console.log('holes', coursePlayed.holes);

        vm.populateTeamInfo = function(team) {
            vm.isTeamSelected = true;
            vm.selectedTeam = team;
        };

        vm.enterNewScore = function() {
            vm.enterNewScore = true;
        };

        vm.scoreToPar = function(hole) {
            var score2Par = 0;
            var birdies = 0;
            var bogeys = 0;

            angular.forEach(hole, function(hole) {
                if (hole.score > 0) {
                    var againstPar = hole.score - hole.par;
                    score2Par += parseInt(againstPar);
                }

                if (hole.score > hole.par) {
                    bogeys += 1;

                    return bogeys;
                } else if (hole.score < hole.par) {
                    birdies += 1;

                    return birdies;
                }
            });

            return score2Par;
        };

        vm.calculateTotal = function(hole) {
            var total = 0;

            angular.forEach(hole, function(hole) {
                if (hole.score > 0) {
                    total += parseInt(hole.score);
                }
            });

            return total;
        };

        vm.submitScore = function(hole, team) {
            var total = 0;

            angular.forEach(hole, function(hole) {
                total += parseInt(hole.score);
            });

            team.scores.push(total);
        };

        vm.calculateHandicap = function(team) {
            var total = 0;

            angular.forEach(team.scores,
                function(score) {
                    total += parseInt(score);
                });

            var numberOfScores = team.scores.length;
            var newHandicap = (total / numberOfScores) - coursePlayed.par;
            var roundedHandicap = (parseFloat(newHandicap).toFixed(0));
            var newHandicapElement = angular.element($document.querySelector('#id'));

            newHandicapElement.addClass('needThis');
            newHandicapElement.text(roundedHandicap);

            return roundedHandicap;
        };

        function getData() {
            return [
                hole1 = {
                    name: 1,
                    par: 4,
                    yardage: 315,
                },
                hole2 = {
                    name: 2,
                    par: 4,
                    yardage: 325,
                },
                hole3 = {
                    name: 3,
                    par: 4,
                    yardage: 418,

                },
                hole4 = {
                    name: 4,
                    par: 3,
                    yardage: 178,

                },
                hole5 = {
                    name: 5,
                    par: 4,
                    yardage: 375,

                },
                hole6 = {
                    name: 6,
                    par: 3,
                    yardage: 170,

                },
                hole7 = {
                    name: 7,
                    par: 5,
                    yardage: 475,

                },
                hole8 = {
                    name: 8,
                    par: 4,
                    yardage: 295,

                },
                hole9 = {
                    name: 9,
                    par: 4,
                    yardage: 390,
                },
            ];
        }

        vm.holes = getData();

        vm.teams = [
            team1 = {
                player1: 'Brandon',
                player2: 'Mark',
                name: 'Stallo X2',
                scores: [35, 37, 33, 37, 26, 35, 34],
                handicap: '0',
            },
            team2 = {
                player1: 'Allen',
                player2: 'Aaron',
                name: 'Carter X2',
                scores: [40, 41, 42, 43, 44, 45],
                handicap: '0',
            },
        ];
    }
})();
