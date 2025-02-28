document.querySelectorAll(".formArea .item").forEach(function (item) {
    item.querySelectorAll(".btns .btn2:not([href])").forEach(function(btn2){
        btn2.addEventListener("click", (e) => {
                form(item);
                fieldsLoad();
                saveFormData();
                e.preventDefault();
            }
        );
    });
    item.querySelectorAll(".field").forEach((field) => {
        ["blur", "keyup", "change"].forEach((event) =>
            field.addEventListener(event, () => {
                form(item);
                fieldsLoad();
                saveFormData();
            })
        );
    });
});

const fieldMappings = {
    fname: "First Name",
    lname: "Last Name",
    date: "Date of Birth",
    email: "Email Address",
    number: "Phone Number",
    country: "Country",
    age: "Age",
    father: "Father",
    friend: "Friend"
};

function form(e) {
    let isValid = true;

    e.querySelectorAll(".field").forEach(function (field) {
        let fieldValid = true;
        let dataInput = field.getAttribute("data-input");

        if (["fname", "lname", "father", "friend"].includes(dataInput)) {
            const namePattern = /^[A-Za-z]{2,}$/;
            if (!field.value || !namePattern.test(field.value)) fieldValid = false;
        } 
        else if (dataInput === "email") {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;
            if (!field.value || !emailPattern.test(field.value)) fieldValid = false;
        } 
        else if (dataInput === "number") {
            const numberPattern = /^[0-9]{10,15}$/;
            if (!field.value || !numberPattern.test(field.value)) fieldValid = false;
        } 
        else if (["date", "country"].includes(dataInput)) {
            if (!field.value) fieldValid = false;
        }
        else if (dataInput === "age") {
            const agePattern = /^(?:[0-9]{1,3})$/;
            if (!field.value || !agePattern.test(field.value.trim())) fieldValid = false;
        }
        else if (dataInput === "num") {
            const numPattern = /^[0-9]+$/;
            if (!field.value || !numPattern.test(field.value.trim())) fieldValid = false;
        }

        if (!fieldValid) {
            field.closest(".inputText").classList.add("error");
            isValid = false;
        } else {
            field.closest(".inputText").classList.remove("error");
        }
    });

    const submitButton = e.querySelector(".btns .btn2:not([href])");
    if (isValid) submitButton.classList.add("go");
    else submitButton.classList.remove("go");
}

function fieldsLoad() {
    document.querySelectorAll(".formArea .item.show").forEach(itemShow => {
        let isValid = true;

        itemShow.querySelectorAll(".field").forEach(field => {
            const key = field.getAttribute("data-input");
            const customKey = fieldMappings[key] || key;
            const storedValue = localStorage.getItem(customKey) || "";            
            field.value = storedValue;            
            if (!storedValue) isValid = false;
            field.addEventListener("input", () => localStorage.setItem(customKey, field.value));
        });
        
        const submitButton = itemShow.querySelector(".btns .btn2");
        if (isValid) submitButton.classList.add("go");
        else submitButton.classList.remove("go");
    });
}

function saveFormData() {
    let formData = {};    
    document.querySelectorAll(".formArea .item .field").forEach(field => {
        let key = field.getAttribute("data-input");
        let customKey = fieldMappings[key] || key;
        formData[customKey] = field.value;
    });    
    localStorage.setItem("formData", JSON.stringify(formData));
}

function loadFormData() {
    let storedData = localStorage.getItem("formData");
    if (storedData) {
        let formData = JSON.parse(storedData);
        document.querySelectorAll(".formArea .item .field").forEach(field => {
            let key = field.getAttribute("data-input");
            let customKey = fieldMappings[key] || key;
            if (formData[customKey]) field.value = formData[customKey];
        });
    }
}

fieldsLoad();
loadFormData();