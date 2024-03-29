var number = "+1-000-000-0000";
var mail = "info@demo.com";
var address = "86-Lorem ipdum dolor, AMT";
var fb = "https://www.facebook.com";
var tw = "https://www.twitter.com";
var lin = "https://www.linkedin.com";
var ins = "https://www.instagram.com";
var skype = "https://www.skype.com";
var wapp = "https://whatsapp.com";

document.querySelectorAll(".number").forEach(function(e){
    e.setAttribute("target", "_blank");
    e.setAttribute("href", `tel:${number}`);
    if(document.contains(e.querySelector(".txt"))){
        e.querySelector(".txt").innerHTML = number;
    }
});
document.querySelectorAll(".mail").forEach(function(e){
    e.setAttribute("target", "_blank");
    e.setAttribute("href", `mailto:${mail}`);
    if(document.contains(e.querySelector(".txt"))){
        e.querySelector(".txt").innerHTML = mail;
    }
});
document.querySelectorAll(".address").forEach(function(e){
    e.querySelector(".txt").innerHTML = address;
});
document.querySelectorAll(".fb").forEach(function(e){
    e.setAttribute("target", `_blank`);
    e.setAttribute("href", fb);
});
document.querySelectorAll(".tw").forEach(function(e){
    e.setAttribute("target", `_blank`);
    e.setAttribute("href", tw);
});
document.querySelectorAll(".lin").forEach(function(e){
    e.setAttribute("target", `_blank`);
    e.setAttribute("href", lin);
});
document.querySelectorAll(".ins").forEach(function(e){
    e.setAttribute("target", `_blank`);
    e.setAttribute("href", ins);
});
document.querySelectorAll(".skype").forEach(function(e){
    e.setAttribute("target", `_blank`);
    e.setAttribute("href", skype);
});
document.querySelectorAll(".wapp").forEach(function(e){
    e.setAttribute("target", `_blank`);
    e.setAttribute("href", wapp);
});
// common elements
document.querySelector("main").insertAdjacentHTML("afterend", `<div class="fw background"><i class="icon">&#xe039;</i></div><!--fw-->`);
document.querySelector("main ~ .fw").insertAdjacentHTML("afterend", `<div class="top"><i class="icon">&#xe055;</i><span></span></div><!--top-->`);
