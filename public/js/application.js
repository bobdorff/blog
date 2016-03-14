$(document).ready(function() {
	$("#about").on('click', function(event) {
		event.preventDefault();
		var route = $(this).attr('href')
		var request = $.ajax({
			url: route, 
			method: "GET",
		});
	});
});
