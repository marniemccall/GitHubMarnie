

var instagramClientId = 'b9d691f117e8402d9bac3829d5ef97be';

$(document).ready(function() {
	var mapContainer = $('#map-container')[0];
	var centreOfToronto = new google.maps.LatLng(43.7, -79.4);
	var instaMap = new google.maps.Map(mapContainer, {
		zoom: 12,
		center: centreOfToronto,
	});
	var openPhotoWindow = false;

	google.maps.event.addListener(instaMap, 'click', function(event) {
		console.log(event);
		searchPhotos(event.latLng);
	});

	console.log('document is ready');
	searchPhotos(centreOfToronto);

	function searchPhotos(location) {	
		$.ajax({
			type: 'GET',
			dataType: 'jsonp',
			url: 'https://api.instagram.com/v1/media/search?client_id=' 
				+ instagramClientId 
				+ '&lat=' + location.lat()
				+ '&lng=' + location.lng(),
			success: function(response) {
				response.data.forEach(function(photo) {
					console.log(photo.location);		
					

					var photoMarker = new google.maps.Marker({
						position: new google.maps.LatLng(photo.location.latitude, photo.location.longitude),
						map: instaMap,
					});
					

					var photoWindowContent = '';
					photoWindowContent += '<div>'
					photoWindowContent += '<p> Profile Picture: </p>';
					photoWindowContent += '<img class="profile-pic" src="' + photo.user.profile_picture + '">';
					photoWindowContent += '</div>'
					photoWindowContent += '<p> Instagram Picture: </p>';
					photoWindowContent += '<img class="insta-pic" src="' + photo.images.low_resolution.url + '">';
					if (photo.location.name) {
						photoWindowContent += '<p> Location: ' + photo.location.name + '</p>';
					}
					photoWindowContent += '<p> Likes: ' + photo.likes.count + '</p>';
					var photoWindow = new google.maps.InfoWindow({
						content: photoWindowContent,
					});

					google.maps.event.addListener(photoMarker, 'click', function(event) {
						console.log(event);
						if (openPhotoWindow) {
							openPhotoWindow.close();
						}
						photoWindow.open(instaMap, photoMarker);
						instaMap.setCenter(event.latLng);
						openPhotoWindow = photoWindow;
						}
					);
				});
			},
		});
	}
});
