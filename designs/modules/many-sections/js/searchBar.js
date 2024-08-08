$(document).ready(function(){
  
  function searchBar(){
    var ww = $(window).innerWidth();
      var input = ".searchBar .search_bar input";
  
      $(input).closest(".search_bar").siblings(".dropdown").find("a.rml").each(function(){
        $(this).parent().remove();
      });
      $(input).closest(".search_bar").siblings(".dropdown").find("a").each(function(){
        $(this).find(".icon").remove();
      });
  
  
      $(input).closest(".search_bar").siblings(".dropdown").find("a").each(function(){
        var href = $(this).attr("href");
        //console.log(href);
        $(this).attr("data-href", href);
        $(this).removeAttr("href");
      });
  
      $(input).on("keyup", function (){
        var value = $(this).val().toLowerCase();
        $(this).parent(".search_bar").siblings(".dropdown").children("li").filter(function (){
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
      });
      $(input).closest(".search_bar").siblings(".dropdown").find("a").click(function(){
        var text = $(this).text();
        var dataHref = $(this).attr("data-href");
        //console.log(dataHref);
        //console.log(text);
        $(this).closest(".dropdown").siblings(".search_bar").find("input").val(text);
        $(this).closest(".dropdown").fadeOut().css("display", "flex");
        $(this).closest(".dropdown").siblings(".search_bar").find(".timesIcon").hide();
        $(this).closest(".dropdown").siblings(".search_bar").find(".searchIcon").show().css("display", "flex");
        $(this).closest(".dropdown").siblings(".search_bar").find(".searchIcon").attr("href", dataHref);
      });
      if(ww >= 768){
        //alert();
        $(input).closest(".searchBack").click(function(e){
          e.stopPropagation();
          $(document).click(function(){
            $(this).find("input").val("");
            $(this).find(".dropdown").fadeOut();
            $(this).find(".timesIcon").hide();
            $(this).find(".searchIcon").show().removeAttr("href");
          });
        });
      };
      if(ww <= 767){
        //alert(ww);
        $(input).closest(".searchBack").click(function(e){
          e.stopPropagation();
          $(document).click(function(){
            $(this).find("input").val("");
            $(this).find(".dropdown").fadeIn();
            $(this).find(".dropdown").children("li").css("display", "flex");
            $(this).find(".timesIcon").hide();
            $(this).find(".searchIcon").show().removeAttr("href");
          });
        });
      };
      
  
  
      $(input).siblings(".timesIcon").click(function(e){
        $(this).siblings("input").val("");
        $(this).closest(".search_bar").siblings(".dropdown").fadeOut();
        $(this).closest(".search_bar").siblings(".dropdown").children("li").css("display", "flex");
        $(this).hide();
        $(this).siblings(".searchIcon").show().removeAttr("href");
      });
      $(input).click(function(){
        $(this).closest(".search_bar").siblings(".dropdown").fadeIn();
        $(this).closest(".search_bar").siblings(".dropdown").find("li").fadeIn();
        $(this).siblings(".searchIcon").hide();
        $(this).siblings(".timesIcon").show().css("display", "flex");
      });
  };
  $(window).on("load", searchBar());
  $(window).on("resize", searchBar);
});
