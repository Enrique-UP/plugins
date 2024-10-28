document.querySelectorAll("main header a").forEach((e) => {
    const href = e.href;
    if (href.includes("#")) {
        const valueAfterHash = href.substring(href.indexOf("#") + 1);
        // console.log(valueAfterHash);
        
        // e.classList = valueAfterHash;
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

(function(events, handler) {
    events.forEach(event => window.addEventListener(event, handler));
})(["load", "scroll", "resize"], function() {
    const headerHeight = document.querySelector("header").offsetHeight;
    
    document.querySelectorAll("main > section").forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionLink = document.querySelector(`header a[data-link="#${sectionId}"]`);

        if (sectionId && sectionLink) {
            const sectionTop = section.offsetTop - headerHeight;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                document.querySelectorAll("header a").forEach(link => link.classList.remove("active"));
                sectionLink.classList.add("active");
            }else{
                sectionLink.classList.remove("active");
                // fullURL.split('#')[0];
            }
        }
    });
});
var lk = window.location.hash;
console.log("wlh = " + lk.split("#")[0]);



// (function(events, index) {
//     events.forEach(event => window.addEventListener(event, index));
// })(["load", "scroll", "resize"], function(){
//     document.querySelectorAll("section").forEach(function(e) {
//         if (e.id === "#" + aHref(index)) e.classList.add('active');        
//     });
// });
// function aHref(f){
//     document.querySelectorAll("main header a").forEach(function(e) {
//         f = e.href;
//     });
// }



// (function(events) {
//     events.forEach(event => window.addEventListener(event, function() {
//         document.querySelectorAll("section").forEach(function(section) {
//             // Iterate through all 'a' elements in the header
//             document.querySelectorAll("main header a").forEach(function(anchor) {
//                 if(anchor.getAttribute("data-link")){
//                     // If the section's ID matches the href ID, add 'active', else remove it
//                     if (section.id === anchor.getAttribute("data-link").substring(1)) {
//                         // document.querySelectorAll("#" + hrefId).forEach(function(f) {
//                         //     f.classList.add("active");
//                         // });
//                         section.querySelectorAll(section.getAttribute("id")).forEach(function(f){
//                             f.classList.add("active");
//                         });
//                     } else {
//                         section.querySelectorAll(section.getAttribute("id")).forEach(function(f){
//                             f.classList.remove("active");
//                         });
//                     }
//                 }
//             });
//         });
//     }));
// })(["load", "scroll", "resize"]);
