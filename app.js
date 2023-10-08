// enum in Typescript
// what is enum
// make programme with enum
// use enum with variable
// use enum with function
var Days;
(function (Days) {
    Days[Days["mon"] = 0] = "mon";
    Days[Days["tue"] = 1] = "tue";
    Days[Days["wed"] = 2] = "wed";
    Days[Days["thu"] = 3] = "thu";
    Days[Days["fir"] = 4] = "fir";
    Days[Days["sat"] = 5] = "sat";
    Days[Days["sun"] = 6] = "sun";
})(Days || (Days = {}));
var whichDay;
whichDay = Days.wed;
console.log(whichDay);
// enum Days{
//     // mon=10,tue,wed,thu,fir,set,sun
//     mon="mon",tue="tue"
// }
// // function whichDay(day:Days){
// //     return day
// // }
// let whichDay=Days.mon
// // console.log(whichDay(Days.mon));
// console.log(whichDay === "mon");
// function user<T>(data:T):T
// {
//     return data
// }
// console.log(user({name:"niraj",age:90}).age);
