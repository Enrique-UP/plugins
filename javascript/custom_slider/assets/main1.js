var i = 1;
// $(
//     function(){
//         $(".slider > img").css("display","none");
//         $(".slider > img:first-child").css("display","block");
//         setInterval("show()", 5000);
//     }
// )
$(
    function(){
        $(".slider > img").css("display","none");
        $(".slider > img:first-child").css("display","block");
        setInterval("show()", 3000);
    }
)
function show(){
    $(".slider > .img" +i).fadeOut(1000).removeClass("active");
    i=i+1;
    if(i==5){
        i=1;
    }
    $(".slider > .img" +i).fadeIn(1000).addClass("active");
}