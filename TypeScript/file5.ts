const add = (num1:number, num2:number, isShown:boolean) => {
    if(isShown === true)
        console.log(num1 + num2);
    else
        return num1 + num2;
}
//add(1,"2"); // showing error
//add(1,2, false); not output shows
//add(1,2, true);

const res = add(1,2, false);
//const res = add(1,2, true);
console.log(res);



function adds(a:number, b:number){
    return a+b;
}
//adds(2,3);
//console.log(adds(2,3));

const r = adds(2,3);
console.log(r);


// number shows in blue color in console.log
// string shows in black color in console.log
function addss(a:number, b:number) : string{
    const res = a+b;
    //return res.toString();

    console.log(res);
    return
}
const r1 = addss(2,3);
console.log(r1); // undefined answer


function addsss(a:number, b:number) : void{ // default has void
    const res = a+b;
    console.log(res);
}
const r2 = addss(2,3);
console.log(r2);// undefined answer


function check(a:any) : boolean{
    if(typeof a === "number"){
        return true;
    }else{
        return false;
    }    
}
var ru = check(2);
console.log(ru);


function check1(a:any) : object{
    if(typeof a === "number"){
        return {
            status:true,
            msg:`${a} is a number`
        };
    }else{
        return {
            status:false,
            msg:`${a} is not a number`
        };
    }    
}
var ru1 = check1(2);
console.log(ru1);
