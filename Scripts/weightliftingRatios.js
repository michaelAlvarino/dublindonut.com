// JQuery
function main() {
	// Activate tab function
	$('#weightliftingTab').tab();
}

$(document).ready(main);

// AngularJS
angular.module('weightliftingApp',[])

	.controller('weightliftingController', function() {
		var vm = this;
		// Inputs
		vm.bs;
		vm.fs;
		vm.dl;
		vm.ohp;
		vm.pp;
		vm.jerk;
		vm.cln;
		vm.pc;
		vm.cnj;
		vm.sn;
		vm.ps;

		vm.lbs = true;
		vm.kg = false;

		vm.bsCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		vm.fsCount = [0, 0, 0];
		vm.dlCount = [0, 0, 0];
		vm.ohpCount = [0];
		vm.ppCount = [0, 0];
		vm.jerkCount = [0, 0]
		vm.clnCount = [0, 0, 0];
		vm.pcCount = [0, 0, 0];
		vm.cnjCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		vm.snCount = [0, 0, 0, 0];
		vm.psCount = [0, 0, 0];

		// Ratios
		// sn / bs ratio
		vm.snbs = function() {
			ratio = vm.sn / vm.bs;
			target = 0.65;
			if(isNaN(ratio)){
				return "0 %";
			}
			else {
				if ( ratio < target){
					vm.snCount[0] = (vm.bs * target) - vm.sn;
					vm.bsCount[0] = 0;
				}
				else {
					vm.snCount[0] = 0;
					vm.bsCount[0] = (vm.sn / target) - vm.bs;
				}
				return Math.round(1000*ratio)/10 + " %";
			}
		}

		// sn / dl ratio
		vm.sndl = function() {
			ratio = vm.sn / vm.dl;
			target = 0.40;
			if(isNaN(ratio)){
				return "0 %";
			}
			else {
				if ( ratio < target){
					vm.snCount[1] = (vm.dl * target) - vm.sn;
					vm.dlCount[0] = 0;
				}
				else {
					vm.snCount[1] = 0;
					vm.dlCount[0] = (vm.sn / target) - vm.dl;
				}
				return Math.round(1000*ratio)/10 + " %";
			}
		}

		// sn / cnj ratio
		vm.sncnj = function() {
			ratio = vm.sn / vm.cnj;
			target = 0.81;
			if(isNaN(ratio)){
				return "0 %";
			}
			else {
				if ( ratio < target){
					vm.snCount[2] = (vm.cnj * target) - vm.sn;
					vm.cnjCount[0] = 0;
				}
				else {
					vm.snCount[2] = 0;
					vm.cnjCount[0] = (vm.sn / target) - vm.cnj;
				}
				return Math.round(1000*ratio)/10 + " %";
			}
		}

		// bs / cnj ratio
		vm.bscnj = function() {
			ratio = vm.bs / vm.cnj;
			target = 1.28;
			if(isNaN(ratio)){
				return "0 %";
			}
			else {
				if ( ratio < target){
					vm.bsCount[1] = (vm.cnj * target) - vm.bs;
					vm.cnjCount[1] = 0;
				}
				else {
					vm.bsCount[1] = 0;
					vm.cnjCount[1] = (vm.bs / target) - vm.cnj;
				}
				return Math.round(1000*ratio)/10 + " %";
			}
		}

		// cnj / dl ratio
		vm.cnjdl = function() {
			ratio = vm.cnj / vm.dl;
			target = 0.55;
			if(isNaN(ratio)){
				return "0 %";
			}
			else {
				if ( ratio < target){
					vm.cnjCount[2] = (vm.dl * target) - vm.cnj;
					vm.dlCount[1] = 0;
				}
				else {
					vm.cnjCount[2] = 0;
					vm.dlCount[1] = (vm.cnj / target) - vm.dl;
				}
				return Math.round(1000*ratio)/10 + " %";
			}
		}

		// fs / bs ratio
		vm.fsbs = function() {
			ratio = vm.fs / vm.bs;
			target = 0.87;
			if(isNaN(ratio)){
				return "0 %";
			}
			else {
				if ( ratio < target){
					vm.fsCount[0] = (vm.bs * target) - vm.fs;
					vm.bsCount[2] = 0;
				}
				else {
					vm.fsCount[0] = 0;
					vm.bsCount[2] = (vm.fs / target) - vm.bs;
				}
				return Math.round(1000*ratio)/10 + "%";
			}
		}

		// cnj / fs ratio
		vm.cnjfs = function() {
			ratio = vm.cnj / vm.fs;
			target = 0.85;
			if(isNaN(ratio)){
				return "0 %";
			}
			else {
				if ( ratio < target){
					vm.cnjCount[3] = (vm.fs * target) - vm.cnj;
					vm.fsCount[1] = 0;
				}
				else {
					vm.cnjCount[3] = 0;
					vm.fsCount[1] = (vm.cnj / target) - vm.fs;
				}
				return Math.round(1000*ratio)/10 + " %";
			}
		}

		// pc / cln ratio
		vm.pccln = function() {
			ratio = vm.pc / vm.cln;
			target = 0.88;
			if(isNaN(ratio)){
				return "0 %";
			}
			else {
				if ( ratio < target){
					vm.pcCount[0] = (vm.cln * target) - vm.pc;
					vm.clnCount[0] = 0;
				}
				else {
					vm.pcCount[0] = 0;
					vm.clnCount[0] = (vm.pc / target) - vm.cln;
				}
				return Math.round(1000*ratio)/10 + " %";
			}
		}

		// ps / sn ratio
		vm.pssn = function() {
			ratio = vm.ps / vm.sn;
			target = 0.88;
			if(isNaN(ratio)){
				return "0 %";
			}
			else {
				if ( ratio < target){
					vm.psCount[0] = (vm.sn * target) - vm.ps;
					vm.snCount[3] = 0;
				}
				else {
					vm.psCount[0] = 0;
					vm.snCount[3] = (vm.ps / target) - vm.sn;
				}
				return Math.round(1000*ratio)/10 + " %";
			}
		}

		// pp / cnj ratio
		vm.ppcnj = function() {
			ratio = vm.pp / vm.cnj;
			target = 0.75;
			if(isNaN(ratio)){
				return "0 %";
			}
			else {
				if ( ratio < target){
					vm.ppCount[0] = (vm.cnj * target) - vm.pp;
					vm.cnjCount[4] = 0;
				}
				else {
					vm.ppCount[0] = 0;
					vm.cnjCount[4] = (vm.pp / target) - vm.cnj;
				}
				return Math.round(1000*ratio)/10 + " %";
			}
		}

		// dl / bs ratio
		vm.dlbs = function() {
			ratio = vm.dl / vm.bs;
			target = 1.23;
			if(isNaN(ratio)){
				return "0 %";
			}
			else {
				if ( ratio < target){
					vm.dlCount[2] = (vm.bs * target) - vm.dl;
					vm.bsCount[3] = 0;
				}
				else {
					vm.dlCount[2] = 0;
					vm.bsCount[3] = (vm.dl / target) - vm.bs;
				}
				return Math.round(1000*ratio)/10 + " %";
			}
		}

		// ohp / bs ratio
		vm.ohpbs = function() {
			ratio = vm.ohp / vm.bs;
			target = 0.45;
			if(isNaN(ratio)){
				return "0 %";
			}
			else {
				if ( ratio < target){
					vm.ohpCount[0] = (vm.bs * target) - vm.ohp;
					vm.bsCount[4] = 0;
				}
				else {
					vm.ohpCount[0] = 0;
					vm.bsCount[4] = (vm.ohp / target) - vm.bs;
				}
				return Math.round(1000*ratio)/10 + " %";
			}
		}

		// pp / bs ratio
		vm.ppbs = function() {
			ratio = vm.pp / vm.bs;
			target = 0.64;
			if(isNaN(ratio)){
				return "0 %";
			}
			else {
				if ( ratio < target){
					vm.ppCount[1] = (vm.bs * target) - vm.pp;
					vm.bsCount[5] = 0;
				}
				else {
					vm.ppCount[1] = 0;
					vm.bsCount[5] = (vm.pp / target) - vm.bs;
				}
				return Math.round(1000*ratio)/10 + " %";
			}
		}

		// cln / bs ratio
		vm.clnbs = function() {
			ratio = vm.cln / vm.bs;
			target = 0.82;
			if(isNaN(ratio)){
				return "0 %";
			}
			else {
				if ( ratio < target){
					vm.clnCount[1] = (vm.bs * target) - vm.cln;
					vm.bsCount[6] = 0;
				}
				else {
					vm.clnCount[1] = 0;
					vm.bsCount[6] = (vm.cln / target) - vm.bs;
				}
				return Math.round(1000*ratio)/10 + " %";
			}
		}

		// pc / bs ratio
		vm.pcbs = function() {
			ratio = vm.cln / vm.bs;
			target = 0.68;
			if(isNaN(ratio)){
				return "0 %";
			}
			else {
				if ( ratio < target){
					vm.pcCount[1] = (vm.bs * target) - vm.pc;
					vm.bsCount[7] = 0;
				}
				else {
					vm.pcCount[1] = 0;
					vm.bsCount[7] = (vm.pc / target) - vm.bs;
				}
				return Math.round(1000*ratio)/10 + " %";
			}
		}

		// ps / bs ratio
		vm.psbs = function() {
			ratio = vm.ps / vm.bs;
			target = 0.54;
			if(isNaN(ratio)){
				return "0 %";
			}
			else {
				if ( ratio < target){
					vm.psCount[1] = (vm.bs * target) - vm.ps;
					vm.bsCount[8] = 0;
				}
				else {
					vm.psCount[1] = 0;
					vm.bsCount[8] = (vm.ps / target) - vm.bs;
				}
				return Math.round(1000*ratio)/10 + " %";
			}
		}

		// jerk / bs ratio
		vm.jerkbs = function() {
			ratio = vm.jerk / vm.bs;
			target = 0.84;
			if(isNaN(ratio)){
				return "0 %";
			}
			else {
				if ( ratio < target){
					vm.jerkCount[0] = (vm.bs * target) - vm.jerk;
					vm.bsCount[9] = 0;
				}
				else {
					vm.jerkCount[0] = 0;
					vm.bsCount[9] = (vm.jerk / target) - vm.bs;
				}
				return Math.round(1000*ratio)/10 + " %";
			}
		}

		// cln / cnj ratio
		vm.clncnj = function() {
			ratio = vm.cln / vm.cnj;
			target = 1.03;
			if(isNaN(ratio)){
				return "0 %";
			}
			else {
				if ( ratio < target){
					vm.clnCount[2] = (vm.cnj * target) - vm.cln;
					vm.cnjCount[5] = 0;
				}
				else {
					vm.clnCount[2] = 0;
					vm.cnjCount[5] = (vm.cln / target) - vm.cnj;
				}
				return Math.round(1000*ratio)/10 + " %";
			}
		}

		// jerk / cnj ratio
		vm.jerkcnj = function() {
			ratio = vm.jerk / vm.cnj;
			target = 1.05;
			if(isNaN(ratio)){
				return "0 %";
			}
			else {
				if ( ratio < target){
					vm.jerkCount[1] = (vm.cnj * target) - vm.jerk;
					vm.cnjCount[6] = 0;
				}
				else {
					vm.jerkCount[1] = 0;
					vm.cnjCount[6] = (vm.jerk / target) - vm.cnj;
				}
				return Math.round(1000*ratio)/10 + " %";
			}
		}

		// pc / cnj ratio
		vm.pccnj = function() {
			ratio = vm.pc / vm.cnj;
			target = 0.85;
			if(isNaN(ratio)){
				return "0 %";
			}
			else {
				if ( ratio < target){
					vm.pcCount[2] = (vm.cnj * target) - vm.pc;
					vm.cnjCount[7] = 0;
				}
				else {
					vm.pcCount[2] = 0;
					vm.cnjCount[7] = (vm.pc / target) - vm.cnj;
				}
				return Math.round(1000*ratio)/10 + " %";
			}
		}

		// ps / cnj ratio
		vm.pscnj = function() {
			ratio = vm.ps / vm.cnj;
			target = 0.68;
			if(isNaN(ratio)){
				return "0 %";
			}
			else {
				if ( ratio < target){
					vm.psCount[2] = (vm.cnj * target) - vm.ps;
					vm.cnjCount[8] = 0;
				}
				else {
					vm.psCount[2] = 0;
					vm.cnjCount[8] = (vm.ps / target) - vm.cnj;
				}
				return Math.round(1000*ratio)/10 + " %";
			}
		}

		// PRIORITIES

		// bs priority
		vm.bsP = function() {
			var i = 0;
			var total = 0;
			for (var k = 0; k < vm.bsCount.length; k++) {
				if(vm.bsCount[k] != 0) {
					total += vm.bsCount[k];
					i++;
				}
			}
			if (isNaN(total / i)) {
				return "None";
			}
			return "Back Squat Frequency: " + i + " | Improve by " + Math.round(total / i);
		}

		// fs priority
		vm.fsP = function() {
			var i = 0;
			var total = 0;
			for (var k = 0; k < vm.fsCount.length; k++) {
				if(vm.fsCount[k] != 0) {
					total += vm.fsCount[k];
					i++;
				}
			}
			if (isNaN(total / i)) {
				return "None";
			}
			return "Front Squat Frequency: " + i + " | Improve by " + Math.round(total / i);
		}

		// dl priority
		vm.dlP = function() {
			var i = 0;
			var total = 0;
			for (var k = 0; k < vm.dlCount.length; k++) {
				if(vm.dlCount[k] != 0) {
					total += vm.dlCount[k];
					i++;
				}
			}
			if (isNaN(total / i)) {
				return "None";
			}
			return "Deadlift Frequency: " + i + " | Improve by " + Math.round(total / i);
		}

		// ohp priority
		vm.ohpP = function() {
			var i = 0;
			var total = 0;
			for (var k = 0; k < vm.ohpCount.length; k++) {
				if(vm.ohpCount[k] != 0) {
					total += vm.ohpCount[k];
					i++;
				}
			}
			if (isNaN(total / i)) {
				return "None";
			}
			return "Strict Press Frequency: " + i + " | Improve by " + Math.round(total / i);
		}

		// pp priority
		vm.ppP = function() {
			var i = 0;
			var total = 0;
			for (var k = 0; k < vm.ppCount.length; k++) {
				if(vm.ppCount[k] != 0) {
					total += vm.ppCount[k];
					i++;
				}
			}
			if (isNaN(total / i)) {
				return "None";
			}
			return "Push Press Frequency: " + i + " | Improve by " + Math.round(total / i);
		}

		// jerk priority
		vm.jerkP = function() {
			var i = 0;
			var total = 0;
			for (var k = 0; k < vm.jerkCount.length; k++) {
				if(vm.jerkCount[k] != 0) {
					total += vm.jerkCount[k];
					i++;
				}
			}
			if (isNaN(total / i)) {
				return "None";
			}
			return "Jerk Frequency: " + i + " | Improve by " + Math.round(total / i);
		}

		// cln priority
		vm.clnP = function() {
			var i = 0;
			var total = 0;
			for (var k = 0; k < vm.clnCount.length; k++) {
				if(vm.clnCount[k] != 0) {
					total += vm.clnCount[k];
					i++;
				}
			}
			if (isNaN(total / i)) {
				return "None";
			}
			return "Clean Frequency: " + i + " | Improve by " + Math.round(total / i);
		}

		// pc priority
		vm.pcP = function() {
			var i = 0;
			var total = 0;
			for (var k = 0; k < vm.pcCount.length; k++) {
				if(vm.pcCount[k] != 0) {
					total += vm.pcCount[k];
					i++;
				}
			}
			if (isNaN(total / i)) {
				return "None";
			}
			return "Power Clean Frequency: " + i + " | Improve by " + Math.round(total / i);
		}

		// cnj priority
		vm.cnjP = function() {
			var i = 0;
			var total = 0;
			for (var k = 0; k < vm.cnjCount.length; k++) {
				if(vm.cnjCount[k] != 0) {
					total += vm.cnjCount[k];
					i++;
				}
			}
			if (isNaN(total / i)) {
				return "None";
			}
			return "Clean and Jerk Frequency: " + i + " | Improve by " + Math.round(total / i);
		}


		// sn priority
		vm.snP = function() {
			var i = 0;
			var total = 0;
			for (var k = 0; k < vm.snCount.length; k++) {
				if(vm.snCount[k] != 0) {
					total += vm.snCount[k];
					i++;
				}
			}
			if (isNaN(total / i)) {
				return "None";
			}
			return "Snatch Frequency: " + i + " | Improve by " + Math.round(total / i);
		}

		// ps priority
		vm.psP = function() {
			var i = 0;
			var total = 0;
			for (var k = 0; k < vm.psCount.length; k++) {
				if(vm.psCount[k] != 0) {
					total += vm.psCount[k];
					i++;
				}
			}
			if (isNaN(total / i)) {
				return "None";
			}
			return "Power Snatch Frequency: " + i + " | Improve by " + Math.round(total / i);
		}

	});