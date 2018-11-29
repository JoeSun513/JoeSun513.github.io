$(document).ready(function() {
	$('#row1 .box').click(function() {
		$('#title-container').css('background-image', "url('assets/img/grass.jpg')");
		$('#body').css('background-color', '#66FF66');
	})

	$('#row2 .box').click(function() {
		$('#title-container').css('background-image', "url('assets/img/fire.jpg')");
		$('#body').css('background-color', '#FF4500');
	})

	$('#row3 .box').click(function() {
		$('#title-container').css('background-image', "url('assets/img/water.jpg')");
		$('#body').css('background-color', '#87CEFA');
	})

	$('#row4 .box').click(function() {
		$('#title-container').css('background-image', "url('assets/img/grass.jpg')");
		$('#body').css('background-color', '#66FF66');
	})
})