window.addEventListener("load", function(){
  var path = window.location.href; 
  document.querySelectorAll(".navigation ul > li > a").forEach(function(e) {
    if (e.href === path) {
      e.classList.add('active');
    }
  });
});