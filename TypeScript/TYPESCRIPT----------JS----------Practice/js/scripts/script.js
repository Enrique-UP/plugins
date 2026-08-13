"use strict";
(function () {
    const obj1 = {
        name: "Enrique",
        age: 40,
        place: "Delhi",
        full: function (street, state) {
            return `Hello! I am ${this.name} from ${this.place}, ${street}-${state} & ${this.age} years old.`;
        },
        s:null
    };
    localStorage.setItem("Details", JSON.stringify(obj1));
})();
//# sourceMappingURL=script.js.map