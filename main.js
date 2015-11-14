$(document).ready(function() {
	d = document.createElement('div');
	var pathname = window.location.pathname;
	var username = pathname.split("/")[2]
	var time = new Date();
	var hour = time.getHours();
	var base_url;
	if (hour < 12) {
		base_url = "https://arcane-citadel-3126.herokuapp.com/";
	} else {
		base_url = "https://limitless-beyond-9731.herokuapp.com/";
	}
	$(d).appendTo($(".profile_header_bg"))
		.addClass("reputation");
	$.get(base_url + username, function(data) {
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