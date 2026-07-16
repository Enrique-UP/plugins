function add(a, b) {
    return a + b;
}
var result = add(2, 3);
console.log(result);
console.log("Number show in blue:- " + result);
function add1(a, b) {
    var res = a + b;
    return res.toString();
}
var result1 = add1(2, 5);
console.log("String show in black:- " + result1);
function add4(a, b) {
    var res2 = a + b;
    console.log("Inside the function " + res2);
    return;
}
var res2 = add4(2, 6);
console.log("String show in black:- Outside the function " + res2);
function add2(a, b) {
    var res1 = a + b;
    console.log(res1);
}
add2(2, 4);
function checkNumber(a) {
    if (typeof a === "number") {
        return true;
    }
    else {
        return false;
    }
}
var r = checkNumber("5");
console.log(r);
function checkNumber1(a) {
    if (typeof a === "number") {
        return {
            status: true,
            msg: "".concat(a, " a is a number.")
        };
    }
    else {
        return {
            status: false,
            msg: "".concat(a, " a is not a number.")
        };
    }
}
var r1 = checkNumber1("5");
console.log(r1);
