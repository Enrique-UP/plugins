document.querySelectorAll(".formArea .item").forEach(function(itemShow){
    itemShow.querySelector(".btns .btn2:not([href])").addEventListener("click", () => form(itemShow));
    
    itemShow.querySelectorAll(".field").forEach((field) => field.addEventListener("blur", () => form(itemShow)));
    itemShow.querySelectorAll(".field").forEach((field) => field.addEventListener("keyup", () => form(itemShow)));
    itemShow.querySelectorAll(".field").forEach((field) => field.addEventListener("change", () => form(itemShow)));
});
function form(e){
    e.querySelectorAll(".field").forEach(function(f){
        let isValid = true;
        // if(f.value.trim() === "") f.closest(".inputText").classList.add("error");
        // else f.closest(".inputText").classList.remove("error");

        if(f.getAttribute("data-input") === "name"){
            const namePattern = /^[A-Za-z]{2,}$/;
            if(!f.value) f.closest(".inputText").classList.add("error");
            else if (!namePattern.test(f.value)) f.closest(".inputText").classList.add("error");
            else f.closest(".inputText").classList.remove("error");
        }
        else if(f.getAttribute("data-input") === "email"){
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;
            if(!f.value) f.closest(".inputText").classList.add("error");
            else if (!emailPattern.test(f.value)) f.closest(".inputText").classList.add("error");
            else f.closest(".inputText").classList.remove("error");
        }
        else if(f.getAttribute("data-input") === "number"){
            const numberPattern = /^[0-9]{10,15}$/;
            if(!f.value) f.closest(".inputText").classList.add("error");
            else if (!numberPattern.test(f.value)) f.closest(".inputText").classList.add("error");
            else f.closest(".inputText").classList.remove("error");
        }


        else if(f.getAttribute("data-input") === "input"){
            if(!f.value) f.closest(".inputText").classList.add("error");
            else f.closest(".inputText").classList.remove("error");
        }
        else if(f.getAttribute("data-input") === "select"){
            if(!f.value) f.closest(".inputText").classList.add("error");
            else f.closest(".inputText").classList.remove("error");
        }
        
        if (!isValid) {
            e.querySelector(".btns .btn2:not([href])").classList.add("go");
            // saveToLocalStorage({ firstName, lastName, dob, country, email, mobile });
        } else e.querySelector(".btns .btn2:not([href])").classList.remove("go");
    });
}