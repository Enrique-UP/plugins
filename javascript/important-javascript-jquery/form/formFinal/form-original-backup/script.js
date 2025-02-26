// ==================================================================================== back =========
document.querySelectorAll(".formArea .item .btns .btn1").forEach(function(e) {
    e.addEventListener("click", function() {
        let prevItem = e.closest(".item").previousElementSibling;
        if (prevItem){
            e.closest(".item").classList.remove("show");
            prevItem.classList.add("show");
        }
    });
});
// ==================================================================================== back =========
// ==================================================================================== next =========
document.querySelectorAll(".formArea .item .btns .btn2:not([href])").forEach(function(e) {
    e.addEventListener("click", function() {
        if(e.classList.contains("go")){
            let nextItem = e.closest(".item").nextElementSibling;
            if (nextItem){
                e.closest(".item").classList.remove("show");
                nextItem.classList.add("show");
            }
        }
    });
});
// ==================================================================================== next =========
