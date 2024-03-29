window.addEventListener("load", function (){
var ul = document.querySelector(".projects-list");
var li = ul.children;
var revShow = "";
var rev = li.length;
document.querySelectorAll(".projects-list .item").forEach(function(et){
    if(rev > 0){
    revShow = rev--;
    }
    //console.log(revShow);
    et.getElementsByTagName("img")[0].setAttribute("data-src", "./img/" + revShow + ".jpg");
});
});