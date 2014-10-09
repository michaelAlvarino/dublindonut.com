$(document).ready(function() {
	//run timer if true, stop if false
	var run = false;

	//initialize time to 0
	var seconds = 0;

	//Start timer, run count function
	$('.start').on('click', function(){
		run = true;
		//Some retarded testing thing I was doing when I got frustrated...
		$('.test').text(run);
		count();
	});

	//Stop timer
	$('.stop').on('click', function(){
		run = false;
		//Some retarded testing thing I was doing when I got frustrated...
		$('.test').text(run);
	});

	//Reset timer, set seconds back to zero and stop timer
	$('.reset').on('click', function(){
		run = false;
		seconds = 0;
		$('.timer').text(seconds);
		$('.test').text(run);
	});

	//count up from zero
	function count(){
			/**setInterval(function, x) calls the function every x milliseconds until
			clearInterval is called**/
			setInterval(function(){
				//Only run if start is clicked
				if(run){
					$('.timer').html(++seconds);
				}
			},1000);
	}

});