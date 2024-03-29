document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="./css/list.css" />';
let contents = "";
const liTags = [
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
liTags.forEach(function(e) {
    contents += `<li>${e.text+".jpg"}</li>`;
});
document.querySelector("ul.list").innerHTML += contents;