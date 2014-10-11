$(document).ready(function() {
	//run timer if true, stop if false
	var run = false;

	//initialize time to 0
	var sec = 0;
	var min = 0;
	var hours = 0;

	//initialize work and rest times
	var rounds = 0;//<--- This is the variable that doesn't act like an int
	var work = 0;
	var rest = 0;

	//initialize current round
	var currentRound = 1;

	//total seconds needed to complete round
	var totalTime = 0;

	//count seconds elapsed
	var totalTimeCounter = 0;

	//CLICK EVENT
	//Start timer, run count function
	$('.start').on('click', function(){
		run = true;

		//Some retarded testing thing I was doing when I got frustrated...
		$('.test').text("Start lol");

		count();
	});

	//CLICK EVENT
	//Stop timer
	$('.stop').on('click', function(){
		run = false;
		//Some retarded testing thing I was doing when I got frustrated...
		$('.test').text("Stop heuheuheuhe");
	});

	//CLICK EVENT
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

		//Reset progress text
		$('.progress-text').text("Progress");
		$('.test').text("Reset :(");

		//Reset progress bar
		$('.progress-bar').css('width',0+"%");
		$('.progress-bar').text("0%");	

		//Reset current status
		$('.current-status').text("Current Status");
		$('.current-status').css('color',"black");
	});

	//CLICK EVENT: Set rounds, work, and interval
	//Round input
	$('.ok').on('click', function(){
		rounds = $("#rounds").val();
		work = $("#work").val();
		rest = $("#rest").val();

		totalTime = (work + rest) / rounds;

		if((rounds == "") || (work == "") || (rest == "")) {
			$('.test-2').text("Please fill in all the values... dickhole");			
		}
		if((rounds <= 0) || (work <= 0) || (rest <= 0)){
			$('.test-2').text("Fill in a positive number for number of rounds / work / rest");
		}
		else{
			$('.progress-text').text("Progress: " + currentRound + " / " + rounds);
			$('.test-2').text("Rounds: " + rounds + " Work/Rest Interval: " + work + " s / " + rest + " s");
			//progress();
		}
	});

	//Format time to always have two digits e.g. 00:00:05 instead of 0:0:5
	function formatTime(val){
		if (val < 10){
			return "0" + val;
		}
		return val;
	}

	//Count up from zero
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

				//UPDATE timer
				$('.timer').text(formatTime(hours) + " : " + formatTime(min) + " : " + formatTime(sec));
				
				//Repeat
				count();
				progress();
			}
		},1000);
	}

	//keep track of rounds
	function progress() {

		//Count down work interval
		if(work > 0) {
			work--;
			$('.current-status').text("Work");
			$('.current-status').css('color',"green");
		}
		//Count down rest interval
		else if ((work == 0) && (rest > 0)) {
			rest--;
			$('.current-status').text("Rest");
			$('.current-status').css('color',"red");
			
			//Go to next round if work == rest == 0 and rest counter
			if (rest == 0) {
				work = $("#work").val();
				rest = $("#rest").val();
				currentRound++;
			}
		}

		//Round timer complete
		if(currentRound-1 == rounds){
			run = false;
			currentRound--;
			$('.test').text("Nice job! It's over!");
			$('.current-status').text("DONE!!! Lu is so proud of you!!!");
			$('.current-status').css('color',"lightblue");
		}

		//increment totalTimeCounter for progress bar
		//Not working
		//totalTimeCounter++;
		//var percent = totalTimeCounter / totalTime;
		
		//Progress bar percentage
		var percent = 100*currentRound / rounds;
		
		//UPDATE round text
		$('.progress-text').text("Progress: " + currentRound + " / " + rounds);

		//UPDATE progress bar
		$('.progress-bar').css('width',percent+"%");
		$('.progress-bar').text(percent + "%");
	}
});