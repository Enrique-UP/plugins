var add = function (num1, num2, isShown) {
    if (isShown === true)
        console.log(num1 + num2);
    else
        return num1 + num2;
};
//add(1,"2"); // showing error
//add(1,2, false); not output shows
//add(1,2, true);
var res = add(1, 2, false);
//const res = add(1,2, true);
console.log(res);
function adds(a, b) {
    return a + b;
}
//adds(2,3);
//console.log(adds(2,3));
var r = adds(2, 3);
console.log(r);
// number shows in blue color in console.log
// string shows in black color in console.log
function addss(a, b) {
    var res = a + b;
    //return res.toString();
    console.log(res);
    return;
}
var r1 = addss(2, 3);
console.log(r1); // undefined answer
function addsss(a, b) {
    var res = a + b;
    console.log(res);
}
var r2 = addss(2, 3);
console.log(r2); // undefined answer
function check(a) {
    if (typeof a === "number") {
        return true;
    }
    else {
        return false;
    }
}
var ru = check(2);
console.log(ru);
function check1(a) {
    if (typeof a === "number") {
        return {
            status: true,
            msg: "".concat(a, " is a number")
        };
    }
    else {
        return {
            status: false,
            msg: "".concat(a, " is not a number")
        };
    }
}
var ru1 = check1(2);
console.log(ru1);
