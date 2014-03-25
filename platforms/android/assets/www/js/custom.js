(function ($, window, document, undefined_) {
	$.fn.j360 = function () {
		"use strict";
		var $imgs, $product, clicked, currImg, currPos, imageTotal, lastImg, widthStep;
		$product = this;
		$imgs = $product.find("img");
		imageTotal = $imgs.length - 1;
		clicked = false;
		widthStep = 15;
		currPos = void 0;
		currImg = 0;
		lastImg = 0;

		$product
			.delay(300)
			.animate({
				opacity: 1
			});
		if ($imgs.length > 1) {
			$imgs.bind("mousedown", function (e) {
				e.preventDefault();
			}).filter(":gt(0)").addClass("notseen");
			$imgs.bind("mousedown touchstart", function (e) {
				if (e.type === "touchstart") {
					currPos = window.event.touches[0].pageX;
				} else {
					currPos = e.pageX;
				}
				clicked = true;
				return false;
			}).bind("mouseup touchend", function () {
				clicked = false;
			}).bind("mousemove touchmove", function (e) {
				var pageX;
				if (clicked) {
					pageX = void 0;
					if (e.type === "touchmove") {
						pageX = window.event.targetTouches[0].pageX;
					} else {
						pageX = e.pageX;
					}
					widthStep = 15;
					if (Math.abs(currPos - pageX) >= widthStep) {
						if (currPos - pageX >= widthStep) {
							currImg++;
							if (currImg > imageTotal) {
								currImg = 0;
							}
						} else {
							currImg--;
							if (currImg < 0) {
								currImg = imageTotal;
							}
						}
						currPos = pageX;
						$imgs.eq(lastImg).addClass("notseen");
						$imgs.eq(currImg).removeClass("notseen");
						lastImg = currImg;
					}
				}
			});
		}
	};
})(jQuery, window, document);