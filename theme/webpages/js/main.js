$(document).ready(function(){
    new WOW().init();

    $(window).on("load", headerFixed());
    $(window).on("scroll resize", headerFixed);
    function headerFixed(){
        if ($(window).scrollTop() >= 100) $("header").addClass("fixed");
        else $("header").removeClass("fixed");
    }
    $("header .menu").on("click", function(){
        $("body").addClass("overflowHide");
        $("header .navArea").addClass("active");
        $("header .navArea ~ .close").on("click", function(){
            $("body").removeClass("overflowHide");
            $("header .navArea").removeClass("active");
        });
    });
    $("footer .copy > span").text(new Date().getFullYear());

    
});

$(document).ready(function() {
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function lazyLoadImages() {
        $('img[data-src]').each(function() {
            if (isElementInViewport(this)) {
                var dataSrc = $(this).attr('data-src');
                if (dataSrc) $(this).attr('src', dataSrc).removeAttr('data-src');
            }
        });
    }
    $(window).on('scroll resize', lazyLoadImages);
    lazyLoadImages();
});
