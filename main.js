$(document).ready(function() {
	d = document.createElement('div');
	var pathname = window.location.pathname;
	var username = pathname.split("/")[2]

	$(d).appendTo($(".profile_header_bg"))
		.addClass("reputation");
	$.get("http://192.168.1.132:5000/" + username, function(data) {
		console.log(data)
		var result1 = data["result1"];
		var result2 = data["result2"];
		var rating;
		if (!result1 && !result2) {
			rating = "<span id=\"safe\">Safe</span>";
		}
		if (result1 || result2) {
			rating = "<span id=\"moderate\">Moderate</span";
		}
		if (result1 && result2) {
			rating = "<span id=\"unsafe\">Unsafe</span>";
		}
		$(".reputation").append("<p id=\"Rating\">Risk Level: " + rating + "</p>")

		$.get("http://steamrep.com/search?q=" + username, function(data) {
			var page = $(data);
			var reptags = page.find("#reptags");
			$(".reputation").append("<div id=\"SteamRep\">SteamRep: </div>")
			$("#SteamRep").append(reptags)
		});
	});
})