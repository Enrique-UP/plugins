(function(){
    var ul = document.querySelector("ul");
    let cnt = [
        {txt:"one"},
        {txt:"Two"},
        {txt:"Three"},
        {txt:"Four"},
        {txt:"Five"},
        {txt:"Six"},
        {txt:"Seven"},
        {txt:"Eight"},
        {txt:"Nine"},
        {txt:"Ten"}
    ];
    cnt.forEach(function(e){
        ul.innerHTML += "<li><span>" + e.txt + "</span></li>";
    });
})();