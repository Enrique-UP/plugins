document.querySelectorAll("main header a").forEach((e) => {
    const href = e.href;
    if (href.includes("#")) {
        const valueAfterHash = href.substring(href.indexOf("#") + 1);
        // console.log(valueAfterHash);
        
        e.classList = valueAfterHash;
        e.setAttribute("data-link", "#" + valueAfterHash);

        e.addEventListener("click", function(t){
            if(document.contains(document.querySelector("#" + valueAfterHash))){
                // t.preventDefault();
                scrollUp(e);
            }
        });

        if(e.getAttribute("data-link") === window.location.hash){
            scrollUp(e);
        }
    }
});

function scrollUp(e){
    var top;
    document.querySelectorAll(e.getAttribute("data-link")).forEach((f) => top = f.offsetTop);
    var headerHeight = document.querySelector("header").offsetHeight;
    // console.log("top = " + top);
    
    setTimeout(function() {
        window.scrollTo({
            top: top - headerHeight,
            behavior: 'smooth'
        });
    }, 25);
}

(function(events, index) {
    events.forEach(event => window.addEventListener(event, index));
})(["load", "scroll", "resize"], function(){
    document.querySelectorAll("main header a").forEach(function(e) {
        if (e.href === window.location.href) e.classList.add('active');
        
        e.addEventListener("click", function(){
            document.querySelectorAll('main header a').forEach((e) => e.classList.remove("active"));
            if (this.classList.contains('active')) this.classList.remove('active');
            else this.classList.add('active');
        });
    });
});


// (function(events, index) {
//     events.forEach(event => window.addEventListener(event, index));
// })(["load", "scroll", "resize"], function(){
//     document.querySelectorAll("section").forEach(function(e) {
//         if (e.href === window.location.href) e.classList.add('active');
        
        
//     });
// });