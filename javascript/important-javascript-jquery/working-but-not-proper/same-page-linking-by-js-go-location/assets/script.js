(function(){
    document.querySelectorAll("main header a").forEach(function(e){
        e.addEventListener("click", function(){
            var hashId = e.getAttribute("href");
            console.log("hashId = " + hashId);

            var str = hashId.split("#");
            var id = str[str.length - 1];
            console.log("id = " + id);

            // document.querySelectorAll(e.getAttribute("data-id")).forEach(function(f){
            //     f.classList.add("active");
            // });            
        });
    });
})();

// here 2 conditions
// 1st is same page linking of home page by clicking
// 2nd is refresh page

// see exp 
// file:///D:/office-work/assets/plugins/javascript/important-javascript-jquery/classes-style-and-class-add-in-sequence-and-reverse/add-remove-class/accordion-tabs-perfect-tutorial.html