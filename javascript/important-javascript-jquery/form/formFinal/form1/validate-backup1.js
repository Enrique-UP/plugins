document.querySelectorAll(".formArea .item").forEach(function (itemShow) {
    itemShow.querySelector(".btns .btn2:not([href])").addEventListener("click", () => form(itemShow));

    itemShow.querySelectorAll(".field").forEach((field) => {
        field.addEventListener("blur", () => form(itemShow));
        field.addEventListener("keyup", () => form(itemShow));
        field.addEventListener("change", () => form(itemShow));
    });
});

function form(e) {
    let isValid = true; // Track overall validity

    e.querySelectorAll(".field").forEach(function (f) {
        let fieldValid = true;

        if (f.getAttribute("data-input") === "name") {
            const namePattern = /^[A-Za-z]{2,}$/;
            if (!f.value || !namePattern.test(f.value)) fieldValid = false;
        } 
        else if (f.getAttribute("data-input") === "email") {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;
            if (!f.value || !emailPattern.test(f.value)) fieldValid = false;
        } 
        else if (f.getAttribute("data-input") === "number") {
            const numberPattern = /^[0-9]{10,15}$/;
            if (!f.value || !numberPattern.test(f.value)) fieldValid = false;
        } 
        else if (f.getAttribute("data-input") === "input" || f.getAttribute("data-input") === "select") {
            if (!f.value) fieldValid = false;
        }

        if (!fieldValid) {
            f.closest(".inputText").classList.add("error");
            isValid = false; // If any field is invalid, the whole form is invalid
        } else f.closest(".inputText").classList.remove("error");
    });

    // Toggle button class based on overall form validity
    const submitButton = e.querySelector(".btns .btn2:not([href])");
    if (isValid) submitButton.classList.add("go");
    else submitButton.classList.remove("go");
}
