$(document).ready(function() {
	var $recipeName = $("#recipeName");
	var $methodHeading = $("#methodHeading");
	var $ingredientsHeading = $("#ingredientsHeading");
	var $methodImgs = $(".methodTableData");
	var $methodText = $(".methodStepText");

	var $fadeInTime = 5000;
	var $imgFadeInTime = 7000;
	
	var $addShadow = function() {
		$(this).addClass("headingShadow");
	};

	$($recipeName).hide().fadeIn($fadeInTime, $addShadow);
	$($methodHeading).hide().fadeIn($fadeInTime, $addShadow);
	$($ingredientsHeading).hide().fadeIn($fadeInTime, $addShadow);
	$($methodImgs).hide().fadeIn($imgFadeInTime);
});