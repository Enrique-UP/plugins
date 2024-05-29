//import {currentYear} from "./var.js";
$(document).ready(function() {
    $(".container .row [class*=col-]").parents("[class*=col-]").css("margin-bottom", 0);
    
    $('.slider .owl-carousel').owlCarousel({
        btt:true,
        lazyLoad : true,
        items: 1,
        loop: true,
        autoplay: true,
        dots:true,
        nav: true,
        navText: ['<i class="icon">&#xe005;</i>','<i class="icon">&#xe004;</i>'],
        thumbs: true,
        thumbImage: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item',			
    });
    $(".slider .owl-carousel .owl-thumbs, .slider .owl-carousel .owl-controls").addClass("container");
});
$(document).ready(function(){
	$(function(){
        $(".work .workArea .image .detail").click(function(){
            $(this).closest(".workArea").addClass("active");
            $(this).closest(".col-xs-12").siblings().children(".workArea").removeClass("active1 active");
            $(this).siblings(".details").find(".icon").click(function(){
                $(this).closest(".workArea").removeClass("active");
            });
            $(".workArea img").stop(true);
            $(".work .workArea img").animate({marginTop: 0});
        });
        $(".work .workArea .more .icon.view").on("click", function(){
            $(".workArea").removeClass("active1 active");
            $(".workArea img").stop(true);
            
            var imgHeight = $(this).closest(".workArea").find("img").height();
            var liHeight = $(this).closest(".workArea").find(".image").height();

            $(".workArea img").animate({marginTop: 0}, imgHeight);
            $(".work .workArea img").animate({marginTop: 0});
            
            if(imgHeight > liHeight){
                $(this).closest(".workArea").addClass("active1");
                loop();
                function loop(){
                    var top = imgHeight - liHeight;
                    $(".work .workArea.active1 img").animate({marginTop: -top}, imgHeight * 3, "linear");
                    $(".work .workArea.active1 img").animate({marginTop: 0}, imgHeight * 3, "linear", loop);
                }
                $(this).siblings(".icon.stop").on("click", function(){
                    $(".work .workArea.active1 img").stop(true);
                    $(this).closest(".workArea").removeClass("active1");
                    $(this).closest(".workArea").find("img").animate({marginTop: 0}, imgHeight);
                });
            }
        });
    });
});
$(function(){
    $("header .headerBottom .mobileIcons .icon.search").click(function(){
        $(".searchBar").addClass("active");
    });
    $(".searchBar .head .icon").click(function(){
        $(".searchBar").removeClass("active");
    });
});

$(function(){
    $("header .headerBottom .mobileIcons .icon.bar").click(function(){
        $("header .headerBottom .navBack").addClass("active");
    });
    $("header .headerBottom .head").click(function(){
        $("header .headerBottom .navBack").removeClass("active");
    });
});

$(function(){
    var i = 0;
    $(".education .edu>li").each(function(){
        if(i < $(".education .edu>li").length){
            i++;
        }
        //$(this).addClass('li-' + i);
        if(i <= 9){
            $(this).find("aside.headText .head span").text("0" + i);    
        }else{
            $(this).find("aside.headText .head span").text(i);
        }
    });
});

$(window).on("load scroll resize", function(){
    var window_height = $(window).height();
    var scroll = $(window).scrollTop();
    var window_bottom = window_height + scroll;
    
    $(".animate").each(function(){
        var animate_height = $(this).height();
        var animate_top = $(this).offset().top;
        var animate_bottom = animate_height + animate_top;
    
        if(animate_top <= window_bottom && animate_bottom >= scroll){
            $(this).addClass("active");
        }
        // animation for one time or repeat
        // else{
        //     $(this).removeClass("active");
        // }
        // animation for one time or repeat
    });
});
$(function(){
    $('#post').typer(['Lorem <b>Post 1</b>!', 'Lorem <b>Post 2</b>', 'Lorem <b>Post 3</b>']);

    var list = $(".aboutMe .lists.list1").html();
    $(".aboutMe .lists.list2").html(list);
});

$(window).on("resize load", function(){
    var section = $(".aboutMe .fw.family").offset().top;
    $(".aboutMe .btns .btn-1").click(function(){
        $(".aboutMe .fw.family").toggleClass("active");
        $("html, body").animate({ scrollTop: section - 10}, 500);
    });
});

function marquee(){
    var id = document.querySelectorAll(".marquee");
    var disWidth = document.querySelector("main .disclaimer .fw>span").offsetWidth;
    var tid = 0;
    for(var j = 0; j < id.length; j++)
    {
        tid = id[j].offsetWidth - (2 * disWidth);
        id[j].style.width = tid + "px";    
        id[j].style.setProperty("--x", -tid + "px");
        var time = (tid/100) * 2;
        id[j].style.animationDuration = time + "s";   
    }
}
window.addEventListener("resize", marquee);
window.addEventListener("load", marquee);

(function(){
    var text = document.querySelector("main .disclaimer .fw>span").innerText;
    document.querySelector("main .disclaimer .marqueePopup .head").innerHTML += text;

    var ul = document.querySelector("main .disclaimer .marquee").innerHTML;
    document.querySelector("main .disclaimer .marqueePopup .fwidth>ul").innerHTML = ul;

    document.querySelector("main .disclaimer .fw>i").addEventListener("click", function(){
        document.querySelector("main .disclaimer .marqueePopup").style.display = "block";
        setTimeout(function(){
            document.querySelector("main .disclaimer .marqueePopup").querySelector(".fwidth").classList.add("active");
        }, 300);
    });
    document.querySelector("main .disclaimer .marqueePopup .head .icon").addEventListener("click", function(){
        document.querySelector("main .disclaimer .marqueePopup").querySelector(".fwidth").classList.remove("active");
        setTimeout(function(){
            document.querySelector("main .disclaimer .marqueePopup").style.display = "none";
        }, 300);
    });
})();

(function(){
    var number1 = "+91-000-000-0000";
    var email1 = "demo@gmail.com";
    document.querySelectorAll("a.number1, a.email1").forEach(function(e){
        e.setAttribute("target", "_blank");
    });
    document.querySelectorAll("a.number1").forEach(function(e){
        e.setAttribute("href", `tel:${number1}`);
        if(document.contains(e.querySelector(".numText"))){
            e.querySelector(".numText").innerHTML = number1;
        }
    });
    document.querySelectorAll("a.email1").forEach(function(e){
        e.setAttribute("href", `mailto:${email1}`);
        e.setAttribute("href", `tel:${number1}`);
        if(document.contains(e.querySelector(".emailText"))){
            e.querySelector(".emailText").innerHTML = email1;
        }
        
    });
})();