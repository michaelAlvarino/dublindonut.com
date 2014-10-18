$(document).ready(function() {
	var playlistString = "ravinswod.mp3,darko.mp3,ethrz.mp3,wdanelno.mp3,elefant.mp3,windid.mp3,fosterkicks.mp3,kale.mp3,hobbes.mp3";
	var tracklistString = "Ravinswod,Darko,Ethrz,wdanelno,Elefant,windid,Foster Kicks,Kale,Hobbes"
	var playlist = playlistString.split(',');
	var tracklist = tracklistString.split(',');

	var songTime = 0;

	//track
	var i = 0;

	var playing = false;

	//Audio
	var currentAudio = new Audio('../Content/Sounds/musicplayer/' + playlist[i]);

	//Play song
	function play() {
		$('.play').attr("src","../Content/Images/musicplayer/pause.png");
		//Listen to song to move scrubber along the slide
		currentAudio.addEventListener("timeupdate",function(){
			$('.seek').attr("value", parseInt(currentAudio.currentTime,10));//This line not working. It's supposed to move the slider along as the song progresses
			//$('.test').text(parseInt(currentAudio.currentTime,10));
		});

		//document.getElementById('#seek').value = parseInt(currentAudio.currentTime,10);

		currentAudio.play();

		$('.status').text("Playing: " + tracklist[i]);
		$('.seek').attr('max',parseInt(currentAudio.duration,10));
		playing = true;
		time();
	}

	//Bind the seek scrubber to audio
	$('.seek').bind("change",function() {
		currentAudio.currentTime = $(this).val();
		$('.seek').attr("max",currentAudio.duration);
	});

	//Bind volume bar to audio
	$('.volume').bind("change",function() {
		vol = $(this).val();
		currentAudio.volume = vol;
		//$('.test').text(currentAudio.volume);
	});

	function pause(){
		$('.play').attr("src","../Content/Images/musicplayer/play.png");
		currentAudio.pause();
		$('.status').text("Paused");	
		playing = false;	
	}

	//Play current track
	$('.play').on('click',function() {
		//currentAudio.play();
		//$('.status').text("Playing: " + tracklist[i]);
		if (playing){
			pause();
		}
		else{
			play();
		}
	});

	//Pause current track
	$('.pause').on('click',function() {
		//currentAudio.pause();
		//$('.status').text("Paused");
		pause();
	});

	//Previous track
	$('.prev').on('click',function() {
		currentAudio.pause();
		if(i == 0){
			i = playlist.length-1;
		}
		else {
			i--;
		}
		currentAudio = new Audio('../Content/Sounds/musicplayer/' + playlist[i]);
		//currentAudio.play();
		//$('.status').text("Playing: " + tracklist[i]);
		songTime = 0;
		play();
	});

	//Next track
	$('.next').on('click',function() {
		currentAudio.pause();
		if(i == playlist.length-1){
			i = 0;
		}
		else {
			i++;
		}
		currentAudio = new Audio('../Content/Sounds/musicplayer/' + playlist[i]);
		//currentAudio.play();
		//$('.status').text("Playing: " + tracklist[i]);
		songTime = 0;
		play();
	});

	//Mute track
	$('.mute').on('click',function() {
		if (currentAudio.muted == true) {
			currentAudio.muted = false;
			$('.mute').text("Mute");
		}
		else {
			currentAudio.muted = true;
			$('.mute').text("Unmute");
		}
	});

	function time(){
		setTimeout(function(){
			if(playing) {
				songTime++;
				$('.status').text("Playing: " + tracklist[i]);
				$('.time').text(" " + formatTime(currentAudio.currentTime) + " / " + formatTime(currentAudio.duration));
				time();
			}
		},100);
	};

	//Format time
	function formatTime(t) {
		var min = Math.floor(t/60);
		var sec = Math.floor(t%60);
		var timeM = "";
		var timeS = "";
		if(min < 10){
			timeM = "0" + min;
		}
		else {
			timeM = min;
		}
		if (sec < 10) {
			timeS = "0" + sec;
		}
		else{
			timeS = sec;
		}
		return timeM + ":" + timeS;
	}

});