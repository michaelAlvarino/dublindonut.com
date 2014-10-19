var playlistString = "ravinswod.mp3,darko.mp3,ethrz.mp3,wdanelno.mp3,elefant.mp3,windid.mp3,fosterkicks.mp3,kale.mp3,hobbes.mp3";
var tracklistString = "Ravinswod,Darko,Ethrz,wdanelno,Elefant,windid,Foster Kicks,Kale,Hobbes"
var playlist = playlistString.split(',');
var tracklist = tracklistString.split(',');

//track
var i = 0;

//Is track playing?
var playing = false;

//Is playlist showing or hidden?
var hidden = false;

//Audio
var currentAudio = new Audio('Content/Sounds/musicplayer/' + playlist[i]);

//audioscrubber controls
function audioScrubber(){
		
	//Listen to song to move scrubber along the slide
	currentAudio.addEventListener("timeupdate",function(){
		$('.seek').attr('value', parseInt(currentAudio.currentTime,10));//This line not working. It's supposed to move the slider along as the song progresses
		$('.seek').attr("max",currentAudio.duration);
	});

	//Bind the seek scrubber to audio
	$('.seek').bind("change",function() {
		currentAudio.currentTime = $(this).val();
		$('.seek').attr("max",currentAudio.duration);
		$('.test').text("scrubbed: " + scrubbed);
	});
};

function createPlaylist(){
	for(k = 0; k < playlist.length; k++){
		$('.playlist-list').append("<li id='track" + k + "'><a href='javascript:playSelected("+ k +")'>" + tracklist[k] +"</a></li>");
	}
};

function playSelected(track){
	currentAudio.pause();
	currentAudio = new Audio('Content/Sounds/musicplayer/' + playlist[track]);
	i = track;
	playTrack();
};

//Play song
function playTrack() {
<<<<<<< HEAD
<<<<<<< HEAD
	$('.play').attr("src","../Content/Images/musicplayer/pause.png");
=======
	//playSelected();
	$('.play').attr("src","Content/Images/musicplayer/pause.png");
>>>>>>> origin/master
=======
	//playSelected();
	$('.play').attr("src","Content/Images/musicplayer/pause.png");
>>>>>>> origin/master
	audioScrubber();
		
	//Bind volume bar to audio
	$('.volume').bind("change",function() {
		vol = $(this).val();
		currentAudio.volume = vol;
	});

	currentAudio.pause();
	currentAudio.play();

	$('.status').text("Playing: " + tracklist[i]);
	$('.seek').attr('max',parseInt(currentAudio.duration,10));
	playing = true;
	timeUpdate();

	currentAudio.addEventListener("ended",function(){
		nextTrack();
	});
};

//Pause audio
function pauseTrack(){
	$('.play').attr("src","Content/Images/musicplayer/play.png");
	currentAudio.pause();
	$('.status').text("Paused");	
	playing = false;
};

//Previous track
function prevTrack(){
	currentAudio.pause();
	if(i == 0){
		i = playlist.length-1;
	}
	else {
		i--;
	}
	currentAudio = new Audio('Content/Sounds/musicplayer/' + playlist[i]);
	playTrack();
};

//Next track
function nextTrack(){
	currentAudio.pause();
	if(i == playlist.length-1){
		i = 0;
	}
	else {
		i++;
	}
	currentAudio = new Audio('Content/Sounds/musicplayer/' + playlist[i]);
	playTrack();
};

function timeUpdate(){
	setTimeout(function(){
		if(playing) {
			$('.status').text("Playing: " + tracklist[i]);
			$('.time').text(" " + formatTime(currentAudio.currentTime) + " / " + formatTime(currentAudio.duration));
			timeUpdate();
		}
	},100);
};

//Format time
function formatTime(t) {
	var min = Math.floor(t/60);
	var sec = Math.floor(t%60);
	var timeM = (min < 10) ? "0" + min : min;
	var timeS = (sec < 10) ? "0" + sec : sec;
	return timeM + ":" + timeS;
};

function main(){
	createPlaylist();
	$('.playlist-list').hide();
	
	//Play current track
	$('.play').on('click',function() {
		if (playing){
			pauseTrack();
		}
		else{
			playTrack();
		}
	});

	//Previous track
	$('.prev').on('click',function() {
		prevTrack();
	});

	//Next track
	$('.next').on('click',function() {
		nextTrack();
	});

	//Mute track
	$('.mute').on('click',function() {
		$('.playlist-list').show();
		if (currentAudio.muted == true) {
			currentAudio.muted = false;
			$('.mute').attr("src","Content/Images/musicplayer/volume.png");
		}
		else {
			currentAudio.muted = true;
			$('.mute').attr("src","Content/Images/musicplayer/volume-mute.png");
		}
	});

	$('.playlist-click').on('click',function(){
		if(hidden){
			$('.playlist-list').show().toggle(300);
			hidden = false;
		}
		else{
			$('.playlist-list').hide().toggle(300);
			hidden = true;
		}
	});

}

$(document).ready(main);