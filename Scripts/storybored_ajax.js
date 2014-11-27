// ajaxy part
$('form.ajax').on('submit', function(){

	// create variables
	var url 		= $(this).attr('action');
	var type 		= $(this).attr('method');

	// get the poem
	var data 		= {};
	$(this).find("[name=poem]").each(function(index, value){
		var name 	= 'poem';
		var poem 	= $("[name=poem]").val();
		data[name]	=poem;
	})
	
	// testing 
	// console.log('clicked');
	/*console.log(data);
	console.log(url);
	console.log(type);
	*/
	// do ajax
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response){
			console.log(response);

			var post = $('.status-box').val();
			$('<li>').text(post).prependTo('.posts');
			$('.status-box').val("");
	    	$('.counter').text('500');
	    	$('.btn').addClass('disabled');

			$("[name=poem]").val('');


		}
			
	});

	// return false disables the php action on the button click
	return false;
	// is ajax just a big hack?
});

var main = function(){
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
}
$(document).ready(main);