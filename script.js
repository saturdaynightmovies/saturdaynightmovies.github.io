$(document).ready(function() {

	var music = document.createElement('audio');
	var song;
	$('.controls').click(function() {
		var but = $(this);

		if (music.paused) {
			song = but.attr('song');
			music.setAttribute('src',song)
			music.play();
			$('.controls').removeClass('pause');
			$('.controls').addClass('play');
			but.removeClass('play');
			but.addClass('pause');
		} else {
			music.pause();
			$('.controls').removeClass('pause');
			$('.controls').addClass('play');
		}

	})
	
	
	var duration;
	music.addEventListener("timeupdate", timeUpdate, false);
 
	function timeUpdate() {
		var playPercent = 100 * (music.currentTime / duration);
		playhead.style.marginLeft = playPercent + "%";
	}
 
	// Gets audio file duration
	music.addEventListener("canplaythrough", function () {
		duration = music.duration;
	}, false);
	
	
})