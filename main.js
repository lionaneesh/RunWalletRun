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
			$(".reputation").append("<p id=\"naive\">Is a scammer? (using Naive Bayes) : " + result1 + "</p>")
			$(".reputation").append("<p id=\"tradeban\">Is a scammer? (using Random Forest) : " + result2 + "</p>")
		});
})