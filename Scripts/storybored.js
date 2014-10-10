var main = function(){
	$('.btn').click(function() {
		var post = $('.status-box').val();
		$('<li>').text(post).prependTo('.posts');
		//document.getElementById('id').innerHTML = '<li> #{post}</li>';
		$('.status-box').val("");
    	$('.counter').text('500');
    	$('.btn').addClass('disabled');
		alert("clicked");
		
		// add ajax
		$.ajax({type: "POST",url: "../Views/poemInfo.php", success:function(){alert("Sent");});
	});

	$('.status-box').keyup(function() {
		var postLength = $(this).val().length;
		var charactersLeft = 500 - postLength;
		$('.counter').text(charactersLeft);

	if(charactersLeft < 0){
		$('.btn').addClass('disabled');
	}
	else if(charactersLeft == 500){
		$('.btn').addClass('disabled');
	}
	else {
		$('.btn').removeClass('disabled');
	}

	});
	$('.btn').addClass('disabled');
}

$(document).ready(main);