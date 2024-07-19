$(document).ready(function(){

    $("main .fw").parent().addClass("fwp");
    /* ======================================= */

    $("header .menu").click(showNav);
    $("header .mobHead .icon").click(hideNav);
    
    $("header .navigation").click(hideNav);
    $("header .navBar").click((e) => e.stopPropagation());

    function showNav(){
        $("body").css("overflow", "hidden");
        $("header .navigation").fadeIn().addClass("active");
        setTimeout(() => {
            $("header .navBar").css("left", "0");
        }, 300);
    }    
    function hideNav(){
        $("body").removeAttr("style");
        $("header .navBar").css("left", "-100%");
        setTimeout(() => {
            $("header .navigation").fadeOut().removeClass("active");
            $("header .navBar").removeAttr("style");
        }, 300);
    }
    /* ======================================= */

    $(".copy > span").html(new Date().getFullYear());

});
