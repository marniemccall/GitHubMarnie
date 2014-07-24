var instagramUrl = '';
var loading = false;

function successCallback(response) {
	var photosElement = document.getElementById('photos');
	console.log(response);
	response.data.forEach(function(photo) {
		var html = '';
		html += '<a class="col-md-3 photo" href="' + photo.link + '">';
		html += '<img src="';
		html += photo.images.standard_resolution.url;
		html += '">';
		//html += '<p>' + photo.caption.text + '</p>'
		html += '<img class="profile-pic" src="';
		html += photo.user.profile_picture;
		html += '">';
		html += '</a>';
		html += '<p>' + photo.likes.count + '</p>';
		photosElement.innerHTML += html;
	});

	instagramUrl = response.pagination.next_url;
	loading = false;
}

$(document).ready(function() {
	instagramUrl = 'https://api.instagram.com/v1/tags/fit/media/recent?client_id=0d9085d9f9c249faa9abc68f8b2e8ed5';
	$('#next-page').click(function() {
		if (loading) return;
		loading = true;

		var options = {
			type: 'GET',
			dataType: 'jsonp',
			url: instagramUrl,
			success: successCallback,
		}

		$.ajax(options);

		return false;
	});
	$('#next-page').trigger('click');
});

$(window).scroll(function() {
	var windowY = window.innerHeight + document.body.scrollTop;
	var contentY = $('#photos').height() + $('#photos').offset().top;
	var threshold = 100;
	if (windowY > contentY - threshold) {
		$('#next-page').trigger('click');
	}
});