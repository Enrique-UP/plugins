// Boolean
var isSub = false; // or let isSub:boolean = false;
//isSub = "Demo"; // showing error
console.log(isSub);
// String
var nameVar = "Demo";
// name = 1; // showing error
console.log(nameVar);
nameVar = "NewDemo";
console.log(nameVar);
// Number
var a = 5;
//a = "Demo"; // showing error
console.log(a);
var b = [1, 2, 3, 4, 5, 6]; //[1,2,3,4,5,6, "Demo"]; // showing error
console.log(b);
var c = ["Demo1", "Demo2", "Demo3", "Demo4", "Demo5", "Demo6"]; //["Demo1","Demo2","Demo3","Demo4","Demo5",1]; // showing error
console.log(c);
// Any
var e = 12;
console.log(e);
e = "Demo";
console.log(e);
var d = ["Demo1", "Demo2", "Demo3", "Demo4", "Demo5", 1];
console.log(d);
var number = [1, 2, 3, 4, 5, 6]; // initially type of numbers is number.
number.push(7);
number[0] = 0;
// number.push("Demo"); // showing error
// number.push(false); // showing error
// number[0] = "0"; // showing error
// number[0] = true; // showing error
console.log(number);
var mixed = [1, 2, 3, 4, 5, 6, "Demo"]; // initially type of numbers is number and string.
mixed.push(7);
mixed.push("Demo");
// mixed.push(false); // showing error
console.log(mixed);
var person = {
    name: "Demo",
    age: 10,
    location: "Delhi",
    plan: true
};
//console.log(person.skill); // showing error
console.log(person);
// person.name = 22; // showing error
console.log(person);
var persons = {
    name: "Demo",
    age: 22
};
// or
var person1;
person1 = {
    name: "Demo",
    age: 22,
    location: "Delhi"
};
//person1.location = "Delhi"; // we can not assign here.
