$(document).ready(function() {
	//run timer if true, stop if false
	var run = false;

	//initialize time to 0
	var sec = 0;
	var min = 0;
	var hours = 0;

	//Start timer, run count function
	$('.start').on('click', function(){
		run = true;

		//Some retarded testing thing I was doing when I got frustrated...
		$('.test').text("Start lol");

		count()
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

		$('.timer').text(formatTime(hours) + " : " + formatTime(min) + " : " + formatTime(sec));
				count();
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
			}

		},1000);
	}

});