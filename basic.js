$(document).ready(function() {

	$("p").hide();
	$("#topPicture").hide();

	$("h1").click(function() {

		$(this).next().fadeToggle(1000);

	});

}); 