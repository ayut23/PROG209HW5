$(document).ready(function() {
	// Set up navigation
	$("nav a").on("click", function(event) {
		event.preventDefault();
		var target = $(this).attr("href");
		$("main > section").hide();
		$(target).show();
		window.location.hash = target;
	});

	// Input Data
	$("#submit").click(function() {
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();

		var data = {
			name: name,
			email: email,
			message: message
		};
		
		localStorage.setItem(Date.now(), JSON.stringify(data));
	});

	// Display Data
	$(window).on("hashchange", function() {
		var hash = window.location.hash.substring(1);
		if (hash == "display") {
			$("#messages").empty();
			for (var i = 0; i < localStorage.length; i++) {
				var key = localStorage.key(i);
				var data = JSON.parse(localStorage.getItem(key));

				var message = "<li><strong>" + data.name + "</strong><br>" + data.email + "<br>" + data.message + "</li>";
				$("#messages").append(message);
			}
		}
	});
	
});
