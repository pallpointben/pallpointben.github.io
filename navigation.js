function navigate(section) {

	// update heading

	$(".heading").css("text-decoration", "none");
	$(section + "-heading").css("text-decoration", "underline");

	// update content

	$(".hidden-content").animate({opacity:0}, 300, function() {
		$(".hidden-content").css("display", "none");
		$(section).css("display", "block").animate({opacity:1}, 300);
	})
}