let isSub : boolean = false; // let isSub = false;
//isSub = "W3c"; // showing error
console.log(isSub);

let nameVar : string = "Demo";
//nameVar = 1; // showing error
nameVar = "Demo new";
console.log(nameVar);

const a : number = 5;
// const a = 5;
//a = "Demo"; // showing error
console.log(a);

const b : number[] = [1,2,3,4,5,6]; // [1,2,3,4,5,6, "Demo"]; // showing error
console.log(b);

const c : string[] = ["One","Two", "Three"]; // [1,2,3,4,5,6, "One","Two", "Three"]; // showing error
console.log(c);

const d : any[] = [1,2,3,4,5,6, "One","Two", "Three"];
// or const d : any = [1,2,3,4,5,6, "One","Two", "Three"];
console.log(d);

let e : any = 1;
e = "Demo";
console.log(e);

let arr = [1,2,3,4,5,6]; // if type is not define then the ts reads this to number type because all numbers found in array.
//arr.push("Demo"); // showing error
arr.push(7);
arr[arr.length] = 8;
console.log(arr);

let mixed = [1,2,3,4,5,6, "Seven", "Eight"];
mixed.push(9);
mixed.push("Ten");
//mixed.push(true); // showing error because this array is only number and string array.
console.log(mixed);

let person = {
    name:"Demo",
    age:18,
    location:"Delhi", 
    flag: true
}
//person.name = 22; // showing error because in first time defined string.
person.name = "Demo 1";
//console.log(person.skills); // showing error here but in js this error is not showed.
//person.flag = "Demo 1"; // showing error because is first time defined boolean.

let person1 : object = {
    name:"Demo"
};

let person2 : {
    name:string,
    ags:number,

} = {
    name:"Demo",
    ags:18
};
// or 
let person3 : {
    name:string,
    ags:number,
    location:string

};
person3 = {
    name:"Demo",
    ags:18,
    location:"Delhi"
};
//porson3.location = "Delhi"; // not assign here
