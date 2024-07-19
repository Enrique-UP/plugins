var ww = window || document;
var d = document;
var mobileCss = "./assets/css/mobile/";
var desktopCss = "./assets/css/desktop/";

ww.addEventListener("load", commonComponents);
ww.addEventListener("resize", commonComponents);

d.head.innerHTML +=  '<link class="header" />';
d.head.innerHTML +=  '<link class="footer" />'

function commonComponents(){
    var width = ww.innerWidth;
    //console.log("window width = " + width);
    if(width <= 575){
        /* ========== Mobile code ========== */

        //header
        d.querySelector("link.header").href = mobileCss + "header.mobile.css";
        d.querySelector("header").innerHTML = '<div>Header Mobile</div><!--header-->';

        //footer
        d.querySelector("link.footer").href = mobileCss + "footer.mobile.css";
        d.querySelector("footer").innerHTML = '<div>Footer Mobile</div><!--footer-->';

        /* ========== Mobile code ========== */
    }else{
        /* ========== Desktop code ========== */

        //header
        d.querySelector("link.header").href = desktopCss + "header.desktop.css";
        d.querySelector("header").innerHTML = '<div>Header Desktop</div><!--header-->';

        //footer
        d.querySelector("link.footer").href = desktopCss + "footer.desktop.css";
        d.querySelector("footer").innerHTML = '<div>Footer Desktop</div><!--footer-->';
        
        /* ========== Desktop code ========== */
    }
    d.head.querySelectorAll("link").forEach(function(l){
        l.setAttribute("type","text/css");
        l.setAttribute("rel","stylesheet");
    });
};

ww.addEventListener("load", function(){
    d.querySelector(".global").innerHTML = '<div>Globally Add</div>';
});
