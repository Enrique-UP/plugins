var i = 1;
$(
    function(){
        $(".img1").css("display","block");
        $(".div1").css("background","red");
        setInterval("show()", 5000);
        $(".nt").click(function(){
            $(".slider > .img" +i).fadeOut(1000).removeClass("active");
            $(".div" +i).css("background","black");
            i=i+1;
            if(i==5){
                i=1;
            }
            $(".div" +i).css("background","red");
            $(".slider > .img" +i).fadeIn(1000).addClass("active");
            
        });
        $(".ps").click(function(){
            $(".slider > .img" +i).fadeOut(1000).removeClass("active");
            $(".div" +i).css("background","black");
            i=i-1;
            if(i==0){
                i=4;
            }
            $(".div" +i).css("background","red");
            $(".slider > .img" +i).fadeIn(1000).addClass("active");
        });
    }
)
$(
    function(){
        $(".slider > img").css("display","none");
        $(".slider > img:first-child").css("display","block");
        setInterval("show()", 3000);
    }
)
function show(){
    $(".slider > .img" +i).fadeOut(1000).removeClass("active");
    $(".div" +i).css("background","black");
    i=i+1;
    if(i==5){
        i=1;
    }
    $(".slider > .img" +i).fadeIn(1000).addClass("active");
    $(".div" +i).css("background","red");
}