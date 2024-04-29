function viewport(){
    var window_height = $(window).height();
    var scroll = $(window).scrollTop();
    var window_bottom = window_height + scroll;
    
    $(".lazy").each(function(){
        var animate_height = $(this).height();
        var animate_top = $(this).offset().top;
        var animate_bottom = animate_height + animate_top;
    
        if(animate_top <= window_bottom && animate_bottom >= scroll){
            var data = $(this).attr("data-src");
            $(this).attr("src", data);
            $(this).removeAttr("data-src");
            //$(this).addClass("active");
        }
    });
}
$(window).on("load scroll resize", viewport);
setInterval(viewport, 100);