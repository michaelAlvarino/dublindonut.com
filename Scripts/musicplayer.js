$(document).ready(function() {
	var playlistString = "ravinswod.mp3,darko.mp3,ethrz.mp3,wdanelno.mp3,elefant.mp3,windid.mp3,kale.mp3,hobbes.mp3";
	var tracklistString = "Ravinswod,Darko,Ethrz,wdaenlno,Elefant,windid,Kale,Hobbes"
	var playlist = playlistString.split(',');
	var tracklist = tracklistString.split(',');

	var i = 0;
	var currentAudio = new Audio('../Content/Sounds/musicplayer/' + playlist[i]);
	
	function play() {
		currentAudio.play();
		$('.status').text("Playing: " + tracklist[i]);
	}

	function pause(){
		currentAudio.pause();
		$('.status').text("Paused");		
	}

	//Play current track
	$('.play').on('click',function() {
		//currentAudio.play();
		//$('.status').text("Playing: " + tracklist[i]);
		play();
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
			i = 7;
		}
		else {
			i--;
		}
		currentAudio = new Audio('../Content/Sounds/musicplayer/' + playlist[i]);
		//currentAudio.play();
		//$('.status').text("Playing: " + tracklist[i]);
		play();
	});

	//Next track
	$('.next').on('click',function() {
		currentAudio.pause();
		if(i == 7){
			i = 0;
		}
		else {
			i++;
		}
		currentAudio = new Audio('../Content/Sounds/musicplayer/' + playlist[i]);
		//currentAudio.play();
		//$('.status').text("Playing: " + tracklist[i]);
		play();
	});

	//Mute track
	$('.mute').on('click',function() {
		if (currentAudio.muted == true) {
			currentAudio.muted = false;
			$('.status').text("WOLOLOLO");
		}
		else {
			currentAudio.muted = true;
			$('.status').text("Muted");
		}
	});


});