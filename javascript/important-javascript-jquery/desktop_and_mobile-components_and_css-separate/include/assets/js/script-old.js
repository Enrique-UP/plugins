var wd = window | document;
var w = window;
var d = document;
// ================================================================================ //

let script = "";
let link = "";
const tags = [
    {
        idHeader : "header",
        idMob: "headerMob",
        idDesk: "headerDesk",
        hrefMob: "./assets/css/mobile.css",
        hrefDesk: "./assets/css/desktop.css",
        srcMob: "./assets/js/mobile.js",
        srcDesk: "./assets/js/desktop.js",
        rel: "stylesheet",
        type: "text/css"
    }
];
w.addEventListener("load", mobileDesktop());
w.addEventListener("resize", mobileDesktop);
function mobileDesktop(){
    tags.forEach(function(t) {
        if(w.innerWidth <= 991){
            script += '<script' + "id="+t.idHeader+'></script>';
            // link += "<link id="+t.idHeader+">"
        }else{
            script += "<script id="+t.idHeader+"></script>";
        }
    });
    document.body.innerHTML += script;
    // document.body.innerHTML += link;

    const scriptLink = [...document.querySelectorAll("script, link")];
    const lks = new Set(scriptLink.map(x => x.outerHTML));
    scriptLink.forEach(lk => {
        if(lks.has(lk.outerHTML)){
            lks.delete(lk.outerHTML);
        }
        else{
            lk.remove();
        }
    });
}
// ================================================================================ //
w.addEventListener("load", function(){
    d.querySelector(".global").innerHTML = '<div>Globally Added</div>';
});
