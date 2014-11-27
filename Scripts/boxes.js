var main = function(){

	function getRandomColor() {
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '#';
	    	for (var i = 0; i < 6; i++ ) {
	        	color += letters[Math.floor(Math.random() * 16)];
	    	}
	    return color;
	};

	$('.box').on("click", function() {
		$(this).css('background-color',getRandomColor());
	});

	$('.box').on("mouseenter", function() {
		$(this).css('box-shadow',"#d3d3d3 0 0 10px");
	});

	$('.box').on("mouseleave", function() {
		$(this).css('box-shadow',"#d3d3d3 0 0 0px");
	});
}

$(document).ready(main);