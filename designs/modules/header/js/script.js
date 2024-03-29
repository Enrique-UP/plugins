// contact & social media
$(document).ready(function(){
    $(".container .row [class*=col-]").parents("[class*=col-]").css("margin-bottom", 0);
    
    var number = "+91-000-000-0000";
    var email = "demo@gmail.com";
    var phoneNumber = $(".phoneNumber");
    var emailId = $(".emailId");

    phoneNumber.each(function(){
        $(this).attr("href", "tel:" + number);
        if($(document).find($(this).find(".pn"))){
            $(this).find(".pn").html(number);
        }
    });
    emailId.each(function(){
        $(this).attr("href", "mailto:" + email);
        if($(document).find($(this).find(".em"))){
            $(this).find(".em").html(email);
        }
    });

    var tb = $(".phoneNumber, .emailId");
    tb.each(function(e){
        $(this).attr("target", "_blank");
    });
});
// contact & social media
