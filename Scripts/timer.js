$(document).ready(function() {
	//run timer if true, stop if false
	var run = false;

	//initialize time to 0
	var sec = 0;
	var min = 0;
	var hours = 0;

	//initialize work and rest times
	var rounds = 0;
	var work = 0;
	var rest = 0;

	//initialize current round
	var currentRound = 1;

	//Start timer, run count function
	$('.start').on('click', function(){
		run = true;

		//Some retarded testing thing I was doing when I got frustrated...
		$('.test').text("Start lol");

		count();
	});

	//Stop timer
	$('.stop').on('click', function(){
		run = false;
		//Some retarded testing thing I was doing when I got frustrated...
		$('.test').text("Stop heuheuheuhe");
	});

	//Reset timer, set seconds back to zero and stop timer
	$('.reset').on('click', function(){
		run = false;

		//Reset time
		sec = 0;
		min = 0;
		hours = 0;

		//Set time back to 00:00:00
		$('.timer').text(formatTime(hours) + " : " + formatTime(min) + " : " + formatTime(sec));
		count();

		//Set currentRound, rounds, work, rest back to original values
		currentRound = 1;
		rounds = $("#rounds").val();
		work = $("#work").val();
		rest = $("#rest").val();
		$('.progress-text').text("Progress");
		$('.test').text("Reset :(");
	});

	//Format time to always have two digits e.g. 00:00:05 instead of 0:0:5
	function formatTime(val){
		if (val < 10){
			return "0" + val;
		}
		return val;
	}

	//count up from zero
	function count(){
		/**setTimeout(function, x) runs the function x millliseconds 
		after being called**/
		setTimeout(function(){

			//Only run if start is clicked
			if(run){

				//run timer
				sec += 1;
				if (sec == 60){
					sec = 0;
					min += 1;
				}
				if (min == 60) {
					min = 0;
					hours += 1;
				}
				$('.timer').text(formatTime(hours) + " : " + formatTime(min) + " : " + formatTime(sec));
				
				//Repeat
				count();
				progress();
			}
		},1000);
	}


	//Round input
	$('.ok').on('click', function(){
		rounds = $("#rounds").val();
		work = $("#work").val();
		rest = $("#rest").val();

		if((rounds == "") || (work == "") || (rest == "")) {
			$('.test-2').text("Please fill in all the values... dickhole");			
		}
		else{
			$('.progress-text').text("Progress: " + currentRound + " / " + rounds);
			$('.test-2').text("Rounds: " + rounds + " Work/Rest Interval: " + work + "/" + rest);
			//progress();
		}

	});

	//Progress Text
	function progress() {
		if(work > 0) {
			work--;
			$('.current-status').text("Work");
		}
		else if ((work == 0) && (rest > 0)) {
			rest--;
			$('.current-status').text("Rest");
		
			if (rest == 0) {
				work = $("#work").val();
				rest = $("#rest").val();
				++currentRound;
			}
		}

		//Round timer complete
		if(currentRound-1 == rounds){
			run = false;
			currentRound--;
			$('.test').text("IT'S OVER");
		}

		$('.progress-text').text("Progress: " + currentRound + " / " + rounds);
	}
});