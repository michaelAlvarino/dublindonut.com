$(document).ready(function(){


	$('.nextSlide').on('click',function() {

		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next();


		if(nextSlide.length === 0) {
      		nextSlide = $('.slide').first();
    	}

		currentSlide.fadeOut(500).removeClass('active-slide');
		nextSlide.fadeIn(500).addClass('active-slide');
	
	});

	$('.prevSlide').on('click',function(){

		var currentSlide = $('.active-slide');
		var prevSlide = currentSlide.prev();


		if(prevSlide.length === 0) {
      		prevSlide = $('.slide').last();
    	}

		currentSlide.fadeOut(500).removeClass('active-slide');
		prevSlide.fadeIn(500).addClass('active-slide');


	})


})