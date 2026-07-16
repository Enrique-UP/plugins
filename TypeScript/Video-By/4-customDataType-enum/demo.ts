enum dayOfTheWeek{
    //SUN, MON, TUE, WED, THU, FRI, SAT
    //or
    SUN=1, MON, TUE, WED, THU, FRI, SAT
    //or
    //SUN=101, MON, TUE, WED, THU, FRI, SAT
}
//const day:dayOfTheWeek = "MON"; // showing error
const day:dayOfTheWeek = dayOfTheWeek.MON
if(day === dayOfTheWeek.MON){
    console.log("It's monday");
}else{
    console.log("It's not monday");
}
document.write("Enum is a custom datatype. It has fixed value. Other value is not acceptable.")