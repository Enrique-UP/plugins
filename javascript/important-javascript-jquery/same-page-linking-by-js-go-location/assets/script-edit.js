document.querySelectorAll("header a").forEach(function(e){
    const href = e.href;
    if (href.includes("#")) {
        const valueAfterHash = href.substring(href.indexOf("#") + 1);
        e.setAttribute("data-link", valueAfterHash);

        e.addEventListener("click", function(event) {
            // event.preventDefault();
            var targetId = this.getAttribute("data-link");
            var targetSection = document.getElementById(targetId);
            var navHeight = document.querySelector("header").offsetHeight;
            window.scrollTo({
                top: targetSection.offsetTop - navHeight,
                behavior: "smooth"
            });
        });
    }
});
(function(events, index){
    events.forEach((event) => window.addEventListener(event, index));
})(["load", "resize", "scroll"], function(){
    var navHeight = document.querySelector("header").offsetHeight;
    document.querySelectorAll("main > section").forEach(function(e){
        if(e.hasAttribute("id")){
            var rect = e.getBoundingClientRect();
            if(rect.top <= navHeight && rect.bottom >= navHeight){
                document.querySelectorAll("header a").forEach((e) => e.classList.remove("active"));
                document.querySelector(`header a[data-link="${e.id}"]`).classList.add("active");
            }else{
                document.querySelector(`header a[data-link="${e.id}"]`).classList.remove("active");
            }
        }
    });
});