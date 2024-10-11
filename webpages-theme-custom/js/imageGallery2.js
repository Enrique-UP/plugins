$(".press .slidesArea > li > img").on("click", slidesShow);
function slidesShow(){
    $(".press .slidesShow").addClass("active");
    var imgSrc = $(this).attr("src");
    $(".press .slidesShow img").attr("src", imgSrc);
    $(this).parent().addClass("current");

    $(".press .slidesShow > i.prev").show();
    $(".press .slidesShow > i.next").show();

    $(this).closest(".slidesArea").find("img").each(function(){
        if ($(this).attr("data-src")) {
            $(this).attr("src", $(this).attr("data-src"));
            $(this).removeAttr("data-src");
        }
    });
};

$(".press .slidesShow > i.prev").on("click", prev);
function prev(){
    $(".press .slidesArea > li.current").each(function(){
        $(this).prev().addClass("current").children("img").attr("src");
        var prev = $(this).prev().addClass("current").children("img").attr("src");
        $(this).removeClass("current");
        $(".press .slidesShow img").attr("src", prev);
    });
}

$(".press .slidesShow > i.next").on("click", next);
function next(){
    $(".press .slidesArea > li.current").each(function(){
        $(this).next().addClass("current").children("img").attr("src");
        var next = $(this).next().addClass("current").children("img").attr("src");
        $(this).removeClass("current");
        $(".press .slidesShow img").attr("src", next);                
    });
}

$(".press .slidesShow > b").on("click", slide_remove);
function slide_remove(){
    $(this).closest(".press .slidesShow").removeClass("active");
    $(this).siblings("img").removeAttr("src");
    $(".press .slidesArea > li").removeClass("current");
};

$(".press .slidesShow > i.prev").on("click", function(){
    $(".press .slidesShow > i.next").show();
    $('.press .slidesArea').find('li:first-child.current').each(function(){
        $(".press .slidesShow > i.prev").hide();
    });
});

$(".press .slidesShow > i.next").on("click", function(){
    $(".press .slidesShow > i.prev").show();
    $('.press .slidesArea').find('li:last-child.current').each(function(){
        $(".press .slidesShow > i.next").hide();
    });
});


$(".press .slidesArea > li:first-child > img").on("click", function(){
    $(".press .slidesShow > i.next").show();
    $('.press .slidesArea').find('li:first-child.current').each(function(){
        $(".press .slidesShow > i.prev").hide();
    });
});

$(".press .slidesArea > li:last-child > img").on("click", function(){
    $(".press .slidesShow > i.prev").show();
    $('.press .slidesArea').find('li:last-child.current').each(function(){
        $(".press .slidesShow > i.next").hide();
    });
});


var totalLi = $(".press .slidesArea > li").length;
$(".press .slidesShow .total_current .total").text(totalLi);
$(".press .slidesArea > li > img, .press .slidesShow > i.prev, .press .slidesShow > i.next").on("click", function () {
    var index = $(".press .slidesArea > li.current").index() + 1;
    $(".press .slidesShow .total_current .current").text(index);
});