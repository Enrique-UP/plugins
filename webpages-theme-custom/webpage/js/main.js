$(document).ready(function(){
    new WOW().init();
    $(".slider").owlCarousel({
        autoplay:true,
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        items:1
    });
    $(".about .left .aboutSlider, .about .tSlider").owlCarousel({
        autoplay:true,
        loop:true,
        margin:0,
        nav:true,
        navText: ["<i class='icon'> &#xa004;","<i class='icon'> &#xa005;"],
        dots:false,
        items:1
    });
    $(".media .videoSlider").owlCarousel({
        autoplay:true,
        loop:true,
        margin:32,
        nav:true,
        items:3,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            461:{
                items:2,
                margin:12
            },
            768:{
                items:3
            }
        }
    });
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

function lazyloadimage(){
    var window_height = $(window).height();
    var scroll = $(window).scrollTop();
    var window_bottom = window_height + scroll;
    
    $("img[data-src], [data-style]").each(function(){
        var animate_height = $(this).height();
        var animate_top = $(this).offset().top;
        var animate_bottom = animate_height + animate_top;
    
        if(animate_top <= window_bottom && animate_bottom >= scroll){
            var srcValue = $(this).attr("data-src");
            $(this).attr("src", srcValue);
            $(this).removeAttr("data-src");

            var styleValue = $(this).attr("data-style");
            $(this).attr("style", styleValue);
            $(this).removeAttr("data-style");
        }
    });
}
$(window).on("load scroll resize", lazyloadimage);