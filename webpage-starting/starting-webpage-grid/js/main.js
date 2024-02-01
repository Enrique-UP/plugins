new WOW().init();
$(".slider").owlCarousel({
	autoplay:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// for fw not spacing
document.querySelectorAll("main .fw").forEach(function(e){
    e.parentElement.classList.add("fwp");
});
// set margin-bottom of col parent col
document.querySelectorAll(".row [class*=col-] [class*=col-]").forEach(function(e){
    e.parentElement.closest("[class*=col-]").style.marginBottom = 0;
});