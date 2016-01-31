function navigate(section) {

	// update heading

	$(".heading").css("text-decoration", "none");
	$(section + "-heading").css("text-decoration", "underline");

	// update content

	$(".hidden-content").animate({opacity:0}, 600, function() {
		$(".hidden-content").css("display", "none");
		$(section).css("display", "block").animate({opacity:1}, 600);
	})
}

function blur(element) {
	$(element).css("filter","blur(5px)").css("-webkit-filter", "blur(5px)");
}

function unblur(element) {
	$(element).css("filter","blur(0)").css("-webkit-filter", "blur(0)");
}