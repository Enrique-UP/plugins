function add(a:number, b:number){
    return a + b;
}
const result = add(2,3);
console.log(result);
console.log("Number show in blue:- " + result);


function add1(a:number, b:number) : string{
    const res =  a + b;
    return res.toString();
}
const result1 = add1(2,5);
console.log("String show in black:- " + result1);


function add4(a:number, b:number) : string{
    const res2 =  a + b;
    console.log("Inside the function " + res2);
    return;
}
const res2 = add4(2,6);
console.log("String show in black:- Outside the function " + res2);




function add2(a:number, b:number) : void{
    const res1 =  a + b;
    console.log(res1);
}
add2(2,4);


function checkNumber(a:any) : boolean{
    if(typeof a === "number"){
        return true;
    }else{
        return false;
    }
}
var r = checkNumber("5");
console.log(r);


function checkNumber1(a:any) : object{
    if(typeof a === "number"){
        return {
            status: true,
            msg: `${a} a is a number.`
        };
    }else{
        return {
            status: false,
            msg: `${a} a is not a number.`
        };
    }
}
var r1 = checkNumber1("5");
console.log(r1);