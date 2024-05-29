document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="./css/repeat.css" />';
let content = "";
const tags = [
    {
        text: "Breakfast"
    },
    {
        text: "Lunch"
    },
    {
        text: "Dinner"
    },
    {
        text: "Breakfast"
    },
    {
        text: "Lunch"
    }
];
    tags.forEach(function(e) {
    content += `<figure class="imageArea"><img /><figcaption>${e.text}</figcaption></figure>`;
});
document.querySelector("section.repeat").innerHTML += content;

var img = document.querySelectorAll("section.repeat img");
for (var i = 0; i < img.length; i++){
    //img[i].classList.add("img-" + i);
    img[i].setAttribute("src", "./images/img-" + i + ".jpg");
}