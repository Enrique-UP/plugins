document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".formArea .item.show").forEach((itemShow) => {
        loadFormDataLocalStorage(itemShow); // Load stored data on refresh

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
        let fieldKey = getFieldKey(field.getAttribute("data-input")); // Map field names

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
            case "dob":
                pattern = /^\d{4}-\d{2}-\d{2}$/;
                break;
            case "input":
            case "select":
                pattern = /.+/;
                break;
            default:
                pattern = null;
        }

        if (!field.value.trim() || (pattern && !pattern.test(field.value.trim()))) {
            field.closest(".inputText").classList.add("error");
            isValid = false;
        } else {
            field.closest(".inputText").classList.remove("error");
            formData[fieldKey] = field.value.trim(); // Store with custom key format
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
function loadFormDataLocalStorage(e) {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (!storedData) return;

    let isValid = true;
    e.querySelectorAll(".field").forEach((field) => {
        let fieldType = field.getAttribute("data-input");
        let fieldKey = getFieldKey(fieldType); // Get mapped key

        if (storedData[fieldKey]) {
            field.value = storedData[fieldKey]; // Set stored value
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

// Map field names to required keys
function getFieldKey(dataInput) {
    const fieldMapping = {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email id",
        number: "Phone Number",
        input: "Date Of Birth",
        select: "Country",
    };
    return fieldMapping[dataInput] || dataInput; // Default to the same name if not mapped
}
