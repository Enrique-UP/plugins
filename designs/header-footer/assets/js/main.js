$(document).ready(function(){
    $("main .fw").parent().addClass("fwp");
    $(".row [class*=col-] [class*=col-]").closest("[class*=col-]").css("margin-bottom", 0);

    $("header .menu").click(function(){
        $("header .navBar").addClass("active");
    });
    $("header .navBar .close").click(function(){
        $("header .navBar").removeClass("active");
    });

    $(".copyright span").text(new Date().getFullYear());
});