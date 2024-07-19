var grid = document.querySelector(".grid");
var item = grid.querySelectorAll(".grid .item");
var totelItem = item.length;

for (var i = 0; i < item.length; i++){
    item[i].getElementsByTagName("h3")[0].innerText += i + 1;
};
item.forEach(function(c){
    if(totelItem > 0){
        var revShow = totelItem--;
    }
    c.querySelector("img").setAttribute("data-src", "./images/" + revShow + ".jpg");
    //c.classList.add("img-" + revShow);
});