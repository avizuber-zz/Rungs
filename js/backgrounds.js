$( document ).ready(function() {
	var now = new Date();
	var hrs = 23-now.getHours();

	if (hrs < 4 || hrs > 20) {
		var images = ['night-citystreet.jpg','night-street.jpg','night-barn.jpg','night-lamp.jpg','night-square.jpg'];
	} else if (hrs > 7 && hrs < 17) {
		var images = ['midday-mountains.jpg', 'midday-clouds.jpg', 'midday-tracks.jpg', 'midday-snowymountains.jpg'];
	} else {
		var images = ['sunchange-shops.jpg','sunchange-citystreet.jpg','sunchange-field.jpg','sunchange-mountain.jpg','sunchange-pier.jpg'];
	}

	console.log(hrs);

	$('html').css({'background-image': 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
});