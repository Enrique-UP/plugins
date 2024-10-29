document.querySelectorAll("main header a").forEach((e) => {
    const href = e.href;
    if (href.includes("#")) {
        const valueAfterHash = href.substring(href.indexOf("#") + 1);
        e.setAttribute("data-link", "#" + valueAfterHash);
        e.addEventListener("click", function(t){
            if(document.contains(document.querySelector("#" + valueAfterHash))) scrollUp(e);
        });
        if(e.getAttribute("data-link") === window.location.hash) scrollUp(e);
    }
});
function scrollUp(e){
    var top;
    document.querySelectorAll(e.getAttribute("data-link")).forEach((f) => top = f.offsetTop);
    var headerHeight = document.querySelector("header").offsetHeight;
    setTimeout(function() {
        window.scrollTo({
            top: top - headerHeight,
            behavior: 'smooth'
        });
    }, 25);
}

(function(events, handler) {
    events.forEach(event => window.addEventListener(event, handler));
})(["load", "scroll", "resize"], function() {
    const headerLinks = document.querySelectorAll("header a");
    const headerHeight = document.querySelector("header").offsetHeight;

    headerLinks.forEach(link => {
        if (link.href === window.location.href) link.classList.add("active");
        link.addEventListener("click", function() {
            headerLinks.forEach(e => e.classList.remove("active"));
            this.classList.toggle("active");
        });
    });

    let anyLinkActive = false;
    document.querySelectorAll("main > section").forEach(section => {
        const sectionLink = document.querySelector(`header a[data-link="#${section.id}"]`);
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY - headerHeight;

        if (sectionLink && window.scrollY >= sectionTop && window.scrollY < sectionTop + rect.height) {
            headerLinks.forEach(link => link.classList.remove("active"));
            sectionLink.classList.add("active");
            anyLinkActive = true;
        } else if (sectionLink) sectionLink.classList.remove("active");
    });

    if (!anyLinkActive) {
        const currentUrl = window.location.href.split("#")[0];
        headerLinks.forEach(link => {
            if (link.href.split("#")[0] === currentUrl) link.classList.add("active");
            document.querySelectorAll(`header a[data-link]`).forEach(e => e.classList.remove("active"));
        });
    }
});






