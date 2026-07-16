var add = (n1:number, n2:number) => {
    console.log(n1 + n2);
};
//add(2, "3"); // result is not right.
add(2, 4);


var add1 = (n1:number, n2:number, isShown:boolean) => {
    if(isShown === true){
        console.log(n1 + n2);
    }else{
        return n1 + n2;
    }
    
};
//add1(2, 3, false); // not showing output
add1(2, 5, true);

const result = add1(2, 3, false);
console.log(result);
