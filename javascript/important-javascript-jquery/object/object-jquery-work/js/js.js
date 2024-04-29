$(document).ready(function(){
    $("ul > li > span").click(function(){
        $(this).parent("li").text("Lorem");
    });
});