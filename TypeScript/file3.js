var isSub = false; // let isSub = false;
//isSub = "W3c"; // showing error
console.log(isSub);
var nameVar = "Demo";
//nameVar = 1; // showing error
nameVar = "Demo new";
console.log(nameVar);
var a = 5;
// const a = 5;
//a = "Demo"; // showing error
console.log(a);
var b = [1, 2, 3, 4, 5, 6]; // [1,2,3,4,5,6, "Demo"]; // showing error
console.log(b);
var c = ["One", "Two", "Three"]; // [1,2,3,4,5,6, "One","Two", "Three"]; // showing error
console.log(c);
var d = [1, 2, 3, 4, 5, 6, "One", "Two", "Three"];
// or const d : any = [1,2,3,4,5,6, "One","Two", "Three"];
console.log(d);
var e = 1;
e = "Demo";
console.log(e);
var arr = [1, 2, 3, 4, 5, 6]; // if type is not define then the ts reads this to number type because all numbers found in array.
//arr.push("Demo"); // showing error
arr.push(7);
arr[arr.length] = 8;
console.log(arr);
var mixed = [1, 2, 3, 4, 5, 6, "Seven", "Eight"];
mixed.push(9);
mixed.push("Ten");
//mixed.push(true); // showing error because this array is only number and string array.
console.log(mixed);
var person = {
    name: "Demo",
    age: 18,
    location: "Delhi",
    flag: true
};
//person.name = 22; // showing error because in first time defined string.
person.name = "Demo 1";
//console.log(person.skills); // showing error here but in js this error is not showed.
//person.flag = "Demo 1"; // showing error because is first time defined boolean.
var person1 = {
    name: "Demo"
};
var person2 = {
    name: "Demo",
    ags: 18
};
// or 
var person3;
person3 = {
    name: "Demo",
    ags: 18,
    location: "Delhi"
};
//porson3.location = "Delhi"; // not assign here
