/* ====================================================== header ====================================================== */
(function(e, i) {
  e.forEach(f => window.addEventListener(f, i));
})(["load", "scroll", "resize"], () => document.querySelector("header").classList[window.scrollY >= 40 ? 'add' : 'remove']("active"));

function searchBarOpen(){
  document.querySelector("body").classList.add("overflowHide");
  document.querySelector("header .middle .searchBarArea").classList.add("active");
}
function searchBarClose(){
  document.querySelector("body").classList.remove("overflowHide");
  document.querySelector("header .middle .searchBarArea").classList.remove("active");
}

function navOpen(){
  document.querySelector("body").classList.add("overflowHide");
  document.querySelector("header .bottom nav").classList.add("active");
}
function navClose(){
  document.querySelector("body").classList.remove("overflowHide");
  document.querySelector("header .bottom nav").classList.remove("active");
}
/* ====================================================== header ====================================================== */





/* ====================================================== footer ====================================================== */
(function(){
  document.querySelector(".copyright span").innerText = new Date().getFullYear();
})();
/* ====================================================== footer ====================================================== */





/* ====================================================== common ====================================================== */
(function(){
  document.querySelectorAll(".colorsRepeat").forEach(function(e){
      var listItems = e.querySelectorAll("data");
      const totalClasses = 10;
      var i = 1;
      for (let li of listItems){
        if (i > totalClasses){
          i = 1;
        }
        li.innerHTML = i + " - " + `var(--c${i})` + " - " + li.innerHTML;
        li.style.setProperty("--c", `var(--c${i})`);
        i++;
      }
    });
})();
/* ====================================================== common ====================================================== */