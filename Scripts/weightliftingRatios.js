// JQuery
function main() {
	// Activate tab function
	$('#weightliftingTab').tab();
}

$(document).ready(main);

// AngularJS
angular.module('weightliftingApp',[])

	.controller('weightliftingController', function($scope) {

		// Back Squat
		$scope.bs;
		// Front Squat
		$scope.fs;
		// Deadlift
		$scope.dl;
		// Strict Press
		$scope.ohp;
		// Push Press
		$scope.pp;
		// Jerk
		$scope.jerk;
		// Clean
		$scope.cln;
		// Power Clean
		$scope.pc;
		// Clean and Jerk
		$scope.cnj
		// Snatch
		$scope.sn;
		// Power Snatch
		$scope.ps;

		var bsCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		var fsCount = [0, 0, 0];
		var dlCount = [0, 0, 0];
		var ohpCount = [0];
		var ppCount = [0, 0];
		var clnCount = [0, 0, 0];
		var pcCount = [0, 0, 0];
		var cnjCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		// var snCount = [0, 0, 0, 0];
		$scope.snCount = [0,0,0,0];
		var psCount = [0, 0, 0];

		// Snatch Priority
		$scope.snPriority = function() {
			var i = 0;
			var total = 0;
			// for (var k = 0; k < $scope.snCount.length; k++) {
			// 	if($scope.snCount[k] != 0){
			// 		total += $scope.snCount[k];
			// 		i++;
			// 	}
			// }
			if (isNaN(total / i)) {
				// return snCount[0] + " " + snCount[1] + " " + snCount[2] + " " + snCount[3];
				return $scope.snCount[0];
			}
			else {
				return total / i;
			}
		}

		// Snatch / Back Squat Ratio
		$scope.snbs = function() {
			var ratio = $scope.sn / $scope.bs;
			if (isNaN(ratio)) {
				return "0 %";
			}
			else{
				if (ratio < 0.65 ){
					snCount[0] = ($scope.bs * 0.65) - $scope.sn;
				}
				else {
					bsCount[0] = ($scope.sn / 0.65) - $scope.bs;
				}
				return 100*(ratio).toFixed(2) + " %";
			}
		}

		// Snatch / Deadlift Ratio
		$scope.sndl = function() {
			var ratio = $scope.sn / $scope.dl;
			if (isNaN(ratio)) {
				return "0 %";
			}
			else{
				if (ratio < 0.40 ){
					snCount[1] = ($scope.dl * 0.40) - $scope.sn;
				}
				else {
					dlCount[0] = ($scope.sn / 0.40) - $scope.dl;
				}
				return 100*(ratio).toFixed(2) + " %";
			}
		}

		// Snatch / Clean and Jerk Ratio
		$scope.sncnj = function() {
			var ratio = $scope.sn / $scope.cnj;
			if (isNaN(ratio)) {
				return "0 %";
			}
			else{
				if (ratio < 0.81 ){
					snCount[2] = ($scope.cnj * 0.81) - $scope.sn;
				}
				else {
					cnjCount[0] = ($scope.sn / 0.81) - $scope.cnj;
				}
				return 100*(ratio).toFixed(2) + " %";
			}
		}

		// Back Squat / Clean and Jerk Ratio
		$scope.bscnj = function() {
			var ratio = $scope.bs / $scope.cnj;
			if (isNaN(ratio)) {
				return "0 %";
			}
			else{
				return 100*(ratio).toFixed(2) + " %";
			}
		}

		// Clean and Jerk / Deadlift Ratio
		$scope.cnjdl = function() {
			var ratio = $scope.cnj / $scope.dl;
			if (isNaN(ratio)) {
				return "0 %";
			}
			else{
				return 100*(ratio).toFixed(2) + " %";
			}
		}

		// Front Squat / Back Squat Ratio
		$scope.fsbs = function() {
			var ratio = $scope.fs / $scope.bs;
			if (isNaN(ratio)) {
				return "0 %";
			}
			else{
				return 100*(ratio).toFixed(2) + " %";
			}
		}

		// Clean and Jerk / Front Squat
		$scope.cnjfs = function() {
			var ratio = $scope.cnj / $scope.fs;
			if (isNaN(ratio)) {
				return "0 %";
			}
			else{
				return 100*(ratio).toFixed(2) + " %";
			}
		}

		// Power Clean / Clean Ratio
		$scope.pccln = function() {
			var ratio = $scope.pc / $scope.cln;
			if (isNaN(ratio)) {
				return "0 %";
			}
			else{
				return 100*(ratio).toFixed(2) + " %";
			}
		}

		// Power Snatch / Snatch Ratio
		$scope.pssn = function() {
			var ratio = $scope.ps / $scope.sn;
			if (isNaN(ratio)) {
				return "0 %";
			}
			else{
				return 100*(ratio).toFixed(2) + " %";
			}
		}

		// Push Press / Clean and Jerk Ratio
		$scope.ppcnj = function() {
			var ratio = $scope.pp / $scope.cnj;
			if (isNaN(ratio)) {
				return "0 %";
			}
			else{
				return 100*(ratio).toFixed(2) + " %";
			}
		}

		// Deadlift / Back Squat Ratio
		$scope.dlbs = function() {
			var ratio = $scope.dl / $scope.bs;
			if (isNaN(ratio)) {
				return "0 %";
			}
			else{
				return 100*(ratio).toFixed(2) + " %";
			}
		}

		// Strict Press / Back Squat
		$scope.ohpbs = function() {
			var ratio = $scope.ohp / $scope.bs;
			if (isNaN(ratio)) {
				return "0 %";
			}
			else{
				return 100*(ratio).toFixed(2) + " %";
			}
		}

		// Push Press / Back Squat Ratio
		$scope.ppbs = function() {
			var ratio = $scope.pp / $scope.bs;
			if (isNaN(ratio)) {
				return "0 %";
			}
			else{
				return 100*(ratio).toFixed(2) + " %";
			}
		}

		// Clean / Back Squat Ratio
		$scope.clnbs = function() {
			var ratio = $scope.cln / $scope.bs;
			if (isNaN(ratio)) {
				return "0 %";
			}
			else{
				return 100*(ratio).toFixed(2) + " %";
			}
		}

		// Power Clean / Back Squat Ratio
		$scope.pcbs = function() {
			var ratio = $scope.pc / $scope.bs;
			if (isNaN(ratio)) {
				return "0 %";
			}
			else{
				return 100*(ratio).toFixed(2) + " %";
			}
		}

		// Power Snatch / Back Squat Ratio
		$scope.psbs = function() {
			var ratio = $scope.ps / $scope.bs;
			if (isNaN(ratio)) {
				return "0 %";
			}
			else{
				return 100*(ratio).toFixed(2) + " %";
			}
		}

		// Jerk / Back Squat Ratio
		$scope.jerkbs = function() {
			var ratio = $scope.jerk / $scope.bs;
			if (isNaN(ratio)) {
				return "0 %";
			}
			else{
				return 100*(ratio).toFixed(2) + " %";
			}
		}

		// Clean / Clean and Jerk Ratio
		$scope.clncnj = function() {
			var ratio = $scope.cln / $scope.cnj;
			if (isNaN(ratio)) {
				return "0 %";
			}
			else{
				return 100*(ratio).toFixed(2) + " %";
			}
		}

		// Jerk / Clean and Jerk Ratio
		$scope.jerkcnj = function() {
			var ratio = $scope.jerk / $scope.cnj;
			if (isNaN(ratio)) {
				return "0 %";
			}
			else{
				return 100*(ratio).toFixed(2) + " %";
			}
		}

		// Power Clean / Clean and Jerk Ratio
		$scope.pccnj = function() {
			var ratio = $scope.pc / $scope.cnj;
			if (isNaN(ratio)) {
				return "0 %";
			}
			else{
				return 100*(ratio).toFixed(2) + " %";
			}
		}

		// Power Snatch / Clean and Jerk Ratio
		$scope.pscnj = function() {
			var ratio = $scope.ps / $scope.cnj;
			if (isNaN(ratio)) {
				return "0 %";
			}
			else{
				return 100*(ratio).toFixed(2) + " %";
			}
		}

	});