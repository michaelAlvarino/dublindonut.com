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
	console.log(data);
	console.log(url);
	console.log(type);

	// do ajax
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response){
			console.log(response);
			$("[name=poem]").val('');
			
	});

	// return false disables the php action on the button click
	return false;
	// is ajax just a big hack?
});