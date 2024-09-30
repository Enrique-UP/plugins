let content = "";
const tags = [
    // {img: "godzilla_milkshake", text: "dinner"},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
];
tags.forEach(function(e) {
  //content += `<div class="item"><div class="content"><h3>${e.text}</h3><img src=${"./images/"+e.img+".jpg"} /></div><!--content--></div><!--item-->`;
  content += `<div class="item"><div class="content"><h3></h3><img class="lazy" /></div><!--content--></div><!--item-->`;
});
document.querySelector("div.grid").innerHTML = content;