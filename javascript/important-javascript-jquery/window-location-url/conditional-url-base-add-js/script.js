window.addEventListener("load", function(){
    var link = window.location.href;
    if (link.indexOf("home") > -1 || link.indexOf("contact") > -1) {
      alert("alert");
    }
})
