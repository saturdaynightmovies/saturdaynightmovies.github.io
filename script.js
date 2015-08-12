$(document).ready(function() {
	var music = new Audio('09 We Made You.mp3');
	
	$('.pause').hide();
	
	$('.play').click(function() {
		music.play();
		$('img ~ img').show();
		$(this).hide();
	})
	
	$('.pause').click(function() {
		music.pause();
		$('.play').show();
		$('.pause').hide();
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