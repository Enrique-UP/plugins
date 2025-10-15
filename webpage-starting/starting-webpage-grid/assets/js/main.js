$(function () {
    function navScroll(){
        $("header menu:not(menu menu)").each(function(){
            $(this).animate({scrollTop:(0)}, 500);
        });
    }
    $("header .menu").click(function(){
        $("body").addClass("back");
        $("header").addClass("active");
    });
    $("header .close").on("click", function(){
        navScroll();
        setTimeout(() => $("body").removeClass("back"), 400);
        $("header").removeClass("active");
    });
});




$(function () {
    new WOW().init();

    const copyRight = $("footer .copy");
    if (copyRight) {
        const currentContent = copyRight.html() || "";
        const updatedContent = currentContent.replace("©", "© " + new Date().getFullYear());
        copyRight.html(updatedContent);
    }
});




$(function () {
    function checkScroll() {
        if ($(window).scrollTop() >= 25) $("header, .scrollTop").addClass("fixed");
        else $("header, .scrollTop").removeClass("fixed");
    }
    $(window).on("load", checkScroll());
    $(window).on("scroll", checkScroll);
    $(window).on("resize", checkScroll);
    $(".scrollTop").click(() => $("html, body").animate({scrollTop:(0)}, 500));
});
