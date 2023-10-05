// enum datatype is custom datatype.
var sun = "Sun";
var mon = "Mon";

enum daysOfWeek {
    //Sun, Mon, Tue, Wed, Thu, Fri, Sat
    Sun = 1, Mon, Tue, Wed, Thu, Fri, Sat // changing indexing
};
const day:daysOfWeek = daysOfWeek.Mon;

if(day === daysOfWeek.Mon){
    console.log("Is Monday");
}else{
    console.log("Is not Monday");
}



// tuple datatype
const details : {
    id: number,
    name:string,
    role:[number, string]
} = {
    id:1,
    name:"Demo",
    role:[1, "Admin"]
    //role:["Admin"] // showing error
    //role:["Admin", 1] // showing error
}