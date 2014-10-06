var main = function() {
		$('.slideshow').cycle({
		fx: 'scrollLeft',
		timeout: 4000
	});
}

$(document).ready(main);