$(document).ready(function(){
	//Hide features
	$('.music-feature').hide();
	$('.fitness-feature').hide();
	$('.pug-feature').hide();
	$('.reading-feature').hide();
	var musicHidden = true;
	var fitnessHidden = true;
	var pugHidden = true;
	var readingHidden = true;

	$('.nextSlide').on('click',function() {

		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next();

		var currentDot = $('.active-dot');
		var nextDot = currentDot.next();

		if(nextSlide.length === 0) {
      		nextSlide = $('.slide').first();
    	}

		if(nextDot.length === 0) {
			nextDot = $('.dot').first();
		}

		currentSlide.fadeOut(500).removeClass('active-slide');
		nextSlide.fadeIn(500).addClass('active-slide');

		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');
	
	});

	$('.prevSlide').on('click',function(){

		var currentSlide = $('.active-slide');
		var prevSlide = currentSlide.prev();

		var currentDot = $('.active-dot');
		var prevDot = currentDot.prev();

		if(prevSlide.length === 0) {
      		prevSlide = $('.slide').last();
    	}

		if(prevDot.length === 0) {
			prevDot = $('.dot').last();
		}

		currentSlide.fadeOut(500).removeClass('active-slide');
		prevSlide.fadeIn(500).addClass('active-slide');

		currentDot.removeClass('active-dot');
		prevDot.addClass('active-dot');
		
	})

	//music-feature hide/show
	$('.music-feature-clicker').on('click',function(){
		if(musicHidden){
			$('.music-feature').fadeIn(500).show();
			musicHidden = false;
		}
		else {
			$('.music-feature').fadeOut(500).hide();
			musicHidden = true;
		}
	});

	//fitness-feature hide/show
	$('.fitness-feature-clicker').on('click',function(){
		if(fitnessHidden){
			$('.fitness-feature').fadeIn(500).show();
			fitnessHidden = false;
		}
		else {
			$('.fitness-feature').fadeOut(500).hide();
			fitnessHidden = true;
		}
	});

	//pug-feature hide/show
	$('.pug-feature-clicker').on('click',function(){
		if(pugHidden){
			$('.pug-feature').fadeIn(500).show();
			pugHidden = false;
		}
		else {
			$('.pug-feature').fadeOut(500).hide();
			pugHidden = true;
		}
	});

	//reading-feature hide/show
	$('.reading-feature-clicker').on('click',function(){
		if(readingHidden){
			$('.reading-feature').fadeIn(500).show();
			readingHidden = false;
		}
		else {
			$('.reading-feature').fadeOut(500).hide();
			readingHidden = true;
		}
	});



})