// for fw not spacing
document.querySelectorAll("main .fw").forEach(function(e){
    e.parentElement.classList.add("fwParent");
});
// set margin-bottom of col parent col
document.querySelectorAll(".container .row [class*=col-] [class*=col-]").forEach(function(e){
    e.parentElement.closest("[class*=col-]").style.marginBottom = 0;
});

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("a.scroll_top").fadeIn();
            $("a.scroll_top").addClass("active");
        } else {
            $("a.scroll_top").fadeOut();
            $("a.scroll_top").removeClass("active");
        }
    });

    $("a.scroll_top").click(function (e) {
        // $(".top").click(function(){
        //     $('html, body').animate({scrollTop:(0)}, 1000);
        // });

        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top - 0
        });
    });
});
$(document).ready(function () {
    $("div.main.all_inner_page div.header_bottom div.logo_nav_area a.logo_area > img").attr("src", "images/logo-white.png");
});
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("div.header_bottom").addClass("active");
            $("div.main.all_inner_page div.header_bottom div.logo_nav_area a.logo_area > img").attr("src", "images/logo.png");
        } else {
            $("div.header_bottom").removeClass("active");
            $("div.main.all_inner_page div.header_bottom div.logo_nav_area a.logo_area > img").attr("src", "images/logo-white.png");
        }
    });
});

$(document).ready(function () {
    new WOW().init();
});
$(document).ready(function () {
    $("div.header_bottom div.logo_nav_area a.menu").click(function () {
        $(this).addClass("active");
        $("div.header_bottom div.logo_nav_area a.fa-close").slideDown(200);
        $("div.header_bottom div.logo_nav_area ul.nav_area").slideDown(200);
    });
});
$(document).ready(function () {
    $("div.header_bottom div.logo_nav_area a.fa-close").click(function () {
        $("div.header_bottom div.logo_nav_area a.menu").removeClass("active");
        $("div.header_bottom div.logo_nav_area a.fa-close").slideUp(0);
        $("div.header_bottom div.logo_nav_area ul.nav_area").slideUp(0);
    });
});
$(document).ready(function () {
    var a = 0;
    $(window).scroll(function () {
        var oTop = $('div.experience_counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('div.experience_counter .head').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }
                    });
            });
            a = 1;
        }
    });
});
$(document).ready(function () {
    var a = 0;
    $(window).scroll(function () {
        var oTop = $('div.experience').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('div.experience .value').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }
                    });
            });
            a = 1;
        }
    });
});
$(document).ready(function () {
    $("div.content *").removeAttr("style");
});
$(document).ready(function () {
    $("div.banner_breadcrumbs p.btns > a.one").click(function (e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top - 0
        });
    });
});
$(document).ready(function () {
    $("div.brands_logo_slider").owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        items: 5,
        dots: false,
        responsiveClass: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            381: {
                items: 2
            },
            621: {
                items: 3
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        },
        thumbs: false,
    });
    $("div.testinomials_slider").owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        items: 1,
        singleItem: true,
        dots: true,
        responsiveClass: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        thumbs: true,
        thumbImage: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item',
    });
    $("div.screen_slider div.image_area div.images").owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        items: 1,
        singleItem: true,
        dots: false,
        responsiveClass: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        thumbs: false,
        thumbImage: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item',
    });
    $("div.our_team_slider").owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        items: 2,
        dots: false,
        responsiveClass: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            381: {
                items: 1
            },
            450: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        },
        thumbs: false,
    });
});
$(document).ready(function () {
    var currentYear = (new Date).getFullYear();
    $(document).ready(function () {
        $("#year").text((new Date).getFullYear());
    });
});








































/* old js*/
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $("div.ci_main div.header div.header_bottom").addClass("active");
        $("div.ci_main.header_black_background div.header div.header_bottom.active a.logo_area > img").attr("src", "images/logo.png");
    } else {
        $("div.ci_main div.header div.header_bottom").removeClass("active");
        $("div.ci_main.header_black_background div.header div.header_bottom a.logo_area > img").attr("src", "images/logo-white.png");
    }
});


$("div.ci_main.header_black_background div.header div.header_bottom a.logo_area > img").attr("src", "images/logo-white.png");



