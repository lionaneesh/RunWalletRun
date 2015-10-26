$(document).ready(function() {
		d = document.createElement('div');
		var pathname = window.location.pathname;
		var username = pathname.split("/")[2]

		$(d).appendTo($(".profile_header_bg"))
			.addClass("reputation");
		$.get("http://steamrep.com/search?q=" + username, function(data) {
			console.log(data)
			var page = $(data)
			var membersince = page.find("#membersince").text()
			var tradeban = page.find("#tradebanstatus").text()
			$(".reputation").append("<p id=\"membersince\">MemberSince: " + membersince + "</p>")
			$(".reputation").append("<p id=\"tradeban\">TradeBan: " + tradeban + "</p>")
			$(".reputation").append(page.find("#reptags"))
		});
})