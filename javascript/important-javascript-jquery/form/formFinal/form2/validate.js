document.addEventListener("DOMContentLoaded", () => {
    loadFormDataLocalStorage(); // Load stored data on refresh

    document.querySelectorAll(".formArea .item").forEach((item) => {
        item.querySelectorAll(".field").forEach((field) => {
            ["blur", "keyup", "change"].forEach((event) =>
                field.addEventListener(event, saveAllFormData)
            );
        });

        item.querySelectorAll(".btns .btn2:not([href])").forEach((btn) => {
            btn.addEventListener("click", saveAllFormData);
        });
    });
});

function saveAllFormData() {
    let isValid = true;
    let formData = {}; 

    document.querySelectorAll(".formArea .field").forEach((field) => {
        let fieldKey = getFieldKey(field.getAttribute("data-input"));
        let pattern = getValidationPattern(field.getAttribute("data-input"));
        let value = field.value.trim();

        if (!value || (pattern && !pattern.test(value))) {
            field.closest(".inputText").classList.add("error");
            isValid = false;
        } else {
            field.closest(".inputText").classList.remove("error");
            formData[fieldKey] = value;
        }
    });

    localStorage.setItem("formData", JSON.stringify(formData)); 

    updateButtonState(isValid);
}

function loadFormDataLocalStorage() {
    const storedData = JSON.parse(localStorage.getItem("formData")) || {};
    let isValid = true;

    document.querySelectorAll(".formArea .item .field").forEach((field) => {
        let fieldKey = getFieldKey(field.getAttribute("data-input"));

        if (storedData[fieldKey]) {
            field.value = storedData[fieldKey];
            field.closest(".inputText").classList.remove("error");
        } else {
            isValid = false;
        }
    });

    updateButtonState(isValid);
}

function getValidationPattern(type) {
    const patterns = {
        firstName: /^[A-Za-z]{2,}$/,
        lastName: /^[A-Za-z]{2,}$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/,
        number: /^[0-9]{10,15}$/,
        dob: /^\d{4}-\d{2}-\d{2}$/,
        selectCountry: /.+/,
        state: /.+/,
        age: /^\d{1,3}$/,
        address: /^[A-Za-z0-9\s,'-./#]{5,}$/
    };
    return patterns[type] || null;
}

function getFieldKey(dataInput) {
    const fieldMapping = {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email id",
        number: "Phone Number",
        dob: "Date Of Birth",
        selectCountry: "Country",
        state: "State",
        age: "Age",
        address: "Address",
    };
    return fieldMapping[dataInput] || dataInput;
}

function updateButtonState(isValid) {
    document.querySelectorAll(".formArea .item .btns .btn2:not([href])").forEach((submitButton) => {
        submitButton.classList.toggle("go", isValid);
    });
}
