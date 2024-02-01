// Boolean
let isSub = false; // or let isSub:boolean = false;
//isSub = "Demo"; // showing error
console.log(isSub);

// String
let nameVar:string = "Demo";
// name = 1; // showing error
console.log(nameVar);
nameVar = "NewDemo";
console.log(nameVar);

// Number
const a:number = 5;
//a = "Demo"; // showing error
console.log(a);

const b:number[] = [1,2,3,4,5,6]; //[1,2,3,4,5,6, "Demo"]; // showing error
console.log(b);
const c:string[] = ["Demo1","Demo2","Demo3","Demo4","Demo5","Demo6"]; //["Demo1","Demo2","Demo3","Demo4","Demo5",1]; // showing error
console.log(c);

// Any
var e:any = 12;
console.log(e);
e = "Demo";
console.log(e);

const d:any[] = ["Demo1","Demo2","Demo3","Demo4","Demo5",1];
console.log(d);

let number = [1,2,3,4,5,6]; // initially type of numbers is number.
number.push(7);
number[0] = 0;
// number.push("Demo"); // showing error
// number.push(false); // showing error
// number[0] = "0"; // showing error
// number[0] = true; // showing error
console.log(number);

let mixed = [1,2,3,4,5,6, "Demo"]; // initially type of numbers is number and string.
mixed.push(7);
mixed.push("Demo");
// mixed.push(false); // showing error
console.log(mixed);

let person = {
    name : "Demo",
    age : 10,
    location : "Delhi",
    plan: true
}
//console.log(person.skill); // showing error
console.log(person);
// person.name = 22; // showing error
console.log(person);


let persons : {
    name:string,
    age:number
} = {
    name : "Demo",
    age: 22
}
// or
let person1 : {
    name:string,
    age:number,
    location:string
} 
person1 = {
    name : "Demo",
    age: 22,
    location: "Delhi"
}
//person1.location = "Delhi"; // we can not assign here.