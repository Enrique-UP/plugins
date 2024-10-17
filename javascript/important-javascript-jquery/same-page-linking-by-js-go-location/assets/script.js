document.querySelectorAll("a").forEach((e) => {
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
    }, 10);
    
}
