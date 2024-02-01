var wd = window | document;
var w = window;
var d = document;
// ================================================================================ //

w.addEventListener("load", mobileDesktop());
w.addEventListener("resize", mobileDesktop);
function mobileDesktop(){
    const script = document.createElement("script");
    document.body.appendChild(script);
    var srcDes = "./include/header.desktop.js";
    var srcMob = "./include/header.mobile.js";

    const header = document.createElement("link");
    document.body.appendChild(header);
    header.rel = "stylesheet";
    header.type = "text/css";
    var hrefDes = "./assets/css/desktop.css";
    var hrefMob = "./assets/css/mobile.css";
    
    if(w.innerWidth <= 991){
        script.id = "script1";
        var scriptMob = document.getElementById('script2');
        if (scriptMob != null){
            scriptMob.remove();
        }
        header.id = "headerMob";
        var headerMob = document.getElementById('headerDesk');
        if (headerMob != null){
            headerMob.remove();
        }
        script.src = srcMob;
        header.href = hrefMob;
    }else{
        script.id = "script2";
        var scriptdesk = document.getElementById('script1');
        if (scriptdesk != null){
            scriptdesk.remove();
        }
        header.id = "headerDesk";
        var linkDesk = document.getElementById('headerMob');
        if (linkDesk != null){
            linkDesk.remove();
        }
        script.src = srcDes;
        header.href = hrefDes;
    }

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
