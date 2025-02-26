document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".formArea .item.show").forEach((itemShow) => {
        loadFormData(itemShow); // Load stored data on refresh

        itemShow.querySelectorAll(".field").forEach((field) => {
            ["blur", "keyup", "change"].forEach((event) =>
                field.addEventListener(event, () => validateForm(itemShow))
            );
        });

        itemShow.querySelector(".btns .btn2:not([href])").addEventListener("click", () => validateForm(itemShow));
    });
});

function validateForm(e) {
    let isValid = true;
    let formData = {}; // Store valid data

    e.querySelectorAll(".field").forEach((field) => {
        let pattern;
        switch (field.getAttribute("data-input")) {
            case "firstName":
                pattern = /^[A-Za-z]{2,}$/;
                break;
            case "lastName":
                pattern = /^[A-Za-z]{2,}$/;
                break;
            case "email":
                pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;
                break;
            case "number":
                pattern = /^[0-9]{10,15}$/;
                break;
            case "input":
            case "select":
                pattern = /.+/; // Checks if not empty
                break;
            default:
                pattern = null;
        }

        if (!field.value.trim() || (pattern && !pattern.test(field.value.trim()))) {
            field.closest(".inputText").classList.add("error");
            isValid = false;
        } else {
            field.closest(".inputText").classList.remove("error");
            formData[field.getAttribute("data-input")] = field.value.trim(); // Store valid input
        }
    });

    const submitButton = e.querySelector(".btns .btn2:not([href])");
    if (isValid) {
        submitButton.classList.add("go");
        localStorage.setItem("formData", JSON.stringify(formData)); // Save to local storage
    } else {
        submitButton.classList.remove("go");
    }
}

// Load stored data and validate on page refresh
function loadFormData(e) {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (!storedData) return;

    let isValid = true;
    e.querySelectorAll(".field").forEach((field) => {
        let fieldType = field.getAttribute("data-input");
        if (storedData[fieldType]) {
            field.value = storedData[fieldType]; // Set stored value
            field.closest(".inputText").classList.remove("error"); // Remove errors
        } else {
            isValid = false;
        }
    });

    const submitButton = e.querySelector(".btns .btn2:not([href])");
    if (isValid) {
        submitButton.classList.add("go"); // Enable button if valid
    } else {
        submitButton.classList.remove("go");
    }
}

//{"First Name":"Enrique","Last Name":"Brave","Date Of Birth":"2021-01-01","Email id":"enrique@gmail.com","Phone Number":"1800019000","Country":"US"}
