(function ($, window, document, undefined) {
    $.fn.j360 = function () {
        "use strict";
        var $product = this,
            $imgs = $product.find('img'),
            imageTotal = $imgs.length - 1,
            clicked = false,
            widthStep = 4,
            currPos,
            currImg = 0,
            lastImg = 0;

        $imgs.bind('mousedown', function (e) {
            e.preventDefault(); // prevent dragging images
        });

        $imgs.filter(':gt(0)').addClass('notseen');


        $product.bind('mousedown touchstart', function (e) {
            if (e.type === "touchstart") {
                currPos = window.event.touches[0].pageX;
            } else {
                currPos = e.pageX;
            }
            clicked = true;
            return false;
        });


        $(document).bind('mouseup touchend', function () {
            clicked = false;
        });


        $(document).bind('mousemove touchmove', function (e) {
            if (clicked) {
                var pageX;
                if (e.type == "touchmove") {
                    pageX = window.event.targetTouches[0].pageX;
                } else {
                    pageX = e.pageX;
                }
                widthStep = 4;
                if (Math.abs(currPos - pageX) >= widthStep) {
                    if (currPos - pageX >= widthStep) {
                        currImg++;
                        if (currImg > imageTotal) {
                            currImg = 1;
                        }
                    } else {
                        currImg--;
                        if (currImg < 1) {
                            currImg = imageTotal;
                        }
                    }
                    currPos = pageX;
                    $imgs.eq(lastImg).addClass('notseen');
                    $imgs.eq(currImg).removeClass('notseen');
                    lastImg = currImg;

                }
            }
        });


    };

})(jQuery, window, document);