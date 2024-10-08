function lazyloadimage(){
    var window_height = $(window).height();
    var scroll = $(window).scrollTop();
    var window_bottom = window_height + scroll;
    
    $(".projects-list .item img").each(function(){
        var animate_height = $(this).height();
        var animate_top = $(this).offset().top;
        var animate_bottom = animate_height + animate_top;
    
        if(animate_top <= window_bottom && animate_bottom >= scroll){
            // for img tag
            var srcValue = $(this).attr("data-src");
            //console.log(srcValue);
            $(this).attr("src", srcValue);
            $(this).removeAttr("data-src");

            // for style
            var styleValue = $(this).attr("data-style");
            //console.log(styleValue);
            $(this).attr("style", styleValue);
            $(this).removeAttr("data-style");
        }
    });
}
$(window).on("load scroll resize", lazyloadimage);