// enum datatype is custom datatype.
var sun = "Sun";
var mon = "Mon";
var daysOfWeek;
(function (daysOfWeek) {
    //Sun, Mon, Tue, Wed, Thu, Fri, Sat
    daysOfWeek[daysOfWeek["Sun"] = 1] = "Sun";
    daysOfWeek[daysOfWeek["Mon"] = 2] = "Mon";
    daysOfWeek[daysOfWeek["Tue"] = 3] = "Tue";
    daysOfWeek[daysOfWeek["Wed"] = 4] = "Wed";
    daysOfWeek[daysOfWeek["Thu"] = 5] = "Thu";
    daysOfWeek[daysOfWeek["Fri"] = 6] = "Fri";
    daysOfWeek[daysOfWeek["Sat"] = 7] = "Sat"; // changing indexing
})(daysOfWeek || (daysOfWeek = {}));
;
var day = daysOfWeek.Mon;
if (day === daysOfWeek.Mon) {
    console.log("Is Monday");
}
else {
    console.log("Is not Monday");
}
// tuple datatype
var details = {
    id: 1,
    name: "Demo",
    role: [1, "Admin"]
    //role:["Admin"] // showing error
    //role:["Admin", 1] // showing error
};
