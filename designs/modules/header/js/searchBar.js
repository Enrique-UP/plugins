$(document).ready(function(){
    function searchBar(){
        $("header .headerMiddle .searchBack .inputTabs input").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("header .headerMiddle .searchBack .dropdown > li").filter(function() {
              $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });


        var dropdown = $("header .headerMiddle .searchBack .dropdown");
        var links = "";
        $("a").each(function(){
            links += "<li>" + $(this).prop("outerHTML") + "</li>";
        });
        dropdown.html(links);

        $("header .headerMiddle .searchBack .dropdown > li > a.rml").each(function(){
            $(this).parent("li").remove();
        });
        $("header .headerMiddle .searchBack .dropdown > li > a").each(function(){
            $(this).find(".icon, img").remove();
        });

        var found = {};
        $("header .headerMiddle .searchBack .dropdown > li > a").each(function(){
            var atr = $(this).attr("href");
            $(this).attr("data-href", atr);
            $(this).removeAttr("href");
            
            if(found[$(this).text()]){
                $(this).parent().remove();
            }else{
                found[$(this).text()] = true;
            }
        });

        $("header .headerMiddle .searchBack .dropdown > li > a").click(function(){
            var text = $(this).text();
            $("header .headerMiddle .searchBack .inputTabs input").val(text);
            var data = $(this).attr("data-href");
            $("header .headerMiddle .searchBack .inputTabs .searchBarArea > a.searchIcon").attr("href", data);
            $(this).closest(".dropdown").fadeOut();

            $("header .headerMiddle .searchBack .inputTabs .searchBarArea > a.searchIcon").show().css("display", "flex");
            $("header .headerMiddle .searchBack .inputTabs .searchBarArea > a.timesIcon").hide();
        });
        $("header .headerMiddle .searchBack .inputTabs .searchBarArea > a.timesIcon").click(function(){
            $("header .headerMiddle .searchBack .inputTabs input").val("");
            $("header .headerMiddle .searchBack .dropdown").fadeOut();
            $(this).hide();
            $(this).siblings(".searchIcon").show().css("display", "flex");
        });


        var ww = $(window).width();
        function desktop(){
            //alert("desktop");
            $("header .headerMiddle .searchBack .inputTabs input").click(function(){
                $("header .headerMiddle .searchBack .dropdown").fadeIn();
                $(this).siblings(".searchIcon").hide();
                $(this).siblings(".timesIcon").show().css("display", "flex");
            });
            $("header .headerMiddle .searchBack .inputTabs").click(function(e){
                e.stopPropagation();
            });
            $(document).click(function(){
                $("header .headerMiddle .searchBack .inputTabs input").val("");
                $("header .headerMiddle .searchBack .dropdown").fadeOut();
                $("header .headerMiddle .searchBack .inputTabs .searchBarArea > a.searchIcon").show().css("display", "flex");
                $("header .headerMiddle .searchBack .inputTabs .searchBarArea > a.timesIcon").hide();
            });
        }
        var marginRight = $("header .headerMiddle .searchBack").css("margin-right");
        function mobile(){
            //alert("mobile");
            $(".btns .btn-1").click(function(){
                $("header .headerMiddle .fw .middle").fadeIn().css("display", "flex");
                setTimeout(function(){
                    $("header .headerMiddle .searchBack").css("margin-right", 0);
                }, 100);
            });
            $("header .headerMiddle .searchBack").css("margin-right", marginRight);
            $("header .headerMiddle .searchBack").click(function(e){
                e.stopPropagation();
            });
            $("header .headerMiddle .fw .middle").click(function(){
                $("header .headerMiddle .searchBack .inputTabs input").val("");
                $("header .headerMiddle .searchBack .dropdown").show();
                $("header .headerMiddle .searchBack .dropdown > li").css("display", "flex");
                $("header .headerMiddle .searchBack .inputTabs .searchBarArea > a.searchIcon").show().css("display", "flex");
                $("header .headerMiddle .searchBack .inputTabs .searchBarArea > a.timesIcon").hide();
                setTimeout(function(){
                    $("header .headerMiddle .fw .middle").fadeOut();
                    $("header .headerMiddle .searchBack").css("margin-right", marginRight);
                }, 100);
                
            });
            $("header .headerMiddle .searchBack .inputTabs .searchBarArea > a.timesIcon").click(function(){
                $("header .headerMiddle .searchBack .dropdown > li").css("display", "flex");
            });
            $("header .headerMiddle .searchBack .close").click(function(){
                $("header .headerMiddle .fw .middle").fadeOut();
                setTimeout(function(){
                    $("header .headerMiddle .searchBack").css("margin-right", marginRight);
                }, 100);
            });
        }
        if(ww >= 992){
            desktop();
        }
        if(ww <= 991){
            mobile();
        }

    }
    window.onload = searchBar;
    window.onresize = searchBar;
    // $(window).on("load", searchBar());
    // $(window).on("resize", searchBar);
});