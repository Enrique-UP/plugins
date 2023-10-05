window.addEventListener("load", function(){
  document.querySelector(".breadcrumbs").innerHTML = '<a href="inde.html">Home</a> | <span></span>';

  var page = document.querySelector(".breadcrumbs").getAttribute("data-page");
  console.log(page);
  document.querySelector(".breadcrumbs span").innerHTML = page;
});