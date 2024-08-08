$(document).ready(function(){
    let slidesCount = $(".slider > ul > li").length;
    let slideWidth = $(".slider > ul > li").width();
    //let slideHeight = $(".slider > ul > li").height();
    let sliderUlWidth = slidesCount * slideWidth;
    
    $(".slider").css({width:slideWidth/*, height:slideHeight*/});
    $(".slider > ul").css({width:sliderUlWidth, marginLeft:-slideWidth});
    
    $(".slider > ul > li:last-child").prependTo(".slider > ul");

    function moveLeft(){
        $(".slider > ul").animate({
            left : + slideWidth
        }, 300, function(){
            $(".slider > ul > li:last-child").prependTo(".slider > ul");
            $(".slider > ul").css("left", "");
        });
    }
    
    function moveRight(){
        $(".slider > ul").animate({
            left : - slideWidth
        }, 1000, function(){
            $(".slider > ul > li:first-child").appendTo(".slider > ul");
            $(".slider > ul").css("left", "");
        });
    }

    $(".slider a.control_prev").on("click", function(){
        moveLeft();
    });

    $(".slider a.control_next").on("click", function(){
        moveRight();
    });

    setInterval(function(){
        moveRight();
    }, 3000);

});