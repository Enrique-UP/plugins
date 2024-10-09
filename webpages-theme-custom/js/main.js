$(document).ready(function(){
    new WOW().init();

    $(window).on("load scroll resize", function(){
        var scroll = $(window).scrollTop();
        if (scroll >= 100) $("header").addClass("fixed");
        else $("header").removeClass("fixed");
    });
    $("header nav ul > li > a").click(function(){
        $("header nav ul > li > a").removeClass("active");
        $(this).addClass("active");
        var top = $($(this).attr("href")).offset().top;
        $("html, body").animate({ scrollTop: top - 100 }, "fast");
    });

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

$(window).on("load scroll resize", function(){
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
});


(function(){
    var $p = $(".about .txtArea p");
    var $span = $(".about .txtArea p > span");
    var $a = $(".about .txtArea p > i");

    // create duplicate div for the text copy & created array of li
    var $div = $("<div></div>").addClass("content");
    $(".about").append($div);
    var $uList = $("<ul></ul>");
    $(".about .content").append($uList);
    $(".about .content").hide();

    var orgText = [];
    var dupText = [];
    var textActive = [];

    $a.each(function(i){
        var $this = $(this);
        var $prevSibling = $this.prev();
        var originalText = $prevSibling.text();
        orgText.push(originalText);

        $prevSibling.text(originalText.slice(0, 100));
        var slicingText = $prevSibling.text();
        dupText.push(slicingText);

        $this.on("click", function(){
            // ============================================================================== //
            var text = "<li>" + $prevSibling.text() + "</li>";
            var $ul = $(".about .content > ul");
            $ul.append(text);

            var liLength = $ul.children().length;
            if (liLength >= 2) {
                var decLength = liLength - 2;
                var htmls = $ul.children().eq(decLength).html();
            }
            // ============================================================================== //
            if ($this.hasClass("active")) {
                $this.text("+").removeClass("active");
                $prevSibling.text(dupText[i]);
            } else {
                var $active = $(".about .txtArea p > i.active");
                $active.each(function(){
                    $(this).text("+").removeClass("active");
                    $(this).prev().text(htmls);
                });

                $this.text("-").addClass("active");
                $prevSibling.text(orgText[i]);
            }
        });
    });
})();

function isInViewport(element) {
    const buffer = 50;
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight - buffer && rect.bottom >= buffer;
}
function animateNumber($box) {
    const speed = 40;
    const counterData = $box.data("value");
    let current = 0;
    const $spanTag = $box.find("span");
    const $iTag = $box.find("i");

    const interval = setInterval(() => {
        current++;
        $iTag.html(current + "+");
        if ($box.has($spanTag).length) {
            // $spanTag.html(current + "%");
            // $spanTag.css("--width", current + "%");
            $spanTag.css("--width", counterData + "%");
        }
        if (current >= counterData) {
            clearInterval(interval);
        }
    }, speed);
}
(function(events, handler) {
    events.forEach(event => $(window).on(event, handler));
})(["load", "scroll", "resize"], function(){
    const $boxes = $(".counter");
    $boxes.each(function() {
        const $box = $(this);
        if (isInViewport($box[0]) && !$box.attr("data-animated")) {
            animateNumber($box);
            $box.attr("data-animated", "true");
        }
    });
});
