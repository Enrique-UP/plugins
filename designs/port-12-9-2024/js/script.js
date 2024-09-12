(function(){
    document.querySelectorAll(".colorsRepeat").forEach(function(e){
        var listItems = e.querySelectorAll("data");
        const totalClasses = 10;
        var i = 1;
        for (let li of listItems) {
          if (i > totalClasses){
            i = 1;
          }
          li.innerHTML = i + " - " + `var(--c${i})` + " - " + li.innerHTML;
          li.style.setProperty("--c", `var(--c${i})`);
          i++;
        }
      });
})();