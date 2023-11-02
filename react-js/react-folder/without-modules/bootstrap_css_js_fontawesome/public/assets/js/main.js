$(document).ready(function() {
    $('div.owl-carousel').owlCarousel({
        autoplay:true,
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            575:{
                items:1
            },
            768:{
                items:1
            }
        }
    });

    $("header .fa-bars").on("click", function(){
        $("header .navigation_bar").fadeToggle();
    });
    $("header .navigation_bar").on("click", function(){
        $(this).fadeOut();
    });
});
