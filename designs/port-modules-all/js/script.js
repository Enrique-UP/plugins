// for fw not spacing
document.querySelectorAll("main .fw").forEach(function(e){
    e.parentElement.classList.add("fwParent");
});
// set margin-bottom of col parent col
document.querySelectorAll(".container .row [class*=col-] [class*=col-]").forEach(function(e){
    e.parentElement.closest("[class*=col-]").style.marginBottom = 0;
});
// for color repeat
document.querySelectorAll(".colors").forEach(function(a){
	var listItems = a.querySelectorAll("data");
	const totalClasses = 10;
	var i = 1;
	for (let li of listItems) {
	  if (i > totalClasses){
		i = 1;
	  }
	  li.style.setProperty("--bk1", `var(--b${i})`);
	  i++;
	}
});

function lazyLoadImage() {
  var scroll = document.documentElement.scrollTop;
  var windowBottom = scroll + window.innerHeight;      
  var lazy = document.querySelectorAll(".lazy");
  for(var i = 0; i < lazy.length; i++){
	var lazyBottom = lazy[i].offsetTop + lazy[i].offsetHeight;        

	if(scroll <= lazyBottom && lazy[i].offsetTop <= windowBottom){
	  var dataSrc = lazy[i].getAttribute("data-src");
	  var dataStyle = lazy[i].getAttribute("data-style");
	  if(dataSrc){
		lazy[i].setAttribute("src", dataSrc);
		lazy[i].removeAttribute("data-src");
	  }
	  if(dataStyle){
		lazy[i].setAttribute("style", "background-image:url("+ dataStyle +")");
		lazy[i].removeAttribute("data-style");
	  }
	}
  }
}
window.addEventListener("load", lazyLoadImage);
window.addEventListener("scroll", lazyLoadImage);
window.addEventListener("resize", lazyLoadImage);
