function getLocation(){
	if (navigator.geolocation) {
    	navigator.geolocation.getCurrentPosition(showPosition);
	} else {
    	$('.demo').text("Geolocation is not supported by this browser.");
	}
}

function showPosition(position){
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;

/*
	$('.demo').text(lat + "," + lng);

	var img_url = "http://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lng + "&zoom=14&size=400x300&sensor=false";

    $('#map-canvas').html("<img src='"+img_url+"'>");

	$('#map-canvas').height('250px');
	$('#map-canvas').width('500px');
*/

	var latlng = new google.maps.LatLng(lat,lng);

	var mapOptions = {
	    center: latlng,
	    zoom: 14,
	    mapTypeId: google.maps.MapTypeId.ROADMAP,
	    mapTypeControl: false,
	    navigationControlOptions: {
	    	style: google.maps.NavigationControlStyle.SMALL
	    }
    };

    

    var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

	var markerOptions = {
	    	position: latlng,
	    	map: map,
	    	title: "You are here lol"
	};
	
    var marker = new google.maps.Marker(markerOptions);

    // google.maps.event.addDomListener(window, 'load', initialize);
}