var dayOfTheWeek;
(function (dayOfTheWeek) {
    //SUN, MON, TUE, WED, THU, FRI, SAT
    //or
    dayOfTheWeek[dayOfTheWeek["SUN"] = 1] = "SUN";
    dayOfTheWeek[dayOfTheWeek["MON"] = 2] = "MON";
    dayOfTheWeek[dayOfTheWeek["TUE"] = 3] = "TUE";
    dayOfTheWeek[dayOfTheWeek["WED"] = 4] = "WED";
    dayOfTheWeek[dayOfTheWeek["THU"] = 5] = "THU";
    dayOfTheWeek[dayOfTheWeek["FRI"] = 6] = "FRI";
    dayOfTheWeek[dayOfTheWeek["SAT"] = 7] = "SAT";
    //or
    //SUN=101, MON, TUE, WED, THU, FRI, SAT
})(dayOfTheWeek || (dayOfTheWeek = {}));
//const day:dayOfTheWeek = "MON"; // showing error
var day = dayOfTheWeek.MON;
if (day === dayOfTheWeek.MON) {
    console.log("It's monday");
}
else {
    console.log("It's not monday");
}
document.write("Enum is a custom datatype. It has fixed value. Other value is not acceptable.");