$("div.ci_main div.header div.header_bottom ul.navigation_bar > li > a.fa-search, div.ci_main div.header div.header_bottom ul.mob_search_menu > li a.fa-search").click(function () {
    $("div.search_area").fadeIn();
});
$("div.search_area form a.fa-times").click(function () {
    $("div.search_area").fadeOut();
});
$("div.ci_main div.header div.header_bottom ul.mob_search_menu > li a.menu").click(function () {
    $("div.ci_main div.header div.header_bottom ul.navigation_bar, div.ci_main div.header div.header_bottom ul.mob_search_menu > li.close_btn a.fa-times").addClass("active");
});
$("div.ci_main div.header div.header_bottom ul.mob_search_menu > li.close_btn a.fa-times").click(function () {
    $(this).removeClass("active");
    $("div.ci_main div.header div.header_bottom ul.navigation_bar").removeClass("active");
});

$('div.ci_main div.main_container_area ul.tabs_area > li > a').on('click', function () {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 120;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;

});
$(function () {
    var $win = $(window);
    $win.scroll(function () {
        if ($win.height() + $win.scrollTop() < $(document).height() - 200 && $win.scrollTop() > 580) {
            $("div.ci_main div.main_container_area ul.tabs_area").addClass("fixed");
        }
        else if ($win.scrollTop() < 581) {
            $("div.ci_main div.main_container_area ul.tabs_area").removeClass("fixed");
        }
        //else if( $win.height() + $win.scrollTop() >= $(document).height() - 200 ) {
        if ($win.height() + $win.scrollTop() >= $(document).height() - 1000) {
            // console.log($(document).height() - 200);
            // console.log($win.height() + $win.scrollTop() );//>= $(document).height() - 200
            $("div.ci_main div.main_container_area ul.tabs_area").removeClass("fixed");
        }

    });
});


$("div.main_container_area div.wrapper_area section div.accordian_area ul > li.head").click(function () {
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
});
$("div.ci_main div.header div.header_bottom ul.navigation_bar > li > a.fa-search").click(function () {
    $("div.search_area").fadeIn();
});
$("div.ci_main div.main_container_area a.post_a_comment").click(function () {
    $("div.ci_main div.main_container_area form.post_a_comment_form").fadeToggle();
});
$(".course_view_all > a").click(function () {
    $("ul.course_location").fadeToggle();
});


$(function () {
    var $win = $(window);
    $win.scroll(function () {
        if ($win.height() + $win.scrollTop() < $(document).height() - 0 && $win.scrollTop() > 250) {
            $("div.ci_main div.about_us_page div.jobs_area div.right_sidebar_links div.right_sidebar_links_main").addClass("fixed");
        }
        else if ($win.scrollTop() < 601) {
            $("div.ci_main div.about_us_page div.jobs_area div.right_sidebar_links div.right_sidebar_links_main").removeClass("fixed");
        }
        if ($win.height() + $win.scrollTop() >= $(document).height() - 350) {
            $("div.ci_main div.about_us_page div.jobs_area div.right_sidebar_links div.right_sidebar_links_main").removeClass("fixed");
        }

    });
});





$('div.ci_main div.panel-group div.panel a.accordion-toggle').click(function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});
$("div.ci_main div.blog_page p, div.ci_main div.blog_page span, div.ci_main div.blog_page li").removeAttr("style");

$("div.ci_main div.header div.header_bottom ul.navigation_bar > li.huge_dropdown > ul > li.left_area").mouseenter(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
});
$('div.what_we_do div.panel-group .panel .accordion-toggle').click(function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});


//for scrool url not changing on same page linking
$("div.banner div.content_area p.btns a.c_btn.one, div.experience p.btns a.c_btn.two").click(function (e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top - 60
    });
});


//$("div.ci_main div.blog_page p, div.ci_main div.blog_page span, div.ci_main div.blog_page li").removeAttr("style");
//$(this).find('strong, b').css('font-weight', 'normal');
$("div.ci_main div.blog_page div.blog_area p, div.ci_main div.blog_page div.blog_area li").find('strong, b').css({ "font-family": "Lato-Black", "font-weight": "normal" });

$("a.scroll_top").click(function (e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top - 200
    });
});

//for don't select
$(document).ready(function () {
    $('body').bind('cut copy contextmenu ', function (e) {
        e.preventDefault();
    });
});
$(':not(input,select,textarea)').disableSelection();
//for don't select


