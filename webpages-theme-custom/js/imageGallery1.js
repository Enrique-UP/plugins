$(".imageGallery .item img").on("click", slidesShow);
function slidesShow(){
    $(".gallery .slidesShow").addClass("active");
    var imgSrc = $(this).attr("src");
    $(".gallery .slidesShow img").attr("src", imgSrc);
    $(this).closest(".item").addClass("current");

    $(".gallery .slidesShow > i.prev").show();
    $(".gallery .slidesShow > i.next").show();

    $(this).closest(".imageGallery").find("img").each(function(){
        if ($(this).attr("data-src")) {
            $(this).attr("src", $(this).attr("data-src"));
            $(this).removeAttr("data-src");
        }
    });
};

$(".gallery .slidesShow > i.prev").on("click", prev);
function prev(){
    $(".imageGallery .item.current").each(function(){
        $(this).prev().addClass("current").find("img").attr("src");
        var prev = $(this).prev().addClass("current").find("img").attr("src");
        $(this).removeClass("current");
        $(".gallery .slidesShow img").attr("src", prev);
    });
}

$(".gallery .slidesShow > i.next").on("click", next);
function next(){
    $(".imageGallery .item.current").each(function(){
        $(this).next().addClass("current").find("img").attr("src");
        var next = $(this).next().addClass("current").find("img").attr("src");
        $(this).removeClass("current");
        $(".gallery .slidesShow img").attr("src", next);                
    });
}

$(".gallery .slidesShow > b").on("click", slide_remove);
function slide_remove(){
    $(this).closest(".gallery .slidesShow").removeClass("active");
    $(this).siblings("img").removeAttr("src");
    $(".imageGallery .item").removeClass("current");
};


$(".gallery .slidesShow > i.prev").on("click", function(){
    $(".gallery .slidesShow > i.next").show();
    $('.imageGallery').find('.item:first-child.current').each(function(){
        $(".gallery .slidesShow > i.prev").hide();
    });
});

$(".gallery .slidesShow > i.next").on("click", function(){
    $(".gallery .slidesShow > i.prev").show();
    $('.imageGallery').find('.item:last-child.current').each(function(){
        $(".gallery .slidesShow > i.next").hide();
    });
});


$(".imageGallery .item:first-child img").on("click", function(){
    $(".gallery .slidesShow > i.next").show();
    $('.imageGallery').find('.item:first-child.current').each(function(){
        $(".gallery .slidesShow > i.prev").hide();
    });
});

$(".imageGallery .item:last-child img").on("click", function(){
    $(".gallery .slidesShow > i.prev").show();
    $('.imageGallery').find('.item:last-child.current').each(function(){
        $(".gallery .slidesShow > i.next").hide();
    });
});


var totalLi = $(".imageGallery .item").length;
$(".gallery .slidesShow .total_current .total").text(totalLi);
$(".imageGallery .item img, .gallery .slidesShow > i.prev, .gallery .slidesShow > i.next").on("click", function () {
    var index = $(".imageGallery .item.current").index() + 1;
    $(".gallery .slidesShow .total_current .current").text(index);
});


$(document).ready(function(){
    $(".gallery .labels label :radio").click(function() {
        $(this).closest("label").addClass("active");
        $(this).closest("label").siblings().removeClass("active");

        $(".gallery .imageGallery .item").hide();
        $(".gallery .labels label :radio:checked").each(function() {
            $("." + $(this).val()).fadeIn('slow');
        });
    });    
});