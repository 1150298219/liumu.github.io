$(document).ready(function() {
    var sliderIndex = 0;
    var sliderItems = $(".slider-item");
    var sliderInterval = setInterval(sliderLoop, 5000);

    function sliderLoop() {
        sliderIndex++;
        if (sliderIndex >= sliderItems.length) {
            sliderIndex = 0;
        }
        sliderItems.removeClass("active");
        sliderItems.eq(sliderIndex).addClass("active");
    }

    $(".slider").hover(function() {
        clearInterval(sliderInterval);
    }, function() {
        sliderInterval = setInterval(sliderLoop, 5000);
    });
});
