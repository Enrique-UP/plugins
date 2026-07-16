var add = function (n1, n2) {
    console.log(n1 + n2);
};
//add(2, "3"); // result is not right.
add(2, 4);
var add1 = function (n1, n2, isShown) {
    if (isShown === true) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
};
//add1(2, 3, false); // not showing output
add1(2, 5, true);
var result = add1(2, 3, false);
console.log(result);
